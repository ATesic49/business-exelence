import Link from "next/link";
import React from "react";

const Kontakt = ({ srb }: { srb: null | boolean }) => {
  return (
    <section className="flex flex-col items-center gap-4" id="kontakt">
      <h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
        {srb ? "Kontakt" : "Contact"}
      </h2>
      <p className="max-w-[18em] text-center text-gray-500 md:max-w-max">
        {srb
          ? "Možete nas kontaktirati putem email-a:"
          : "Contact us via email:"}
      </p>
      <Link
        className="-mt-2 text-sm text-blue-500"
        href={"mailto:support@learningecxellence.club"}
      >
        support@learningecxellence.club
      </Link>
    </section>
  );
};

export default Kontakt;
