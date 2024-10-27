import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Person2() {
  // Sample data for the person
  const personData = {
    name: "Clifford Nii Martey",
    history:
      "Collins has been a pioneer in the field of plant research, focusing on the effects of sunlight on plant growth. With over a decade of experience, her work has contributed significantly to sustainable agricultural practices.",
    image:
      "https://e7.pngegg.com/pngimages/168/827/png-clipart-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-thumbnail.png",
  };

  // Sample data for products
  const products = [
    {
      title: "Product 1",
      image: "src/assets/clifford1.jpg",
    },
    {
      title: "Product 2",
      image: "src/assets/clifford2.jpg",
    },
    {
      title: "Product 3",
      image: "src/assets/collins3.jpg",
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
              src="src/assets/clifford2.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <h4 className="font-bold p-5">
                EMERGING HEALTH CHALLENGES IN GHANA: STROKE, SUICIDE, AND
                SOCIETAL STIGMAS CONFRONT PUBLIC HEALTH INITIATIVES
              </h4>
              <p className="text-lg text-black">
                In recent months, there has been a growing concern in Ghana
                regarding deaths linked to various health and social issues.
                Major causes of death in the country are strokes, respiratory
                infections, and heart disease, typically associated with high
                blood pressure, poor diet, and inadequate access to clean air
                and healthcare. Neonatal disorders also pose considerable
                threats, as premature births and insufficient prenatal care
                affect infant mortality rates. Moreover, infectious diseases
                like tuberculosis and HIV/AIDS remain significant health
                challenges, despite ongoing public health initiatives and
                educational efforts to address them. The rising suicide rates
                are another significant concern, with more than 500 attempted
                suicides and 81 deaths recorded in the first half of 2024. This
                has led to initiatives aimed at reducing the stigma surrounding
                mental health and increasing resources for those at risk,
                especially given that social stigmas and lack of mental health
                support create barriers for many individuals. Recent legislative
                measures in Ghana to decriminalize suicide are part of an
                initiative to promote open conversations and support rather than
                penalizing those facing mental health difficulties. These health
                and social challenges underscore the necessity for thorough
                healthcare reforms, improved public health education, and
                enhanced mental health services throughout the country.
              </p>
            </div>
          </div>
          <div className=" bg-white rounded-lg opacity-90 flex flex-col md:flex-row items-center  p-8 pb-8 ">
            <img
              src="src/assets/clifford1.jpg" // Replace with actual image URL
              alt="Additional Research Image"
              className="rounded-lg w-48 h-48 object-cover mb-4 md:mr-8"
            />
            <div>
              <h4 className="font-bold p-5">GALAMSEY IN GHANA</h4>
              <p className="text-lg text-black">
                Recent developments in Ghana's fight against illegal mining,
                commonly referred to as “galamsey,” have emerged. The government
                and labor unions are at odds over the necessity of implementing
                stronger measures to tackle the environmental harm caused by
                galamsey, which has contaminated water sources and impacted
                local communities. Consequently, the General Agricultural
                Workers Union (GAWU) had initially declared a nationwide strike
                set for October 10, 2024, aimed at compelling the government to
                take decisive action against illegal mining. The purpose of the
                strike was to affect various sectors and highlight the urgent
                need for intervention. Nonetheless, after negotiations,
                Organised Labour reached a consensus with the government, which
                led to the suspension of the strike. The government has pledged
                to deploy military and other law enforcement agencies to combat
                illegal mining activities, as well as to review relevant laws.
                Although this has resulted in a temporary resolution, some union
                members remain doubtful about the efficacy of these commitments
                and are vigilantly observing the government’s actions to ensure
                that real progress is achieved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Person2;
