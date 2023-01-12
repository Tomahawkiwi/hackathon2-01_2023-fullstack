import React from "react";
import Image from "next/image";

function Homepage() {
  return (
    <div>
      <div className="bg-primary-blue-gradient h-screen relative flex flex-col items-center ">
        <Image
          src="/logo/logo-vroom_blanc 1.svg"
          alt="logo de vroom"
          width={0}
          height={0}
          className="w-[451px] h-[157px] lg:w-[681px] lg:h-[387px] absolute top-[24px] lg:-top-5"
        />
        <div className="bg-white rounded-3xl  w-5/6 absolute top-28 pb-6 lg:w-[585px] lg:h-[625px] lg:top-[195px]">
          <div className="flex-all-center">
            <h1 className=" w-full flex justify-center p-6 pt-8 font-Caveat bg-primary-blue-gradient text-transparent bg-clip-text text-4xl lg:text-5xl">
              Welcome vroomer !
            </h1>
            <div className="flex-all-center w-5/6 m-3 mb-8">
              <p className="text-xs lg:text-base ">
                <strong className="text-sm lg:text-xl">
                  A trip, a move or just a wish to drive ?
                </strong>
                <br /> Find and rent your car among all the renting Vroomers’s
                cars.
              </p>
              <p className="text-4xl mb-2 font-Caveat bg-primary-blue-gradient text-transparent bg-clip-text ">
                /
              </p>
              <p className="text-xs lg:text-base">
                <strong className="text-sm lg:text-xl">
                  Your car is bored of not cruising ?
                </strong>
                <br />
                Offer to rent it to all the Driving Vroomers.
              </p>
            </div>
            <div className="bg-primary-blue-gradient flex flex-row justify-around items-center gap-4 rounded-full px-6 py-3 mb-5 w-2/3 h-20">
              <Image
                src="/logo/Icon-car.svg"
                alt="logo de voiture"
                width={0}
                height={0}
                className="w-16 h-11"
              />
              <p className="font-Caveat text-white">
                I need <br />a car !
              </p>
            </div>
            <div className="p-1 bg-primary-blue-gradient flex flex-row items-center gap-4 rounded-full w-2/3 h-20">
              <div className="mix-blend-screen bg-white rounded-full flex justify-around items-center p-1 w-full h-full">
                <Image
                  src="/logo/Icon-money.svg"
                  alt="logo de voiture"
                  width={0}
                  height={0}
                  className="w-16 h-11 "
                />
                <p className="font-Caveat">
                  I propose <br />
                  my car !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
