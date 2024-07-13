import Button from "./Button";
import Image from "next/image";
import pearlIslands from "@/public/imgs/pearlIslands.jpg";

const Placanje = () => {
  return (
    <section
      id="teamBuilding"
      className="flex w-full flex-col items-start justify-between md:flex-row md:gap-8"
    >
      <div className="flex flex-col gap-4 text-center md:p-4">
        <h2 className="z-20 text-xl font-semibold text-gray-700 md:text-4xl">
          Pearl Islands
        </h2>
        <p className="z-20 text-gray-500">
          Fun and Learning through an Incredible Adventure
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-2">
          <div className="absolute -top-6 left-0 z-20 h-[1px] w-full bg-gray-300"></div>
          <p className="z-20 text-xs text-gray-500">
            Pearl Islands Business Stimulation
          </p>
          <span className="z-20 -mb-[5%] text-xl font-bold text-gray-500">
            €250
          </span>

          <div className="relative z-10 -mb-[calc(3/5_*_100%)] flex w-full -translate-y-[calc(3/5_*_100%)] flex-col items-center justify-center">
            <div className="absolute left-0 top-0 z-10 h-3/5 w-full bg-gray-50"></div>
            <Button />
          </div>
        </div>
      </div>
      <video
        className="w-full rounded-lg md:w-[calc(50%_-_32px)]"
        src="/pivideo.mp4"
        controls
      ></video>
      {/* <Image
        className="w-[calc(50%_-_32px)] rounded-lg"
        alt=""
        src={pearlIslands}
      ></Image> */}
    </section>
  );
};

export default Placanje;
