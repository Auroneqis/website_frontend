import React, { useState } from 'react';
import '../styleSheets/productContactForm.css';
import baseURL from '../api/api';

// ── Enum values must match backend ProductType enum ──────────────────────────
const PRODUCT_OPTIONS = [
    { value: '', label: 'Select a product' },
    { value: 'HRMS', label: 'HRMS' },
    // { value: 'AURONEQIS_EDGE', label: 'Auroneqis Edge' },
    // { value: 'AURONEQIS_CLOUD', label: 'Auroneqis Cloud' },
    // { value: 'AURONEQIS_EMBEDDED', label: 'Auroneqis Embedded' },
    // { value: 'AURONEQIS_ANALYTICS', label: 'Auroneqis Analytics' },
    // { value: 'CUSTOM_SOLUTION', label: 'Custom Solution' },
];

const INITIAL_FORM = {
    name: '',
    email: '',
    phoneNumber: '',
    product: '',
    message: '',
};

const INITIAL_ERRORS = {
    name: '',
    email: '',
    phoneNumber: '',
    product: '',
    message: '',
};

// ── Validation logic (mirrors backend constraints) ────────────────────────────
function validate(fields) {
    const errors = { ...INITIAL_ERRORS };

    if (!fields.name.trim()) {
        errors.name = 'Name is required.';
    } else if (fields.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters.';
    }

    if (!fields.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
        errors.email = 'Enter a valid email address.';
    }

    // Matches @Pattern(regexp = "^[0-9]{10}$")
    if (!fields.phoneNumber.trim()) {
        errors.phoneNumber = 'Phone number is required.';
    } else if (!/^[0-9]{10}$/.test(fields.phoneNumber.trim())) {
        errors.phoneNumber = 'Phone number must be exactly 10 digits.';
    }

    if (!fields.product) {
        errors.product = 'Please select a product.';
    }

    if (!fields.message.trim()) {
        errors.message = 'Message is required.';
    } else if (fields.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters.';
    } else if (fields.message.length > 2000) {
        errors.message = 'Message cannot exceed 2000 characters.';
    }

    return errors;
}

function hasErrors(errors) {
    return Object.values(errors).some(Boolean);
}

