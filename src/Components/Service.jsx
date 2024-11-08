import truck from "../assets/Img/icons/truck.png";
import badge from "../assets/Img/icons/badge.png";
import availability from "../assets/Img/icons/availability.png";
import money from "../assets/Img/icons/money.png";
import secure from "../assets/Img/icons/secure.png";
import returns from "../assets/Img/icons/returns.png";
import price from "../assets/Img/icons/price.png";

const Service = () => {
  const services = [
    { name: "24/7 Support", image: availability },
    { name: "High Quality", image: badge },
    { name: "Free Delivery", image: truck },
    { name: "Money back guarantee", image: money },
    { name: "Secure Payment", image: secure },
    { name: "Easy Returns", image: returns },
    { name: "Best Price Guarantee", image: price },
    { name: "24/7 Support", image: availability },
    { name: "High Quality", image: badge },
    { name: "Free Delivery", image: truck },
    { name: "Money back guarantee", image: money },
    { name: "Secure Payment", image: secure },
    { name: "Easy Returns", image: returns },
    { name: "Best Price Guarantee", image: price },
    { name: "24/7 Support", image: availability },
    { name: "High Quality", image: badge },
    { name: "Free Delivery", image: truck },
    { name: "Money back guarantee", image: money },
    { name: "Secure Payment", image: secure },
    { name: "Easy Returns", image: returns },
    { name: "Best Price Guarantee", image: price },
  ];
  return (
    <div className="flex    w-full gap-3 overflow-hidden">
      <div className="flex marque p-4 lg:p-6 border-[1px] lg:border-t-0 border-[#8b8a8a]  flex-shrink-0 gap-7">
        {services.map((service, index) => (
          <h3
            key={index}
            className="para font-black tracking-wider lg:text-lg flex items-center gap-2 uppercase"
          >
            <img className="w-7 h-7 object-cover lg:w-10 lg:h-10" src={service.image} alt="" />
            {service.name}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Service;
