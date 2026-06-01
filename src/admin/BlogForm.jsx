import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styleSheets/blogForm.css";
import baseURL from "../api/api";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";

export default function BlogForm() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);

    const [form, setForm] = useState({
        title: "",
        description: "",
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

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
            }),

            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],

        content: form.content,

        onUpdate: ({ editor }) => {
            handleChange("content", editor.getHTML());
        },
    });

    const setLink = () => {
        const url = prompt("Enter URL");

        if (!url) return;

        editor.chain().focus().setLink({ href: url }).run();
    };

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
            alert(error?.response?.data?.message || "Something went wrong");
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

                <div className="form-group">
                    <label>Description</label>
                    <input
                        value={form.description}
                        onChange={e => handleChange("description", e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Content</label>

                    {/* Toolbar */}
                    <div className="editor-toolbar">
                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleHeading({ level: 1 }).run()
                            }
                        >
                            H1
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleHeading({ level: 2 }).run()
                            }
                        >
                            H2
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                        >
                            Bold
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                        >
                            Italic
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().toggleBulletList().run()
                            }
                        >
                            Bullet List
                        </button>

                        <button
                            type="button"
                            onClick={setLink}
                        >
                            Link
                        </button>

                        {/* table */}
                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().insertTable({
                                    rows: 3,
                                    cols: 3,
                                    withHeaderRow: true,
                                }).run()
                            }
                        >
                            Table
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().addColumnAfter().run()
                            }
                        >
                            Add Column
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().addRowAfter().run()
                            }
                        >
                            Add Row
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                editor.chain().focus().deleteTable().run()
                            }
                        >
                            Delete Table
                        </button>
                    </div>

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