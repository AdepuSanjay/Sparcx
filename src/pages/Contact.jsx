import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // External CSS

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);  

h

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        setSuccess("");

        try {
            const res = await axios.post("https://falcon-ai-backend.vercel.app/api/contact", formData);
            if (res.data.success) {
                setSuccess("Message sent successfully!");
                
                setFormData({ name: "", email: "", phone: "", message: "" });
            }
        } catch (err) {
            console.error("Error sending message", err);
            setSuccess("Failed to send message. Please try again.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="contact-section">
            <h2 className="contact-title">Contact Us</h2>
            {success && <p className="message-success">{success}</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="contact-input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
                <input
                    type="email"
                    name="email"
                    className="contact-input"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
                <input
                    type="tel"
                    name="phone"
                    className="contact-input"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
                <textarea
                    name="message"
                    className="contact-textarea"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                />
                <button type="submit" className="contact-btn" disabled={loading}>
                    {loading ? "Processing..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default Contact;