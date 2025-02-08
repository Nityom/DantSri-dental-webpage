import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import "./ContactForm.scss";
import icon from "../../assets/banner/icons/Calling.png"; // Call icon

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        department: "",
    });

    const [errors, setErrors] = useState({});
    const [bookedSlots, setBookedSlots] = useState([]);

    const services = ["Dental Checkup", "Teeth Whitening", "Root Canal", "Braces Consultation"];
    const departments = ["Orthodontics", "Pediatrics", "Endodontics", "Periodontics"];

    useEffect(() => {
        const fetchBookedSlots = async () => {
            const { data, error } = await supabase.from("appointments").select("time");
            if (error) console.error("Error fetching booked slots:", error);
            else setBookedSlots(data.map((slot) => slot.time));
        };
        fetchBookedSlots();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const generateTimeSlots = () => {
        let slots = [];
        let startHour = 10;
        let endHour = 17;
        let minutes = ["00", "30"];

        for (let hour = startHour; hour < endHour; hour++) {
            for (let min of minutes) {
                let nextHour = hour;
                let nextMin = min === "00" ? "30" : "00";

                if (min === "30") nextHour += 1;

                let period = hour < 12 ? "AM" : "PM";
                let nextPeriod = nextHour < 12 ? "AM" : "PM";

                let formattedHour = hour > 12 ? hour - 12 : hour;
                let formattedNextHour = nextHour > 12 ? nextHour - 12 : nextHour;

                let timeLabel = `${formattedHour}:${min} ${period} - ${formattedNextHour}:${nextMin} ${nextPeriod}`;

                slots.push(timeLabel);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();
    console.log(timeSlots);  

    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) newErrors[key] = `${key} is required`;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const { error } = await supabase.from("appointments").insert([{ time: formData.time }]);

            if (error) {
                console.error("Error booking appointment:", error);
                alert("Error booking appointment. Please try again.");
            } else {
                alert("Appointment booked successfully!");

                const whatsappMessage = `Hello, I would like to book an appointment. Here are my details:
                - Name: ${formData.name}
                - Email: ${formData.email}
                - Phone: ${formData.phone}
                - Date: ${formData.date}
                - Time: ${formData.time}
                - Service: ${formData.service}
                - Department: ${formData.department}`;

                const phoneNumber = "+917796308778"; // Replace with your WhatsApp number
                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                window.open(whatsappURL, "_blank");

                setBookedSlots([...bookedSlots, formData.time]);
                setFormData({ name: "", email: "", phone: "", date: "", time: "", service: "", department: "" });
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
    <div className="contact-header">
    <h2 className="appointment-title">Book Your Appointment</h2>
    <div className="contact-info">
        <img src={icon} alt="Call Icon" className="call-icon" />
        <span className="call-number">083402 20139</span>
    </div>
</div>


            <div className="form-grid">
                {/* Left Column */}
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                        {errors.name && <small className="error-text">{errors.name}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                        {errors.email && <small className="error-text">{errors.email}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                        {errors.phone && <small className="error-text">{errors.phone}</small>}
                    </div>
                </div>

                {/* Right Column */}
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="service">Select Service</label>
                        <select name="service" className="form-control" value={formData.service} onChange={handleChange} required>
                            <option value="">Select a Service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>
                        {errors.service && <small className="error-text">{errors.service}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="department">Select Department</label>
                        <select name="department" className="form-control" value={formData.department} onChange={handleChange} required>
                            <option value="">Select a Department</option>
                            {departments.map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                        {errors.department && <small className="error-text">{errors.department}</small>}
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    max={new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split("T")[0]}
                    required
                    onKeyDown={(e) => e.preventDefault()}
                    onInput={(e) => {
                        const selectedDate = new Date(e.target.value);
                        if (selectedDate.getDay() === 0) {
                            alert("Sundays are not available for booking. Please select another date.");
                            e.target.value = "";
                        }
                    }}
                />
                {errors.date && <small className="error-text">{errors.date}</small>}
            </div>

            <button type="submit" className="btn appointment-btn">Book an Appointment</button>
        </form>
    );
};

export default ContactForm;
