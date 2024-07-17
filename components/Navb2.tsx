"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "@/public/imgs/LogoPravi.png";
import { Link as Lidl } from "react-scroll/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Context } from "./LangWrapper";
import { useRouter } from "next/navigation";
const Navb2 = ({ srb }: { srb: boolean | null }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setHeight(ref.current?.clientHeight);
  }, [ref]);
  const params = useSearchParams().get("lang");
  const setParams = useContext(Context)[1];
  const [lang, setLang] = useState(srb ? "rs" : "en");
  const router = useRouter();
  const pathname = usePathname();
  console.log(height);
  return (
    <div
      onLoad={() => console.log(ref.current?.clientHeight)}
      ref={ref}
      className={`fixed left-0 top-0 z-30 flex w-full items-center justify-between gap-8 border-b px-4 py-4 backdrop-blur-lg md:px-16`}
    >
      <div
        className="absolute right-4 top-1/2 flex aspect-square -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border border-gray-400 px-2 uppercase text-gray-600"
        onClick={() => {
          if (lang === "rs") {
            setLang("en");
          } else {
            setLang("rs");
          }
          if (setParams !== null && typeof setParams !== "string") {
            setParams(lang);
            router.push(pathname + "?lang=" + (lang === "rs" ? "en" : "rs"));
          }
        }}
      >
        {lang}
      </div>
      <Link href={`/?lang=${params}`}>
        <img
          className="aspect-square w-8 md:w-12"
          src={"/imgs/LogoPravi.png"}
          alt="LearningExcellence"
        ></img>
      </Link>
      <nav className="hidden items-center justify-center gap-4 text-gray-600 md:flex md:gap-8">
        <Link className="cursor-pointer" href={`/?lang=${params}`}>
          Our Offer{" "}
        </Link>
        {/* <Link className="cursor-pointer" href={"/#offer"}>
          Our offer
        </Link> */}
        <Link className="cursor-pointer" href={`/?lang=${params}`}>
          Experiential Learning
        </Link>
        <Link className="cursor-pointer" href={`/?lang=${params}`}>
          Kontakt
        </Link>
      </nav>
      <Link
        href={`/clanovi?lang=${params}`}
        className="text-md hidden cursor-pointer rounded-lg bg-gradient-to-t from-blue-400 to-blue-500 px-4 py-2 text-gray-50 shadow-sm shadow-blue-300 md:block"
      >
        Članovi
      </Link>
      <div className="mr-12 md:hidden" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={
          open ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: -20, x: 20 }
        }
        className="absolute right-0 top-full flex flex-col gap-4 rounded-lg bg-gray-100 bg-opacity-85 p-4 pr-8 text-gray-600 md:hidden"
      >
        <Link className="cursor-pointer" href={`/?lang=${params}`}>
          Our Offer{" "}
        </Link>
        {/* <Link className="cursor-pointer" href={"/#offer"}>
          Our offer
        </Link> */}
        <Link className="cursor-pointer" href={`/?lang=${params}`}>
          Learning Through Experience
        </Link>
        <Link className="cursor-pointer" href={`/?lang=${params}`}>
          Kontakt
        </Link>
        <Link
          href={`/clanovi?lang=${params}`}
          className="text-md cursor-pointer rounded-lg bg-gradient-to-t from-blue-400 to-blue-500 px-4 py-2 text-center text-gray-50 shadow-sm shadow-blue-300 md:block"
        >
          Članovi
        </Link>
      </motion.div>
    </div>
  );
};

export default Navb2;
