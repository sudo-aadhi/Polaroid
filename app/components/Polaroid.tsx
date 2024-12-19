"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Aadhidevu from "@/public/images/photo_2024-12-14_20-59-22.jpg";
import handinhand from "@/public/images/photo_2024-12-14_20-59-19.jpg";
import AadhisDevu from "../../public/images/IMG_4706.jpg";

const Polaroid = () => {
  return (
    <div className="flex items-center w-[700px] h-[650px]">
      <div className="flex items-center gap-[20px]">
        {/* The first polaroid container  */}
        <BiggerPolaroid />
        <StickyNote
          typography="My Dearest,  
✨ You are my brightest star. 🌌  
Your smile 😊 and laughter 🎶 are my greatest treasures. 💎  
I love you endlessly. ❤️  

Forever yours,  
Aadhi 💌"
        />
        <SecondPolaroid />
      </div>
    </div>
  );
};

const BiggerPolaroid = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-[330px] h-[500px] bg-[#D9D9D9] rotate-[-3.96deg] shadow-md"
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center justify-center w-[283.58px] h-[452.63px] bg-white overflow-hidden">
        <Image
          src={Aadhidevu}
          alt="Aadi Loves Devu"
          width={330}
          height={100}
          draggable="false"
        />
      </div>
    </motion.div>
  );
};

interface StickyNoteWords {
  typography: string;
}

const StickyNote: React.FC<StickyNoteWords> = ({
  typography = `My Dearest,  
✨ You are my brightest star. 🌌  
Your smile 😊 and laughter 🎶 are my greatest treasures. 💎  
I love you endlessly. ❤️  

Forever yours,  
Aadhi 💌
`,
}) => {
  return (
    <motion.div
      className="flex items-center justify-center w-[260px] h-[300px] bg-[#DBFAE6] rounded-lg shadow-md overflow-hidden p-4 relative bottom-48 right-28 z-10"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <div className="flex flex-wrap gap-2 text-center">
        {typography.split(" ").map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block text-black text-[20px] font-medium font-alex"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.6, // Slightly longer duration for a smoother feel
              ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic-bezier easing
              delay: idx * 0.15, // Reduced delay for a more fluid sequence
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SecondPolaroid = () => {
  return (
    <motion.div className="flex items-center justify-center w-[330px] h-[385px] bg-[#D9D9D9] rotate-[10deg] shadow-md relative right-[200px]">
      <div className="flex items-center justify-center w-[283px] h-[344px] bg-white">
        <Image
          src={handinhand}
          alt="Aadi Loves Devu"
          width={283}
          height={100}
          draggable="false"
        />
      </div>
    </motion.div>
  );
};

export const RightPolaroid = () => {
  return (
    <div className="flex items-center justify-center w-[550px] h-full">
      <div className="flex flex-col w-[415px] h-[650px]">
        <YellowSticky
          typography={`My Dearest,  
✨ You are my brightest star. 🌌  
Your smile 😊 and laughter 🎶 are my greatest treasures. 💎  
I love you endlessly. ❤️  

Forever yours,  
Aadhi 💌
`}
        />
        <ThirdPolaroid />
      </div>
    </div>
  );
};

interface YellowStickyWords {
  typography: string;
}

const YellowSticky: React.FC<YellowStickyWords> = ({
  typography = `There is no one like in my heart 💘, Forever you will be there, no one can love you as i do and no one can love me like you do 🥺, Iam forever your and you're forever mine only 💯♾️, You are my breath, you are my everything ❤️`,
}) => {
  return (
    <motion.div
      className="flex items-center justify-center w-[260px] h-[400px] bg-[#FDF9C3] rounded-lg shadow-md overflow-hidden p-4 relative bottom-[50px] left-56 z-10 rotate-[-7deg]"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <div className="flex flex-wrap gap-2 text-center">
        {typography.split(" ").map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block text-black text-[20px] font-medium font-alex"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.6, // Slightly longer duration for a smoother feel
              ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic-bezier easing
              delay: idx * 0.15, // Reduced delay for a more fluid sequence
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const ThirdPolaroid = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-[330px] h-[485px] bg-[#D9D9D9] shadow-md relative bottom-32"
      whileHover={{
        y: 10,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center justify-center w-[283px] h-[310px] bg-white overflow-hidden">
        <Image
          src={AadhisDevu}
          alt="Aadi Loves Devu"
          width={283}
          height={100}
          draggable="false"
        />
      </div>
    </motion.div>
  );
};

export default Polaroid;
