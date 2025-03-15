import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsSubmitted(true);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-center text-lg mb-8">
                We would love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out.
            </p>

            {isSubmitted ? (
                <div className="bg-green-100 p-4 text-green-800 border border-green-500 rounded-md">
                    <h2 className="text-xl font-semibold">Thank you for contacting us!</h2>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            )}

            <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold">Alternatively, you can reach us at:</h3>
                <p className="mt-2">Email: foodtail@gmail.com</p>
                <p>Phone: (+91) 9998880000</p>
                <p className="mt-2">
                    Or visit us at our office:
                </p>
                <p>123 Hauz Khas, New Delhi, India</p>
            </div>
        </div>
    );
};

export default Contact;