// ── Icons (inline SVG — no extra dependency) ──────────────────────────────────
const IconUser = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
);
const IconMail = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);
const IconPhone = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.6 12.6 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.6 12.6 0 0 0 2.8.7A2 2 0 0 1 22 16.9z" />
    </svg>
);
const IconBox = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.7L13 2.3a2 2 0 0 0-2 0L4 6.3A2 2 0 0 0 3 8v7.7a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
    </svg>
);
const IconMsg = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);
const IconChevron = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
    </svg>
);
const IconArrow = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);
const IconAlert = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
);
const IconCheck = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3dd68c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────
const ProductContactForm = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState(INITIAL_ERRORS);
    const [touched, setTouched] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Live-validate only touched fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        const next = { ...form, [name]: value };
        setForm(next);
        if (touched[name]) {
            const newErrors = validate(next);
            setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const newErrors = validate(form);
        setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mark all fields touched on submit
        setTouched({ name: true, email: true, phoneNumber: true, product: true, message: true });

        const validationErrors = validate(form);
        setErrors(validationErrors);

        if (hasErrors(validationErrors)) return;

        setLoading(true);
        try {
            // ── Replace with your actual API endpoint ──────────────────────────
            const response = await fetch(`${baseURL}/product-contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    phoneNumber: form.phoneNumber.trim(),
                    product: form.product,
                    message: form.message.trim(),
                }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                // Surface backend validation errors if any
                if (data.errors) {
                    setErrors(prev => ({ ...prev, ...data.errors }));
                } else {
                    throw new Error('Submission failed');
                }
                return;
            }

            setSubmitted(true);
        } catch (err) {
            console.error('Contact form error:', err);
            setErrors(prev => ({
                ...prev,
                message: 'Something went wrong. Please try again.',
            }));
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setForm(INITIAL_FORM);
        setErrors(INITIAL_ERRORS);
        setTouched({});
        setSubmitted(false);
    };

    return (
        <div className="pcf__wrapper">
            {/* Background decoration */}
            <div className="pcf__bg-blob pcf__bg-blob--1" aria-hidden="true" />
            <div className="pcf__bg-blob pcf__bg-blob--2" aria-hidden="true" />

            <div className="pcf__card" role="main">
                {/* ── Header ── */}
                <div className="pcf__header">
                    <div className="pcf__badge">
                        <span className="pcf__badge-dot" />
                        Product Inquiry
                    </div>
                    <h1 className="pcf__title">
                        Get in <span className="pcf__title-accent">Touch</span>
                    </h1>
                    <p className="pcf__subtitle">
                        Interested in an Auroneqis product? Fill out the form and our team will reach out within 24 hours.
                    </p>
                </div>

                {/* ── Body ── */}
                <div className="pcf__body">
                    {submitted ? (
                        /* ── Success State ── */
                        <div className="pcf__success">
                            <div className="pcf__success-icon">
                                <IconCheck />
                            </div>
                            <h2 className="pcf__success-title">Message Sent!</h2>
                            <p className="pcf__success-text">
                                Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
                            </p>
                            <button className="pcf__success-back" onClick={handleReset} type="button">
                                Send another message
                            </button>
                        </div>
                    ) : (
                        /* ── Form ── */
                        <form
                            className="pcf__form"
                            onSubmit={handleSubmit}
                            noValidate
                            aria-label="Product contact form"
                        >
                            {/* Row: Name + Email */}
                            <div className="pcf__row">
                                {/* Name */}
                                <div className="pcf__field">
                                    <label className="pcf__label" htmlFor="pcf-name">
                                        Full Name <span className="pcf__label-required">*</span>
                                    </label>
                                    <div className="pcf__input-wrap">
                                        <span className="pcf__input-icon"><IconUser /></span>
                                        <input
                                            id="pcf-name"
                                            className={`pcf__input${errors.name && touched.name ? ' pcf__input--error' : ''}`}
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="John Doe"
                                            autoComplete="name"
                                            aria-required="true"
                                            aria-describedby={errors.name && touched.name ? 'pcf-name-err' : undefined}
                                        />
                                    </div>
                                    {errors.name && touched.name && (
                                        <span className="pcf__error" id="pcf-name-err" role="alert">
                                            <IconAlert /> {errors.name}
                                        </span>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="pcf__field">
                                    <label className="pcf__label" htmlFor="pcf-email">
                                        Email Address <span className="pcf__label-required">*</span>
                                    </label>
                                    <div className="pcf__input-wrap">
                                        <span className="pcf__input-icon"><IconMail /></span>
                                        <input
                                            id="pcf-email"
                                            className={`pcf__input${errors.email && touched.email ? ' pcf__input--error' : ''}`}
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="john@example.com"
                                            autoComplete="email"
                                            aria-required="true"
                                            aria-describedby={errors.email && touched.email ? 'pcf-email-err' : undefined}
                                        />
                                    </div>
                                    {errors.email && touched.email && (
                                        <span className="pcf__error" id="pcf-email-err" role="alert">
                                            <IconAlert /> {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Row: Phone + Product */}
                            <div className="pcf__row">
                                {/* Phone */}
                                <div className="pcf__field">
                                    <label className="pcf__label" htmlFor="pcf-phone">
                                        Phone Number <span className="pcf__label-required">*</span>
                                    </label>
                                    <div className="pcf__input-wrap">
                                        <span className="pcf__input-icon"><IconPhone /></span>
                                        <input
                                            id="pcf-phone"
                                            className={`pcf__input${errors.phoneNumber && touched.phoneNumber ? ' pcf__input--error' : ''}`}
                                            type="tel"
                                            name="phoneNumber"
                                            value={form.phoneNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="9876543210"
                                            autoComplete="tel"
                                            maxLength={10}
                                            inputMode="numeric"
                                            aria-required="true"
                                            aria-describedby={errors.phoneNumber && touched.phoneNumber ? 'pcf-phone-err' : undefined}
                                        />
                                    </div>
                                    {errors.phoneNumber && touched.phoneNumber && (
                                        <span className="pcf__error" id="pcf-phone-err" role="alert">
                                            <IconAlert /> {errors.phoneNumber}
                                        </span>
                                    )}
                                </div>

                                {/* Product */}
                                <div className="pcf__field">
                                    <label className="pcf__label" htmlFor="pcf-product">
                                        Product <span className="pcf__label-required">*</span>
                                    </label>
                                    <div className="pcf__input-wrap">
                                        <span className="pcf__input-icon"><IconBox /></span>
                                        <select
                                            id="pcf-product"
                                            className={`pcf__select${errors.product && touched.product ? ' pcf__select--error' : ''}`}
                                            name="product"
                                            value={form.product}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            aria-required="true"
                                            aria-describedby={errors.product && touched.product ? 'pcf-product-err' : undefined}
                                        >
                                            {PRODUCT_OPTIONS.map(opt => (
                                                <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                        <span className="pcf__select-arrow"><IconChevron /></span>
                                    </div>
                                    {errors.product && touched.product && (
                                        <span className="pcf__error" id="pcf-product-err" role="alert">
                                            <IconAlert /> {errors.product}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="pcf__field">
                                <label className="pcf__label" htmlFor="pcf-message">
                                    Message <span className="pcf__label-required">*</span>
                                </label>
                                <div className="pcf__input-wrap" style={{ alignItems: 'flex-start' }}>
                                    <span className="pcf__input-icon" style={{ top: '13px', position: 'absolute' }}>
                                        <IconMsg />
                                    </span>
                                    <textarea
                                        id="pcf-message"
                                        className={`pcf__textarea${errors.message && touched.message ? ' pcf__textarea--error' : ''}`}
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Tell us about your requirements, budget, or any questions you have…"
                                        maxLength={2000}
                                        aria-required="true"
                                        aria-describedby={errors.message && touched.message ? 'pcf-msg-err' : undefined}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {errors.message && touched.message ? (
                                        <span className="pcf__error" id="pcf-msg-err" role="alert">
                                            <IconAlert /> {errors.message}
                                        </span>
                                    ) : <span />}
                                    <span className="pcf__footer-note" style={{ flexShrink: 0 }}>
                                        {form.message.length}/2000
                                    </span>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                className="pcf__btn"
                                type="submit"
                                disabled={loading}
                                aria-label="Send inquiry"
                            >
                                {loading ? (
                                    <>
                                        <span className="pcf__spinner" aria-hidden="true" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send Inquiry
                                        <span className="pcf__btn-icon" aria-hidden="true"><IconArrow /></span>
                                    </>
                                )}
                            </button>

                            <p className="pcf__footer-note">
                                We respect your privacy. Your information will never be shared with third parties.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductContactForm;