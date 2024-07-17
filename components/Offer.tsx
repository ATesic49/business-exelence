"use client";
import React, { useRef } from "react";
import {
  useInView,
  motion,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
const Offer = () => {
  const ref = useRef<HTMLUListElement>(null);
  const div = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: `-75% 0px 0px 0px` });
  div.current?.clientHeight;
  return (
    <section id="offer" className="flex flex-col items-center gap-16">
      <div className="flex w-full flex-col items-center gap-16">
        <h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
          What we offer?
        </h2>
        <ul
          ref={ref}
          className="grid w-full grid-cols-1 items-center justify-center gap-8 text-center text-gray-500 md:grid-cols-2"
        >
          <li className="mx-auto flex flex-col items-center justify-center gap-8">
            {" "}
            <motion.div
              ref={div}
              layout={"size"}
              initial={{ opacity: 0, y: "-100%", scale: 0.5 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: "-100%", scale: 0.5 }
              }
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src={"/imgs/hero/hero5.jpg"}
                alt=""
                className="mx-auto w-[calc(100%_-_64px)] rounded-lg"
              ></img>
            </motion.div>
            {div.current?.clientHeight && (
              <AnimatePresence>
                <motion.p
                  transition={{ duration: 1, delay: 0.5 }}
                  className="max-w-[25em]"
                  initial={{ y: -div.current?.clientHeight }}
                  animate={
                    isInView ? { y: 0 } : { y: -div.current?.clientHeight }
                  }
                >
                  Complete preparation and organization of Team Building events
                  and other business events
                </motion.p>
              </AnimatePresence>
            )}
          </li>
          <li className="mx-auto flex flex-col items-center justify-center gap-8">
            {" "}
            <motion.div
              layout={"size"}
              initial={{ opacity: 0, y: "-100%", scale: 0.5 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: "-100%", scale: 0.5 }
              }
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src={"/imgs/hero/hero4.jpg"}
                alt=""
                className="mx-auto w-[calc(100%_-_64px)] rounded-lg"
              ></img>
            </motion.div>
            {div.current?.clientHeight && (
              <AnimatePresence>
                <motion.p
                  transition={{ duration: 1, delay: 0.5 }}
                  className="max-w-[25em]"
                  initial={{ y: -div.current?.clientHeight }}
                  animate={
                    isInView ? { y: 0 } : { y: -div.current?.clientHeight }
                  }
                >
                  Organization of part of the program, within the event,
                  depending on the needs of the client.
                </motion.p>
              </AnimatePresence>
            )}
          </li>
        </ul>
        <div className="-my-8 -mt-0 grid grid-cols-1 gap-4 border-t border-t-gray-50 py-8 md:grid-cols-2 md:gap-8">
          <p className="relative mx-auto px-[5%] text-lg text-gray-500 before:absolute before:-translate-x-[200%] before:scale-150 before:text-gray-400 before:content-['*'] md:max-w-[28em] md:px-0">
            It is possible to organize several different programs of activities.
            The program is specially adapted to the wishes and needs, all in
            accordance with the basic goals of the event itself. Activities can
            be organized outdoors or indoors.
          </p>
          <img
            alt=""
            src={"/imgs/hero/hero3.jpg"}
            className="clipHero3 row-start-1 mx-auto rounded-lg md:row-start-auto md:w-4/5"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Offer;
