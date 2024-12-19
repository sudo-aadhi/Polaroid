"use client";
import { motion } from "framer-motion";
import Polaroid, { RightPolaroid } from "./components/Polaroid";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-white gap-[50px]">
      <div className="flex gap-[25px]">
        <Polaroid />
        <RightPolaroid />
      </div>
      <div className="flex w-full justify-center items-center">
        <motion.h2
          className="inline-block text-black text-[30px] font-medium font-alex"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          You are my best friend 👯‍♀️, my lover 💖, my soul 🌙, and my future wife
          💍, I love you soo much ❤️♾️, More than you can imagine ☁️
        </motion.h2>
      </div>
    </div>
  );
}
