import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Registered Address",
      details: [
        "Kalam: A Voluntary Organization",
        "Araji Number 74, Barhat, Bithoor",
        "Kanpur Nagar, Pin-209217",
        "Uttar Pradesh, India",
      ],
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      details: [
        "154-1, Agnihotra Nagar, near Jhanda Chowk",
        "Makdi Kheda, Kalyanpur",
        "Kanpur Nagar, Pin-209217",
        "Uttar Pradesh, India",
      ],
    },
    {
      icon: FaPhone,
      title: "Contact Details",
      details: [
        "+91 6389133156",
        "+91 9838203305",
        "Dr. Vipin Kumar Shukla (Secretary)",
      ],
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      details: [
        "kalamngo2007@gmail.com",
        "Contact Officer: Dr. Vipin Kumar Shukla",
        "Secretary, Kalam Organization",
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ];

  const subjects = [
    "General Inquiry",
    "Volunteer Opportunity",
    "Program Information",
    "Partnership Proposal",
    "Donation Inquiry",
    "Media Inquiry",
    "Other",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-4">Kalam: A Voluntary Organization</p>
            <p className="text-lg text-primary-100">
              Reach out to us for any inquiries about our education, health,
              employment training, and environmental programs across Uttar
              Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us and get involved
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-300">
                    <info.icon className="text-primary-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 rounded-full transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card text-center"
                >
                  <div className="flex justify-center mb-4">
                    <FaCheckCircle className="text-green-500 text-4xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h3>
                <div className="card">
                  <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Varanasi, Uttar Pradesh</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-primary-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Office Address
                        </p>
                        <p className="text-gray-600 text-sm">
                          154-1, Agnihotra Nagar, near Jhanda Chowk
                          <br />
                          Makdi Kheda, Kalyanpur, Kanpur Nagar
                          <br />
                          Pin-209217, Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaClock className="text-primary-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Contact Information
                        </p>
                        <p className="text-gray-600 text-sm">
                          Dr. Vipin Kumar Shukla (Secretary)
                          <br />
                          +91 6389133156, +91 9838203305
                          <br />
                          kalamngo2007@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <p className="mb-4">
                  We typically respond to all inquiries within 24 hours. For
                  urgent matters, please call our office directly.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-300" />
                    <span className="text-sm">24-hour response time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-300" />
                    <span className="text-sm">Multiple contact options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="text-green-300" />
                    <span className="text-sm">Dedicated support team</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
