
"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import emailjs from "emailjs-com"; // Import EmailJS



// Define the type for the form data
interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string; // Add an index signature
}

const Contact: React.FC = () => {
  // Initialize state with the FormData type
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceID = "krishno"; // Your service ID
    const templateID = "template_tn37see"; // Your template ID
    const userID = "81j2LH87ysHUxp4EJ"; // Your user ID (public key)

    // Send the email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email successfully sent!", response);
        alert("Thank you for contacting us! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send the message. Please try again later.");
      });
  };

  return (
    <div>
      <title>Contact Us - aldershothouseclearance</title>

      <div className="relative h-40 sm:h-60 md:h-96 lg:h-70">
        <Image
          src="/bracknellmanandvan.jpg"
          alt="Man and Van Services"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Contact
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-md"
          >
            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={5}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#A4DC54] text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-[#A4DC54] transition-all duration-300 w-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
