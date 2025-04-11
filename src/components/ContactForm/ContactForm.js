import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import "./ContactForm.scss";
import icon from "../../assets/banner/icons/Calling.png"; // Call icon

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        doctor: "",
        location: "",
        date: "",
        time: "",
    });

    const [errors, setErrors] = useState({});
    const [bookedSlots, setBookedSlots] = useState([]);

    const doctors = ["Dr. S.N. Prasad", "Dr. Jyoti"];
    const locations = ["Jhanjharpur", "Madhepur"];

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
        "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"
    ];

    useEffect(() => {
        const fetchBookedSlots = async () => {
            if (!formData.date) return;

            const { data, error } = await supabase
                .from("appointments")
                .select("time")
                .eq("date", formData.date);

            if (error) {
                console.error("Error fetching booked slots:", error);
            } else {
                setBookedSlots(data.map((slot) => slot.time));
            }
        };

        fetchBookedSlots();
    }, [formData.date]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "date") {
            const selectedDate = new Date(value);
            if (selectedDate.getDay() === 0) {
                alert("Appointments cannot be booked on Sundays. Please choose another date.");
                setFormData({ ...formData, date: "" });
                return;
            }
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const { error } = await supabase
                .from("appointments")
                .insert([{ ...formData }]);

            if (error) {
                console.error("Error booking appointment:", error);
                alert("Error booking appointment. Please try again.");
            } else {
                alert("Appointment booked successfully!");
                setBookedSlots([...bookedSlots, formData.time]);

                const whatsappMessage = `Hello, I would like to book an appointment. Here are my details:
                - Name: ${formData.name}
                - Email: ${formData.email}
                - Phone: ${formData.phone}
                - Doctor: ${formData.doctor}
                - Location: ${formData.location}
                - Date: ${formData.date}
                - Time: ${formData.time}`;

                const phoneNumber = "+917796308778";
                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                window.location.href = whatsappURL;

                setFormData({ name: "", email: "", phone: "", doctor: "", location: "", date: "", time: "" });
            }
        }
    };

    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) newErrors[key] = `${key} is required`;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getTodayDate = () => new Date().toISOString().split("T")[0];

    const getMaxDate = () => {
        let maxDate = new Date();
        maxDate.setDate(maxDate.getDate() + 30);
        return maxDate.toISOString().split("T")[0];
    };

    return (
        <section className="contact-form">
            <div className="contact-header">
                <h1 className="appointment-title">Book Your Appointment</h1>
                <div className="contact-info">
                    <img src={icon} alt="Call us for appointment booking" className="call-icon" loading="lazy" />
                    <a href="https://wa.me/918340220139" target="_blank" rel="noopener noreferrer" className="call-number">
                        083402 20139
                    </a>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                    {errors.name && <small className="error-text">{errors.name}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Select Date</label>
                    <input 
                        type="date" 
                        name="date" 
                        className="form-control" 
                        value={formData.date} 
                        min={getTodayDate()} 
                        max={getMaxDate()} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Select Time</label>
                    <select name="time" className="form-control" value={formData.time} onChange={handleChange} required>
                        <option value="">Select a Time</option>
                        {timeSlots
                            .filter(slot => !bookedSlots.includes(slot))
                            .map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Select Doctor</label>
                    <select name="doctor" className="form-control" value={formData.doctor} onChange={handleChange} required>
                        <option value="">Select a Doctor</option>
                        {doctors.map((doctor, index) => (
                            <option key={index} value={doctor}>{doctor}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="location">Select Location</label>
                    <select name="location" className="form-control" value={formData.location} onChange={handleChange} required>
                        <option value="">Select a Location</option>
                        {locations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn appointment-btn">Book an Appointment</button>
            </form>
        </section>
    );
};

export default ContactForm;
