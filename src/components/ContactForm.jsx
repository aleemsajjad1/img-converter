import emailjs from "emailjs-com";
import React, { useRef} from "react";
import {toast} from "react-toastify"
const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_oqcmz2f",
      "template_6clct6j",
      form.current,
      "3LY8Td2ZasENpKA5F"
    );
    toast.success("Email Send Successfully")
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-2 ">
        {/* Field */}
        <div className='"grid grid-cols-2 mb-2'>
          <div className="flex flex-col mb-2">
            <h4 className="font-sans mb-2">Email</h4>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="focus:outline-none focus:ring-2  h-12  px-3 border rounded-lg border-neutral-300"
            />
          </div>
          <div className="flex flex-col mb-2">
            <h4 className="font-sans mb-2">Name</h4>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter Your Name"
              className="focus:outline-none
             focus:ring-2   h-12  px-3 border rounded-lg border-neutral-300"
            />
          </div>
        </div>
        <h4 className="font-sans">Subject</h4>
        <input
          type="text"
          id="subject"
          name="Subject"
          required
          placeholder="Enter Your Subject"
          className="focus:outline-none mb-2
             focus:ring-2  h-12 w-full px-3 border rounded-lg border-neutral-300"
        />
        <h4 className="font-sans">Description</h4>
        <textarea
          name="description"
          required
          className="focus:outline-none focus:ring-2   h-48 w-full px-3 border rounded-lg border-neutral-300"
        />

        {/* Button */}
        <button className="h-12 mt-5 text-white bg-gray-800 rounded-lg font-sans uppercase font-semibold">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
