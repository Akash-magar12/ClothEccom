import Navigiation from "../Components/Navigiation";
import { MdLocationPin } from "react-icons/md";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import Back from "../Components/Back";

const Contact = () => {
  const contactDetails = [
    {
      id: 0,
      type: "availability",
      icon: <IoTime />,
      value: "Daily 9.00am to 10.00pm",
    },
    {
      id: 1,
      type: "address",
      icon: <MdLocationPin />,
      value: "Fashion Street, Dehradun",
    },
    {
      id: 2,
      type: "email",
      icon: <MdEmail />,
      value: "contact@example.com",
    },
    {
      id: 3,
      type: "phone",
      icon: <FaPhoneAlt />,
      value: "+1 (123) 456-7890",
    },
  ];

  return (
    <div>
      <Navigiation />
      <span className="pt-4 flex justify-end ">
        <Back />
      </span>
      <h2 className="text-3xl my-5">Connect with Our Team</h2>
      <div className="flex flex-wrap items-center gap-10 w-full">
        <div className="right flex flex-col gap-2 px-2 lg:px-4 w-full lg:w-1/2 h-full">
          <h3 className="text-3xl hidden md:block mb-4">Contact Details</h3>
          <p>
            Whether you have questions about our products, need assistance with
            an order, or simply want to give us feedback, we{`'`}re always happy
            to hear from you. Reach out to us using any of the methods below,
            and we{`'`}ll get back to you as soon as possible.
          </p>
          <div className="flex flex-wrap mt-4 gap-3">
            {contactDetails.map((contact) => (
              <div
                key={contact.id}
                className="border w-full lg:w-52 items-center flex gap-1 p-2 border-gray-700"
              >
                <div className="h-10 flex justify-center items-center w-10 rounded bg-black">
                  <span className="text-white">{contact.icon}</span>
                </div>
                <div>
                  <p className="text-sm capitalize">{contact.type}</p>
                  <p className="text-sm capitalize">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-4 items-center justify-between w-full">
            <p>Social Media:</p>
            <div className="flex items-center gap-4">
              <span className="border border-gray-400 p-1 cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="border border-gray-400 p-1 cursor-pointer">
                <FaWhatsapp />
              </span>
              <span className="border border-gray-400 p-1 cursor-pointer">
                <FaInstagram />
              </span>
              <span className="border border-gray-400 p-1 cursor-pointer">
                <FaYoutube />
              </span>
            </div>
          </div>
        </div>
        <div className="left w-full p-6 lg:w-[40%] rounded bg-[#F0F0F0] h-full">
          <h4 className="text-2xl mb-4">Get in Touch with Us.</h4>
          <form className="flex gap-6 flex-col items-start">
            <div className="flex gap-3 w-full">
              <input
                required
                type="text"
                className="w-1/2 border-none p-2 outline-none rounded"
                placeholder="Name..."
              />
              <input
                required
                type="text"
                className="w-1/2 border-none p-2 outline-none rounded"
                placeholder="Last Name..."
              />
            </div>
            <input
              required
              className="w-full outline-none border-none p-2 rounded"
              type="email"
              placeholder="Email..."
            />
            <textarea
              className="w-full outline-none border-none p-2 rounded"
              rows={7}
              name="message"
              placeholder="Write Message..."
              id="message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black rounded text-white border-none px-2 py-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
