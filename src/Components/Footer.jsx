import google from "../assets/Img/pay/google.png";
import apple from "../assets/Img/pay/apple.png";
import paypal from "../assets/Img/pay/paypal.png";
import visa from "../assets/Img/pay/visa.png";
// import pay from "../assets/pay.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 py-4 bg-black text-white lg:px-20 space-y-4 lg:space-y-0">
      <div>
        <h2 className="text-lg font-semibold mb-2">FASHION</h2>
        <p className="text-sm lg:text-base text-[#dee0e4] lg:w-[80%]">
          We believe that quality is the foundation of confidence. Our
          commitment to providing you with premium styles ensures that you not
          only look great but feel great in every piece you wear.
        </p>
        {/* <img className="w-40 mt-4" src={pay} alt="Payment options" /> */}
        <div className="flex border mt-4 border-[#dee0e459] w-fit px-3 items-center gap-3">
          <img className="w-10  " src={visa} alt="" />
          <img className="w-10  " src={google} alt="" />
          <img className="w-10  " src={paypal} alt="" />
          <img className="w-10   " src={apple} alt="" />
        </div>
      </div>

      <div className="lg:ml-16">
        <h2 className="text-lg  font-semibold mb-2">Community</h2>
        <ul className="space-y-1 text-sm lg:text-base text-[#dee0e4]">
          <li>Whatsapp</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Help & Support</h2>
        <ul className="space-y-1 text-sm lg:text-base text-[#dee0e4] capitalize">
          <li>shop</li>
          <li>faq</li>
          <li>shipping</li>
          <li>returns</li>
          <li>terms & conditions</li>
          <li>privacy policy</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="text-sm lg:text-base text-[#dee0e4]">
          Have questions? We’re here to help! Reach out via email or phone.
        </p>
        <p className="text-sm lg:text-base text-[#dee0e4] mt-2">
          <strong>Email:</strong> support@fashionbrand.com
        </p>
        <p className="text-sm lg:text-base text-[#dee0e4]">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <div className="flex space-x-4 mt-4">
          <FaFacebookF />
          <FaInstagram />
          <FaWhatsapp />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
