import Image from "next/image";
import image from "@/public/vercel.svg";
import Button from "@/components/Button";
import Logo from "@/public/imgs/LogoPravi.png";
import hero from "@/public/imgs/hero/hero1.jpg";
import Partners from "@/components/Partners";
import Placanje from "@/components/Placanje";

import Offer from "@/components/Offer";
import Ucenje from "@/components/Ucenje";
import Kontakt from "@/components/Kontakt";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex w-full max-w-screen-2xl flex-col gap-16 px-8 md:gap-32 md:px-16">
        <section
          className="relative flex w-full flex-col-reverse gap-8 border-b-2 border-gray-200 py-24 md:flex-row md:py-32"
          id="home"
        >
          <div className="trim clipHero absolute -left-16 -top-0 -z-10 h-full w-[calc(100%+16*8px)] bg-blue-200"></div>
          <div className="absolute left-1/2 top-full flex -translate-x-1/2 -translate-y-[calc(50%_-_12px)] flex-col items-center justify-center gap-2 bg-gray-50 px-4 text-xs text-gray-400 md:text-sm">
            <p>Scroll Down</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="aspect-square w-6 fill-gray-400 md:w-8"
              x="0"
              y="0"
              viewBox="0 0 128 128"
            >
              <g>
                <path
                  d="M64 104a3.988 3.988 0 0 1-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0L64 94.344l37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40A3.988 3.988 0 0 1 64 104zm2.828-33.172 40-40c1.563-1.563 1.563-4.094 0-5.656s-4.094-1.563-5.656 0L64 62.344 26.828 25.172c-1.563-1.563-4.094-1.563-5.656 0s-1.563 4.094 0 5.656l40 40C61.953 71.609 62.977 72 64 72s2.047-.391 2.828-1.172z"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div className="items-ceter flex w-full flex-col justify-center gap-4">
            <h1 className="max-w-[8em] text-2xl font-bold text-gray-700 md:text-5xl">
              Business Excellence Group
            </h1>
            <p className="max-w-[25em] text-sm text-gray-500 md:text-base">
              Business Excellence Group svim klijentima daje 100% garanciju
              zadovoljstva.
            </p>
            <button className="w-fit rounded-lg bg-gradient-to-t from-blue-400 to-blue-500 px-4 py-2 text-gray-50 shadow-sm shadow-blue-300 md:text-lg">
              Enroll Now!
            </button>
          </div>
          <div className="flex w-full items-center justify-center">
            <Image
              className="hero -translate-y-[7.5%]"
              alt=""
              src={hero}
            ></Image>
          </div>
        </section>
        <Placanje />
        <Offer />
        <Ucenje />
        <Kontakt />
        <Partners />
      </main>
    </>
  );
}
