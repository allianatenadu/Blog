import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Person4() {
  // Sample data for the person
  const personData = {
    name: "Mac Collins Quaye",
    history:
      "Collins has been a pioneer in the field of plant research, focusing on the effects of sunlight on plant growth. With over a decade of experience, her work has contributed significantly to sustainable agricultural practices.",
    image:
      "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png",
  };

  // Sample data for products
  const products = [
    {
      title: "Product 1",
      image: "src/assets/collins4.jpg",
    },
    {
      title: "Product 2",
      image: "src/assets/collins2.jpg",
    },
    {
      title: "Product 3",
      image: "src/assets/clifford2.jpg",
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
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1JQ1rsTf6dkEV64cJDhZ_BLDELNCJ94fxkbOAZmmmvcum4hA0GlzMxw-D9OJAjA8_pQ&usqp=CAU')",
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
              src="src/assets/collins4.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg text-black">
                The incredible work of Ghanaian coach kwasi Appiah with the
                Sudanese national team has been recognised by the Confederation
                of African Football with a nomination in the CAF coach of the
                year category of the 2024 CAF awards. Kwasi Appiah,who is the
                only Ghanaian coach in the category,has enjoyed a stellar time
                with Sudan,putting the war-torn country on the brink of
                qualification for the 2025 Africa Cup of Nations. Appiah,who was
                appointed in September 2023,has built a great team that is yet
                to loose a game where in 12 matches played the gaffer has lost
                just one game.
              </p>
            </div>
          </div>

          <div className=" bg-white rounded-lg opacity-90 flex flex-col md:flex-row items-center  p-8 pb-8  ">
            <img
              src="src/assets/collins2.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg text-black">
                The 16th congregation graduation ceremony at the University of
                Professional Studies, Accra (UPSA), was a proud moment for
                graduates and the university alike. This year’s event
                highlighted the achievements of students from various faculties
                who completed their academic programs successfully. Inspiring
                speeches from faculty members and distinguished guests
                celebrated the students’ hard work and dedication. The day,
                shared with families, friends, and the UPSA community,
                underscored UPSA’s commitment to nurturing skilled
                professionals, making the occasion truly memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Person4;
