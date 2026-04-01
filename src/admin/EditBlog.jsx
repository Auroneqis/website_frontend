import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styleSheets/blogForm.css";
import baseURL from "../api/api";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function EditBlog() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [blog, setBlog] = useState(null);

    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        keyword: "",
        image: null,
    });

    const handleChange = (key, value) =>
        setForm(prev => ({ ...prev, [key]: value }));

    const handleImage = (file) => {
        handleChange("image", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    // ✅ TipTap Editor
    const editor = useEditor({
        extensions: [StarterKit],
        content: "",
        onUpdate: ({ editor }) => {
            handleChange("content", editor.getHTML());
        },
    });

    // ✅ Fetch blog by ID
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${baseURL}/blog/id/${id}`);
                const blogData = res.data;

                setBlog(blogData);

                setForm({
                    title: blogData.title || "",
                    content: blogData.content || "",
                    category: blogData.category || "",
                    keyword: blogData.keyword || "",
                    image: null,
                });

                setPreview(blogData.imageUrl || null);

                // ✅ Set content inside TipTap
                if (editor && blogData.content) {
                    editor.commands.setContent(blogData.content);
                }

            } catch (error) {
                console.error("Error fetching blog:", error);
                alert("Failed to load blog");
            }
        };

        fetchBlog();
    }, [id, editor]);

    const getImageUrl = (blogImage) => {
        if (!blogImage) return placeholder;

        if (
            blogImage.startsWith("data:image") || blogImage.startsWith("blob:")
        ) {
            return blogImage;
        }

        // ✅ Remove "/api" from baseURL
        const rootURL = baseURL.replace("/api", "");
        return `${rootURL}${blogImage}`;
    };

    // ✅ Update blog
    const submit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const data = new FormData();

            Object.entries(form).forEach(([k, v]) => {
                if (v) data.append(k, v);
            });

            await axios.put(`${baseURL}/admin/blog/update/${id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Blog updated successfully");
            navigate("/admin_dashboardBlog");

        } catch (error) {
            console.error("Blog update failed:", error);
            alert(error?.response?.data?.message || "Update failed");
        } finally {
            setLoading(false);
        }
    };

    if (!blog) return <p className="status">Loading blog...</p>;

    return (
        <div className="blog-form-page">

            <form className="blog-form-card" onSubmit={submit}>

                <h2>Edit Blog</h2>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={form.title}
                        onChange={e => handleChange("title", e.target.value)}
                        required
                    />
                </div>

                {/* ✅ SAME UI (TipTap editor) */}
                <div className="form-group">
                    <label>Content</label>

                    <div className="tiptap-editor">
                        <EditorContent editor={editor} />
                    </div>
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <input
                        value={form.category}
                        onChange={e => handleChange("category", e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Keywords (comma separated)</label>
                    <input
                        value={form.keyword}
                        onChange={e => handleChange("keyword", e.target.value)}
                        placeholder="Web, AI, AWS"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Replace Image (optional)</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleImage(e.target.files[0])}
                    />

                    {preview && (
                        <img
                            className="image-preview"
                            src={getImageUrl(preview)}
                            alt="Preview"
                        />
                    )}
                </div>

                <button disabled={loading}>
                    {loading ? "Updating..." : "Update Blog"}
                </button>

            </form>

        </div>
    );
};