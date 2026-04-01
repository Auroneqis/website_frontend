import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styleSheets/blogForm.css";
import baseURL from "../api/api";

// ✅ TipTap imports
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogForm() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);

    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        keyword: "",
        image: null,
    });

    const handleChange = (key, value) =>
        setForm(prev => ({ ...prev, [key]: value }));

    const handleImage = file => {
        handleChange("image", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    // ✅ TipTap Editor
    const editor = useEditor({
        extensions: [StarterKit],
        content: form.content,
        onUpdate: ({ editor }) => {
            handleChange("content", editor.getHTML());
        },
    });

    const submit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);

        try {
            const data = new FormData();

            Object.entries(form).forEach(([k, v]) => {
                if (v) data.append(k, v);
            });

            await axios.post(`${baseURL}/admin/blog/create`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Blog created successfully");
            navigate("/admin_dashboardBlog");

        } catch (error) {
            console.error("Blog creation failed:", error);
            alert(
                error?.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="blog-form-page">

            <form className="blog-form-card" onSubmit={submit}>

                <h2>Create Blog</h2>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={form.title}
                        onChange={e => handleChange("title", e.target.value)}
                        required
                    />
                </div>

                {/* ✅ UPDATED CONTENT EDITOR (UI same container) */}
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
                    <label>Image</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => handleImage(e.target.files[0])}
                        required
                    />

                    {preview && (
                        <img
                            className="image-preview"
                            src={preview}
                            alt="Preview"
                        />
                    )}
                </div>

                <button disabled={loading}>
                    {loading ? "Creating..." : "Create Blog"}
                </button>

            </form>

        </div>
    );
};