import linkedin_svg from "./images/linkedin.svg";
import whatsapp_svg from "./images/whatsapp.svg";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the action to send the email
    window.location.href = `mailto:your-email@example.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage: %0A${formData.message}`;

    // Reset the form fields
    setFormData({ name: "", email: "", message: "" });

    // Show the pop-up message
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0d0723] text-white lg:pt-[60px] pt-[50px] xl:px-[140px] px-[40px] pb-[30px]"
    >
      <div className="flex flex-col items-center pb-[100px]">
        <h1 className="text-[#965eff] font-bold text-[2rem] capitalize tracking-wide">
          contact
        </h1>
        <div className="bg-[#c9ff18] w-24 h-[2px] rounded-sm"></div>
      </div>
      <section className="md:flex md:gap-x-[30px] xl:gap-x-[130px] md:justify-center items-center xl:text-left text-center">
        <div>
          <h1 className="mb-[5px] capitalize">email</h1>
          <div className="h-[1px] w-[100px] md:w-[150px] mx-auto lg:w-[400px] bg-[#828282]"></div>
          <h1 className=" tracking-wide mt-[10px] text-[#96b923]">
            NoahHamid111@gmail.com
          </h1>
          <div className="h-[1px] w-[200px] md:w-[300px] mx-auto lg:w-[400px] mt-[5px] bg-[#828282]"></div>
          <div className="flex justify-center xl:justify-start mt-[10px] gap-5 ">
            <a
              href="https://www.linkedin.com/in/noah-hamid-7109482a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin_svg} className="w-[25px] " alt="LinkedIn" />
            </a>

            <a
              href="https://wa.me/251902636603"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp_svg} className="w-[25px]" alt="WhatsApp" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-bona text-[#dcdcdc] font-semibold text-[1.5rem] mb-10 mt-[50px] xl:mt-0 capitalize">
            get in touch
          </h1>
          <div>
            <form
              onSubmit={handleSubmit}
              className="gap-[10px]  items-center flex flex-col capitalize"
            >
              <input
                type="text"
                name="name"
                placeholder="name"
                className="rounded-lg focus:outline-none w-full md:w-[400px] xl:w-[700px] lg:w-[500px] bg-[#182c62] h-[50px] text-[1rem] px-2 text-[#fff]"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="rounded-lg focus:outline-none w-full md:w-[400px] xl:w-[700px] lg:w-[500px] bg-[#182c62] h-[50px] text-[1rem] px-2 text-[#fff]"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="message"
                className="h-[200px] rounded-lg py-2 focus:outline-none w-full md:w-[400px] xl:w-[700px] lg:w-[500px] bg-[#182c62] text-[1rem] px-2 text-[#fff]"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="h-[50px] px-10 rounded-md bg-[#232790] text-white hover:bg-[#6433ee] duration-500 w-full"
              >
                Submit
              </button>
            </form>

            {isSubmitted && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-[#292681] p-8 rounded-lg shadow-lg text-center">
                  <h2 className="text-2xl mb-4">Thank you!</h2>
                  <p>Your message has been sent successfully.</p>
                  <button
                    onClick={handleClose}
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* footer */}
      <div className="lg:w-[800px] xl:w-[1000px] md:w-[600px] w-[250px] mx-auto h-[.5px] bg-[#828282] mt-[100px]">
        {" "}
      </div>
      <p className="text-center text-[#ece2e2] mt-1">
        © {new Date().getFullYear()}. All rights reserved.
      </p>
    </section>
  );
};
export default Contact;
