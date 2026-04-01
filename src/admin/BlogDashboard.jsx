import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styleSheets/blogDashboard.css";
import { FaEye, FaHeart } from "react-icons/fa";
import baseURL from "../api/api";
import placeholder from "../assets/placeholder.jpg";

export default function BlogDashboard() {

    const navigate = useNavigate();

    // ✅ State (replaces Redux)
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    // ✅ Fetch blogs (replaces dispatch(fetchBlogs))
    const fetchBlogs = async (pageNumber) => {
        try {
            setLoading(true);

            const res = await axios.get(`${baseURL}/admin/blogs?page=${pageNumber} `);

            setBlogs(res.data.content || []);
            setTotalPages(res.data.totalPages || 0);
            setPage(res.data.number || 0);

            console.log("blog data: ", res.data);

        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Initial + page change
    useEffect(() => {
        fetchBlogs(page);
    }, [page]);

    // ✅ Delete blog (replaces dispatch(deleteBlog))
    const handleDelete = async (id) => {
        if (window.confirm("Delete this blog?")) {
            try {
                await axios.delete(`${baseURL}/admin/blog/delete/${id}`);
                fetchBlogs(page); // refresh list
            } catch (error) {
                console.error("Delete failed:", error);
            }
        }
    };

    // ✅ Same as your logic
    const getImageUrl = (blog) => {
        if (!blog.imageUrl) return placeholder;

        if (blog.imageUrl.startsWith("data:image")) {
            return blog.imageUrl;
        }

        // ✅ Remove "/api" from baseURL
        const rootURL = baseURL.replace("/api", "");
        return `${rootURL}${blog.imageUrl}`;
    };

    // ✅ Same pagination logic
    const getPaginationRange = (currentPage, totalPages) => {
        const visiblePages = 5;
        const half = Math.floor(visiblePages / 2);

        let start = Math.max(currentPage - half, 0);
        let end = Math.min(start + visiblePages, totalPages);

        if (end - start < visiblePages) {
            start = Math.max(end - visiblePages, 0);
        }

        return Array.from({ length: end - start }, (_, i) => start + i);
    };

    // ✅ Same HTML strip logic
    const stripHtml = (html) => {
        const temp = document.createElement("div");
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || "";
    };

    return (
        <div className="blog-dashboard">

            {/* Header */}
            <div className="dashboard-header">
                <h2>Blog Dashboard</h2>
                <button
                    className="createBtn"
                    onClick={() => navigate("/admin_createBlog")}
                >
                    Create Blog
                </button>
            </div>

            {/* Loading */}
            {loading && <p className="status">Loading blogs...</p>}

            {/* Empty state */}
            {!loading && blogs.length === 0 && (
                <p className="status">No blogs found.</p>
            )}

            {/* Blog Grid */}
            <div className="blog-grid">

                {Array.isArray(blogs) && blogs.map(blog => (
                    <div key={blog.id} className="blog-card">

                        <div className="image-wrapper">
                            <img
                                src={getImageUrl(blog)}
                                alt={blog.title}
                                onError={(e) => (e.target.src = placeholder)}
                            />
                        </div>

                        <div className="card-content">

                            <h4 className="card_title">{blog.title}</h4>

                            <div className="meta">
                                <span>{blog.category}</span>
                                <span>{blog.status}</span>
                            </div>

                            <p className="snippet">
                                {stripHtml(blog.content)?.slice(0, 90) || "No content available"}…
                            </p>

                            <div className="stats">
                                <FaEye size={15} color="blue" /> {blog.viewsCount} •{" "}
                                <FaHeart size={15} color="red" /> {blog.likesCount}
                            </div>

                            <div className="actions">
                                <button
                                    className="edit-btn"
                                    onClick={() => navigate(`/admin_editBlog/${blog.id}`)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="danger-btn"
                                    onClick={() => handleDelete(blog.id)}
                                >
                                    Delete
                                </button>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="pagination">

                    {/* FIRST */}
                    <button
                        disabled={page === 0}
                        onClick={() => setPage(0)}
                    >
                        «
                    </button>

                    {/* PREVIOUS */}
                    <button
                        disabled={page === 0}
                        onClick={() => setPage(page - 1)}
                    >
                        ‹
                    </button>

                    {/* PAGE NUMBERS */}
                    {getPaginationRange(page, totalPages).map((p) => (
                        <button
                            key={p}
                            className={page === p ? "active" : ""}
                            onClick={() => setPage(p)}
                        >
                            {p + 1}
                        </button>
                    ))}

                    {/* NEXT */}
                    <button
                        disabled={page === totalPages - 1}
                        onClick={() => setPage(page + 1)}
                    >
                        ›
                    </button>

                    {/* LAST */}
                    <button
                        disabled={page === totalPages - 1}
                        onClick={() => setPage(totalPages - 1)}
                    >
                        »
                    </button>

                </div>
            )}

        </div>
    );

};
