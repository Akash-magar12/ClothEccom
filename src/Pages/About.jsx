import Navigiation from "../Components/Navigiation";
// import about from "../assets/images/about_img.png";
import about from "../assets/hero.jpg";
import team1 from "../assets/Img/team/team1.webp";
import team2 from "../assets/Img/team/team2.jpeg";
import team3 from "../assets/Img/team/team3.jpeg";
import team4 from "../assets/Img/team/team4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Back from "../Components/Back";

const About = () => {
  let teamMembers = [
    {
      img: team4,
      name: "Shivam Thapa",
      role: "Project Manager/Team Lead",
    },
    {
      img: team1,
      name: "Luna García",
      role: "Social Media Manager",
    },
    {
      img: team3,
      name: "Akash Budha",
      role: "Front-End Developer",
    },

    {
      img: team2,
      name: "Elena Tanaka",
      role: "Back-End Developer",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="min-h-screen">
      <Navigiation />
      <span className="pt-4 flex justify-end ">
        <Back />
      </span>
      <div className="mt-4 w-full min-h-screen">
        <div className="h-[70vw] sm:h-[50vw] p-4 lg:h-[30vw] border border-[#8b8a8a] flex flex-col justify-center items-center">
          <h3 className="text-xl md:text-4xl lg:text-6xl font-bold tracking-tighter">
            Your Story, Our Craft: Welcome to FASHION
          </h3>
          <p className="text-sm md:text-base md:text-center lg:text-xl text-gray-700 tracking-tight font-normal">
            We create clothing that reflects your individuality and values.
            Discover our commitment to quality and the environment.
          </p>
        </div>

        <div className="w-full  mt-4 lg:mt-10 ">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-3">About Us</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            <div className="left w-full h-[90vw] sm:h-[65vw] lg:w-1/2 lg:h-[30vw]">
              <img
                className="w-full h-full object-center object-cover rounded-lg shadow-lg"
                src={about}
                alt="About Us"
              />
            </div>
            <div className="right lg:p-3 lg:w-1/2 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg">
                  Welcome to [Your Brand Name]
                </h4>
                <h4 className="text-base">
                  Where Quality Meets Affordability.
                </h4>
                <p className="text-sm text-gray-700">
                  At Fashion, we’re not just selling clothes; we’re crafting
                  experiences. Our journey began with a vision to make fashion
                  accessible, stylish, and built to last. We believe that great
                  style doesn’t have to come with a hefty price tag, and we’re
                  here to prove it!
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg">Our Story</h4>
                <h4 className="text-base">
                  From Humble Beginnings to a Trusted Brand.
                </h4>
                <p className="text-sm text-gray-700">
                  Founded in 2020, our brand started as a small passion project
                  by [Your Name] in Dehradun, India. Today, we’re proud to be
                  recognized as a go-to destination for fashion lovers
                  everywhere. Every collection, stitch, and fabric choice
                  represents our commitment to quality and our dedication to our
                  customers.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-lg">Our Promise to You</h4>
                <h4 className="text-base">Fashion with a Conscience.</h4>
                <p className="text-sm text-gray-700">
                  We believe that clothing should feel as good as it looks.
                  That’s why we’re committed to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>
                    <span className="font-semibold">Sustainability:</span> Using
                    eco-friendly materials whenever possible.
                  </li>
                  <li>
                    <span className="font-semibold">Quality:</span> Creating
                    pieces designed to endure everyday wear and last.
                  </li>
                  <li>
                    <span className="font-semibold">Impact:</span> Making a
                    difference through initiatives that support our community
                    and the planet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4">
          <h2 className="text-2xl  lg:text-4xl mb-4 ">Our Team Members</h2>

          <Slider {...settings}>
            {teamMembers.map((team, id) => (
              <div
                key={id}
                className="w-full  n sm:w-[45%]  md:w-[30%] lg:w-[20rem]  shadow-lg"
              >
                <img
                  src={team.img}
                  alt={`Team Member ${id + 1}`} // Better alt text for accessibility
                  className="w-full h-[50vh] object-cover shadow-lg rounded-t-lg"
                />
                <div className="w-full h-[20%] p-3 flex items-center flex-col justify-center bg-white rounded-b-lg">
                  <h3 className="text-base font-semibold">{team.name}</h3>
                  <p className="text-sm text-gray-700">{team.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
