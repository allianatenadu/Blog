import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer";

function Home() {
  const recentResearch = [
    {
      title: "Jade Korasare Amaning",
      description: "Research on the effects of sunlight on plant growth.",
      image:
        "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png",
      link: "/person1", // Add a link to the person's page
    },
    {
      title: "Clifford Nii Martey",
      description: "Innovations in sustainable agriculture practices.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUR2uDPucNZPyp0F-R59wfVOokKTFo1030OibXjr1P-cwUa8Deg009IaBr3XP82D0hDoM&usqp=CAU",
      link: "/person2", // Add a link to Kofi's page
    },
    {
      title: "Candace Yeboah",
      description: "Exploring genetic modifications for higher yields.",
      image:
        "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png",
      link: "/person3", // Add a link to Ama's page
    },
    {
      title: "Mac Coolins Quaye",
      description:
        "Developing crops with enhanced resilience to climate change.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUR2uDPucNZPyp0F-R59wfVOokKTFo1030OibXjr1P-cwUa8Deg009IaBr3XP82D0hDoM&usqp=CAU",
      link: "/person4", // Add a link to Kwaku's page
    },
    {
      title: "Salisu Hasana Lamine",
      description: "Conserving plant species for future generations.",
      image:
        "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png",
      link: "/person5", // Add a link to Abena's page
    },
  ];

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with background image, shadow, and padding */}
      <div
        className="mt-16 flex items-center justify-between p-8 m-20 bg-white bg-cover bg-center rounded-lg"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/050/205/129/small/3d-flag-of-brazil-heart-shaped-shiny-wavy-awareness-ribbon-flag-3d-illustration-png.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Right side: Bold text */}
        <div className="w-1/2 flex flex-col justify-center items-start bg-opacity-75 p-4 bg-white rounded-lg">
          <h1 className="text-4xl font-bold text-black">Research Personal</h1>
          <p className="text-lg text-black mt-4">
            Discover the latest advancements in plant research, growth, and
            sustainability.
          </p>
        </div>

        {/* Left side: Image from external URL */}
        <div className="w-1/2 flex justify-center">
          <img
            className="rounded-full w-96 h-96 object-cover shadow-md"
            src="https://media.istockphoto.com/id/1354077790/photo/man-working-at-home.jpg?s=612x612&w=0&k=20&c=ePzpG0JgiHd4R85JyoyxIndl4vYQP6avw9nNJ6Zgg8w="
            alt="Plant Research"
          />
        </div>
      </div>

      {/* Research cards section below the main content */}
      <div className="m-20">
        <h2 className="text-2xl font-bold mb-4">Our Researchers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First two cards on top */}
          {recentResearch.slice(0, 2).map((research, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex items-center"
              style={{ height: "200px" }} // Set a fixed height for all cards
            >
              <img
                src={research.image}
                alt={research.title}
                className="rounded-lg w-32 h-full object-cover mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{research.title}</h3>
                <p className="text-gray-600">{research.description}</p>
                <Link to={research.link} className="text-blue-500 mt-2">
                  Learn More
                </Link>
              </div>
            </div>
          ))}

          {/* Middle card spanning two columns */}
          <div
            className="bg-white rounded-lg shadow-md ml-48 mr-48 p-4 flex items-center md:col-span-2"
            style={{ height: "200px" }} // Set a fixed height for the middle card
          >
            <img
              src={recentResearch[2].image}
              alt={recentResearch[2].title}
              className="rounded-lg w-32 h-full object-cover mr-4"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">
                {recentResearch[2].title}
              </h3>
              <p className="text-gray-600">{recentResearch[2].description}</p>
              <Link to={recentResearch[2].link} className="text-blue-500 mt-2">
                Learn More
              </Link>
            </div>
          </div>

          {/* Last two cards on bottom */}
          {recentResearch.slice(3).map((research, index) => (
            <div
              key={index + 3}
              className="bg-white rounded-lg shadow-md p-4 flex items-center"
              style={{ height: "200px" }} // Set a fixed height for all cards
            >
              <img
                src={research.image}
                alt={research.title}
                className="rounded-lg w-32 h-full object-cover mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{research.title}</h3>
                <p className="text-gray-600">{research.description}</p>
                <Link to={research.link} className="text-blue-500 mt-2">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
