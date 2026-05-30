"use client";

import { useState } from "react";

const ContactInner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    desc: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.location.trim()) newErrors.location = "Location is required";

    if (!formData.desc.trim()) newErrors.desc = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // For phone number: allow only numbers and limit to 10 digits
    if (id === "phone") {
      const numericValue = value.replace(/\D/g, ""); // remove non-digits
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [id]: numericValue });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }

    // Clear error on change
    setErrors({ ...errors, [id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("Sending...");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("location", formData.location);
    form.append("message", formData.desc);

    try {
      const res = await fetch("/sendMail.php", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", location: "", desc: "" });
        setErrors({});
      } else {
        setStatus("❌ Failed to send. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <>
      <section className="contact-form-section py-30 position-relative z-1">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-xl-6 col-lg-6 pe-lg-5">
              <div className="col-xl-12 col-md-12 my-12">
                <h2 className="mb-14 tifont fw600">Contact Us</h2>
                <p className="flex-grow-1 mb-14 tifont fw600">
                  Get in touch with us to discuss your requirements and receive
                  reliable, tailored solutions for your business needs.
                </p>
              </div>

              <div className="col-xl-12 col-md-12 my-12">
                <div className="contact-item bg-main-25 tifont fw600 border border-neutral-30 rounded-12 px-13 py-13 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                  <span className="contact-item__icon w-60 h-60 text-32 primary-color flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                    <i className="ph ph-map-pin-line" />
                  </span>
                  <div className="flex-grow-1 tifont fw600">
                    <h4 className="mb-12 tifont fw600">Office</h4>
                    <p className="text-neutral-500">
                      <strong>RM. MAYILERU & Co.,</strong>
                      <br />
                      25C, Alamu Nagar, 3rd Street 2nd Cross, Sathy Main Road,
                      Gandhipuram, Coimbatore ,Tamil Nadu-641012
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-md-12 my-12">
                <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-13 py-13 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                  <span className="contact-item__icon w-60 h-60 text-32 primary-color flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                    <i className="ph ph-envelope-open" />
                  </span>
                  <div className="flex-grow-1">
                    <h4 className="mb-12 tifont fw600">Email Address</h4>
                    <p className="text-neutral-500">mayileruandco@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-md-12 my-12">
                <div className="contact-item bg-main-25 border border-neutral-30 rounded-12 px-12 py-13 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600">
                  <span className="contact-item__icon w-60 h-60 text-32 primary-color flex-center rounded-circle bg-main-600 text-white flex-shrink-0">
                    <i className="ph ph-phone-call" />
                  </span>
                  <div className="flex-grow-1">
                    <h4 className="mb-12 tifont fw600">Phone Number</h4>
                    <p className="text-neutral-500">+91-422-2497455</p>
                    <p className="text-neutral-500">+91-9345732419</p>
                    <p className="text-neutral-500">+91-9443857739</p>
                    <p className="text-neutral-500">+91-9842231761</p>
                    <p className="text-neutral-500">+91-8778325799</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="p-24 bg-white rounded-12 box-shadow-md">
                <div className="border border-neutral-30 rounded-8 bg-main-25 p-24">
                  <form onSubmit={handleSubmit}>
                    <h4 className="mb-0">Get In Touch</h4>
                    <span className="d-block border border-neutral-30 my-14 border-dashed" />

                    {/* Name */}
                    <div className="mb-10">
                      <label
                        htmlFor="name"
                        className="text-neutral-700 text-lg fw-medium mb-12"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="common-input border-transparent focus-border-main-600"
                        placeholder="Enter Name..."
                      />
                      {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-24">
                      <label
                        htmlFor="email"
                        className="text-neutral-700 text-lg fw-medium mb-12"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="common-input border-transparent focus-border-main-600"
                        placeholder="Enter Email..."
                      />
                      {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="mb-24">
                      <label
                        htmlFor="phone"
                        className="text-neutral-700 text-lg fw-medium mb-12"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleChange}
                        className="common-input border-transparent focus-border-main-600"
                        placeholder="Enter Your 10-digit Number..."
                      />
                      {errors.phone && <p className="text-danger">{errors.phone}</p>}
                    </div>

                    {/* Location */}
                    <div className="mb-24">
                      <label
                        htmlFor="location"
                        className="text-neutral-700 text-lg fw-medium mb-12"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="common-input border-transparent focus-border-main-600"
                        placeholder="Enter Your Location..."
                      />
                      {errors.location && (
                        <p className="text-danger">{errors.location}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mb-24">
                      <label
                        htmlFor="desc"
                        className="text-neutral-700 text-lg fw-medium mb-12"
                      >
                        Message
                      </label>
                      <textarea
                        id="desc"
                        value={formData.desc}
                        onChange={handleChange}
                        className="common-input border-transparent focus-border-main-600 h-110"
                        placeholder="Enter Your Message..."
                      />
                      {errors.desc && <p className="text-danger">{errors.desc}</p>}
                    </div>

                    <div className="mb-0">
                      <button
                        type="submit"
                        className="btn btn-main primary-color flex-center gap-8 mt-30"
                      >
                        Send Message
                        <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                      </button>
                    </div>

                    {status && <p className="mt-3">{status}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
