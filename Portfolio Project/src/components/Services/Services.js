import { React } from "react";
import serviceImg from "../../assets/images/home_page_5.jpg";
import buildings1 from "../../assets/images/buildings(1).png";
import mechnicial1 from "../../assets/images/mechnicial (1).png";
import architecture1 from "../../assets/images/engineer (1).png";
import { Slide } from "react-reveal";

const Services = () => {
  return (
    <div className="py-6 md:py-12 service container px-6 md:px-24 mx-auto ">
      <h4 className="text-lg primary-color text-center mb-4 font-bold">
        What We Do
      </h4>
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-10">
        Services
      </h1>
      <div className="grid w-100 grid-cols-1 md:grid-cols-2 gap-4">
        <Slide bottom>
          <img
            src={serviceImg}
            style={{
              height: "100%",
              objectFit: "cover",
              borderRadius: "10",
            }}
          />
        </Slide>

        <div className="px-4">
          <Slide top>
            <div className="px-4 my-3 py-6 flex gap-x-4 shadow-lg bg-gray-900  transition duration-500">
              <div>
                <img src={buildings1} width={150} height={150} />
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="text-xl transition duration-500 text-gray-100"></h2>
                <p className="text-gray-400 transition duration-500">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind.
                </p>
                <button className="py-1 px-3 w-[120px] mt-3 rounded-sm primary-color bg-white">
                  Learn More
                </button>
              </div>
            </div>
          </Slide>
          <Slide top>
            <div className="px-4 my-3 py-6 flex gap-x-4 shadow-lg bg-primary-color text-white transition duration-500">
              <div>
                <img src={mechnicial1} width={150} height={150} />
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="text-xl transition duration-500 text-gray-100"></h2>
                <p className="text-white transition duration-500">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind.
                </p>
                <button className="py-1 px-3 w-[120px] mt-3 rounded-sm primary-color bg-white">
                  Learn More
                </button>
              </div>
            </div>
          </Slide>
          <Slide top>
            <div className="px-4 my-3 py-6 flex gap-x-4 shadow-lg bg-gray-500 hover:bg-gray-900 transition duration-500">
              <div>
                <img src={architecture1} width={150} height={150} />
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="text-xl transition duration-500 text-gray-100"></h2>
                <p className="text-gray-400 transition duration-500">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind.
                </p>
                <button className="py-1 px-3 w-[120px] mt-3 rounded-sm primary-color bg-white">
                  Learn More
                </button>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Services;
