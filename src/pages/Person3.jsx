import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Person3() {
  // Sample data for the person
  const personData = {
    name: "Candace Yeboah",
    history:
      "Candace has been a pioneer in the field of plant research, focusing on the effects of sunlight on plant growth. With over a decade of experience, her work has contributed significantly to sustainable agricultural practices.",
    image:
      "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png",
  };

  // Sample data for products
  const products = [
    {
      title: "Product 1",
      image: "src/assets/jane1.jpg",
    },
    {
      title: "Product 2",
      image: "src/assets/candace.jpg",
    },
    {
      title: "Product 3",
      image: "src/assets/collins1.jpg",
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
              src="src/assets/candace.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <h4 className="font-bold p-5">
                LIAM PAYNE DEAD AT 31:ONE DIRECTION STAR DIES AFTER FALLING FROM
                HOTEL ROOF IN BUENOS ARIES
              </h4>
              <p className="text-lg text-black">
                On October 16, the singer fell from a balcony in Buenos Aires.
                The Public Prosecutor's Office informed his father that
                toxicological and other testing must be conducted before his
                remains can be freed and repatriated to the UK. Emergency
                services and other agencies have supplied information, which has
                begun to paint a picture of what happened. Payne was staying in
                an upscale hotel in Buenos Aires' Palermo district. He had been
                at the hotel for two or three days, according to workers, and
                was visiting his former bandmate Niall Horan. Horan was in
                Argentina on tour, and the two have maintained a close
                relationship since One Direction's split in 2016.Payne announced
                on Snapchat earlier this month that he was visiting Horan for a
                catch-up, writing, "It's been a while since me and Niall have
                spoken, we've got a lot to talk about." He clarified: "No bad
                vibes or anything like that, but we need to talk."
                Payne had spent much
              </p>
            </div>
          </div>

          <div className=" bg-white rounded-lg opacity-90 flex flex-col md:flex-row items-center  p-8 pb-8 ">
            <img
              src="src/assets/collins1.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg text-black">
                An Accra Circuit Court has discharged four more democracy hub
                protesters following the state’s withdrawal of charges against
                them. According to report,the state prosecution team notified
                the court that they had filed new charges to replace the initial
                charges brought against the protesters on September 25,2024.
                These four individuals were part of the 23 protectors who
                embarked on a recent demonstration over the illegal mining
                menace, popularly referred to as galamsey,and the economic
                mismanagement in the country at the 37 roundabout in Accra,where
                they clashed with the Ghana Police Service. They were
                subsequently arrested and charged with conspiracy to commit a
                crime,unlawful assembly,causing unlawful damage and offensive
                conduct but they were however placed not guilty to the charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Person3;
