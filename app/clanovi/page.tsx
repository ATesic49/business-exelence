import Btn2 from "@/components/Btn2";
import Button from "@/components/Button";
import Navb2 from "@/components/Navb2";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Navb2 />
      <section className="relative grid w-full items-center justify-between px-8 py-24 md:grid-cols-2 md:flex-row md:gap-8 md:px-16 md:py-32">
        <div className="flex w-full flex-col gap-4 text-center">
          <h2 className="z-20 text-xl font-semibold text-gray-700 md:text-4xl">
            Become a Partner
          </h2>
          <p className="z-20 text-gray-500">
            Become a Learning Excellence club partner
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-2">
            <div className="absolute -top-6 left-0 z-20 h-[1px] w-full bg-gray-300"></div>
            <p className="z-20 text-xs text-gray-500">
              Learning Excellence Club Partner Kit
            </p>
            <span className="z-20 -mb-[5%] text-xl font-bold text-gray-500">
              €300
            </span>

            <div className="relative z-10 -mb-[calc(3/5_*_100%)] flex w-full -translate-y-[calc(3/5_*_100%)] flex-col items-center justify-center">
              <div className="absolute left-0 top-0 z-10 h-3/5 w-full bg-gray-50"></div>
              <Btn2 />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <h2 className="text-center text-xl font-semibold text-gray-700 md:text-4xl">
            Alredy a Partner?
          </h2>
          <p className="-mt-2 text-gray-500">Log in here</p>
          <div className="relative flex w-full flex-col items-center justify-center">
            {/* <div className="absolut left-0 top-20 z-20 h-[1px] w-full bg-gray-300"></div> */}
            <Link
              href="http://74.208.112.107/login"
              className="mt-2 rounded-md bg-[#0074D4] px-20 py-[10px] font-medium text-white"
            >
              Log In
            </Link>
          </div>
        </div>
        {/* <Image
        className="w-[calc(50%_-_32px)] rounded-lg"
        alt=""
        src={pearlIslands}
      ></Image> */}
      </section>
    </>
  );
};

export default page;
