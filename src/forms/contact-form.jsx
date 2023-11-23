import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")

  return (
    <>
      <form id="contact-form" onClick={(e) => {
        e.preventDefault()
        router.push(`mailto:greenovationeco@gmail.com?subject=${serviceType} - ${name} - ${email} - ${phoneNumber}&body=${message}`)
      }} method="POST">
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Your Name*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="text"
                type="text"
                value={serviceType}
                onChange={(event) => setServiceType(event.target.value)}
                placeholder="Service Type"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="text"
                type="phone"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Enter Your Message here"
              >{message}</textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
