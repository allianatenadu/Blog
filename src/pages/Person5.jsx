import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Person5() {
  // Sample data for the person
  const personData = {
    name: "Salisu Hasana Lamine",
    history:
      "Candace has been a pioneer in the field of plant research, focusing on the effects of sunlight on plant growth. With over a decade of experience, her work has contributed significantly to sustainable agricultural practices.",
    image:
      "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png",
  };

  // Sample data for products
  const products = [
    {
      title: "Product 1",
      image: "src/assets/salisu1.jpg",
    },
    {
      title: "Product 2",
      image: "src/assets/Salisu.jpg",
    },
    {
      title: "Product 3",
      image: "src/assets/clifford1.jpg",
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
              src="src/assets/salisu1.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg text-black">
                The Labour Commission has directed the Public Services Workers
                Union to cease its strike action. The National Labour Commission
                (NLC) has ordered the Public Services Workers Union (PSWU) to
                suspend its strike action with immediate effect. The directive
                was issued on Wednesday, October 23, 2024, when the Fair Wages
                and Salaries Commission (FWSC) and the PSWU came before the NLC.
                The NLC had called a government team led by FWSC, which included
                the Ministry of Employment, Labour Relations, and Pensions
                (MELRP) and the Ministry of Finance, as well as the PSWU, to
                come before it over a labour dispute. This came after it got a
                warning from PSWU on October 14, 2024, threatening to launch an
                industrial action on Monday, October 21, 2024, over their
                requests for two institution-specific allowances for their
                members. Aside from ordering the PSWU to halt its strike, the
                NLC urged the parties to restart discussions on the two
                institution-specific allowances by October 31, 2024, and to
                report the conclusion of the meeting
              </p>
            </div>
          </div>

          <div className=" bg-white rounded-lg opacity-90 flex flex-col md:flex-row items-center  p-8 pb-8 ">
            <img
              src="src/assets/Salisu.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg text-black">
                Mortuary workers issue a new strike threat The Mortuary Workers
                Association of Ghana (MOWAG) has issued a warning to the
                government, indicating that its members will go on strike
                nationwide in November if their long-standing issues are not
                addressed. MOWAG is requesting better working conditions for its
                members, such as fair salaries, a safer workplace, and proper
                personal protective equipment (PPE).According to the
                Association, these issues have been unsolved since 2019, despite
                repeated requests to the administration.MOWAG's General
                Secretary, Richard Kofi Jordan, expressed anger in an interview
                with Citi FM. He accused the government of purposely delaying
                the process by asking extraneous information from the
                association, claiming that this is a technique to stall
                negotiations without addressing the source of their issues.
                Despite several attempts to engage the government over the
                years, mortuary workers continue to work in unsafe conditions
                that jeopardise their health and safety. MOWAG
                claims that the go
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Person5;
