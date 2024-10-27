import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Person1() {
  // Sample data for the person and products
  const personData = {
    name: "Jade Korasare Amaning",
    history:
      "Jane has been a pioneer in the field of plant research, focusing on the effects of sunlight on plant growth. With over a decade of experience, her work has contributed significantly to sustainable agricultural practices.",
    image:
      "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png",
  };

  const products = [
    {
      title: "Product 1",
      image: "src/assets/candace.jpg",
      description: "A brief description of Product 1.",
    },
    {
      title: "Product 2",
      image: "src/assets/jane1.jpg",
      description: "A brief description of Product 2.",
    },
    {
      title: "Product 3",
      image: "src/assets/collins3.jpg",
      description: "A brief description of Product 3.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        {/* Main content section with flex layout */}
        <div
          className="flex flex-col md:flex-row justify-center items-center m-10 p-8 bg-white rounded-lg opacity-90 min-h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1JQ1rsTf6dkEV64cJDhZ_BLDELNCJ94fxkbOAZmmmvcum4hA0GlzMxw-D9OJAjA8_pQ&usqp=CAU')", // Replace with your background image URL
          }}
        >
          <img
            src={personData.image}
            alt={personData.name}
            className="rounded-full w-48 h-48 object-cover mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{personData.name}</h1>
            <p className="text-lg text-black">{personData.history}</p>
          </div>
        </div>

        {/* Stories Section */}
        <div className="m-20 mb-20">
          <h2 className="text-2xl font-bold mb-4">Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={`Image for ${product.title}`}
                  className="rounded-lg w-full h-32 object-cover mb-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* More Details Section with Image and Details */}
        <div className="m-20">
          <h2 className="text-2xl font-bold mb-4">More Details</h2>
          <div className=" bg-white rounded-lg opacity-90 flex flex-col md:flex-row items-center p-8 pb-8 ">
            <img
              src="src/assets/jane1.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg text-black">
                Roadmap to 2024 Ghana movie awards announced. With the main
                awards ceremony scheduled on December 1, 2024, the Ghana Movie
                Awards' schedule for this year has been revealed. The awards
                ceremony acknowledges accomplishments in the country's film
                industry while stressing the numerous options open to
                filmmakers. Filmmakers, actors, and actresses have begun
                submitting nominations for Ghana's greatest night in the film
                industry, with a November 5, 2024 deadline. Interested industry
                players can present their works for the year under evaluation on
                the Ghana Movie Awards website. The awards ceremony, produced by
                GP Production and its partners, also aims to promote Ghana's
                rich cultural legacy while giving a platform for filmmakers to
                collaborate with a global audience. The major awards night will
                take place on December 1, 2024, at the Accra International
                Conference Centre (AICC).
              </p>
            </div>
          </div>
          <div className=" bg-white rounded-lg opacity-90 flex flex-col md:flex-row items-center  p-8 pb-8 ">
            <img
              src="src/assets/collins3.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg text-black">
                The Ministry of Health,the Ghana Health service,and their
                partners from the Global Polio Eradication Initiative have
                launched the 2024 National Oral Polio Vaccine Type 2(NOPV2)
                vaccination campaign in Koforidua under the theme,Kick Polio Out
                of Ghana,”as the country continues to face the threat of polio
                transmission despite previous eradication efforts. The campaign
                aims to vaccinate over six million children under five years old
                across the country. The Director-General of the Ghana Health
                Service,Dr. Patrick Kumah Aboagye,underscored the importance of
                boosting population immunity to prevent the spread of poliovirus
                type 2,especially following the recent environmental
                detections of the virus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Person1;
