"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "@/public/imgs/LogoPravi.png";
import { Link as Lidl } from "react-scroll/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Context } from "./LangWrapper";
const Navbar = ({ srb }: { srb: boolean | null }) => {
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
  return (
    <div
      ref={ref}
      className={`fixed left-0 top-0 z-30 flex w-full items-center justify-between gap-8 border-b px-4 py-4 backdrop-blur-lg md:px-16`}
    >
      <Lidl smooth={true} to="home">
        <img
          className="aspect-square w-8 md:w-12"
          src={"/imgs/LogoPravi.png"}
          alt="BusinessExcellence"
        ></img>
      </Lidl>
      <nav className="hidden items-center justify-center gap-4 text-gray-600 md:flex md:gap-8">
        <Lidl
          className="cursor-pointer"
          smooth={true}
          offset={height ? -height - 24 : -100}
          to={"teamBuilding"}
        >
          {srb ? "Naša ponuda" : "Our Offer"}
        </Lidl>
        {/* <Lidl
          className="cursor-pointer"
          offset={height ? -height - 24 : -100}
          smooth={true}
          to={"offer"}
        >
          Our offer
        </Lidl> */}
        <Lidl
          className="cursor-pointer"
          offset={height ? -height - 24 : -100}
          smooth={true}
          to={"poslovneObuke"}
        >
          {srb ? "Učenje sa iskustvom" : "Experiential Learning"}
        </Lidl>
        <Lidl
          className="cursor-pointer"
          offset={height ? -height - 24 : -100}
          smooth={true}
          to={"kontakt"}
        >
          {srb ? "Kontakt" : "Contact"}
        </Lidl>
      </nav>
      <Link
        href={`/clanovi?lang=${params}`}
        className="text-md hidden cursor-pointer rounded-lg bg-gradient-to-t from-blue-400 to-blue-500 px-4 py-2 text-gray-50 shadow-sm shadow-blue-300 md:block"
      >
        {srb ? "Članovi" : "Members"}
      </Link>
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
        className="absolute right-0 top-full flex flex-col gap-4 rounded-lg bg-blue-200 bg-opacity-75 p-4 pr-8 text-gray-600 md:hidden"
      >
        <Lidl
          className="cursor-pointer"
          smooth={true}
          offset={height ? -height - 24 : -100}
          to={"teamBuilding"}
        >
          {srb ? "Naša ponuda" : "Our Offer"}
        </Lidl>
        {/* <Lidl
          className="cursor-pointer"
          offset={height ? -height - 24 : -100}
          smooth={true}
          to={"offer"}
        >
          Our offer
        </Lidl> */}
        <Lidl
          className="cursor-pointer"
          offset={height ? -height - 24 : -100}
          smooth={true}
          to={"poslovneObuke"}
        >
          {srb ? "Učenje sa iskustvom" : "Experiential Learning"}
        </Lidl>
        <Lidl
          className="cursor-pointer"
          offset={height ? -height - 24 : -100}
          smooth={true}
          to={"Kontakt"}
        >
          {srb ? "Kontakt" : "Contact"}
        </Lidl>
        <Link
          href={`/clanovi?lang=${params}`}
          className="text-md cursor-pointer rounded-lg bg-gradient-to-t from-blue-400 to-blue-500 px-4 py-2 text-center text-gray-50 shadow-sm shadow-blue-300 md:block"
        >
          {srb ? "Članovi" : "Members"}
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
