"use client";
import React from "react";
import partner1 from "@/public/imgs/partneri/ackopaonik.png";
import partner2 from "@/public/imgs/partneri/ef.jpg";
import partner3 from "@/public/imgs/partneri/inyourhands.jpg";
import partner4 from "@/public/imgs/partneri/most.jpg";
import partner5 from "@/public/imgs/partneri/stata.jpg";
import Link from "next/link";
const Partners = () => {
  const partners = [
    "/imgs/partneri/ackopaonik.png",
    "/imgs/partneri/ef.jpg",
    "/imgs/partneri/inyourhands.jpg",
    "/imgs/partneri/most.jpg",
    "/imgs/partneri/stata.jpg",
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="relative flex w-full items-center justify-center gap-4 border-t-2 py-4">
        <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 text-gray-500">
          {" "}
          Site constructed by:
        </p>
        <Link
          className="mx-auto text-center text-sm text-gray-600 underline"
          href={"https://businessexcellence.digital/"}
        >
          Businessexcellence.digital
        </Link>
        {/* {partners.map((partner, i) => {
          return <img src={partner} key={i} alt="" className="" />;
        })} */}
      </div>
    </section>
  );
};

export default Partners;
