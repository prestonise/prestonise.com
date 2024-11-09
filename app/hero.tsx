"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hello, I&apos;m Michael
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I am a product leader who has experience working as a product manager, a product designer, and as a full-stack engineer. I am based in London. I&apos;m currently working at <strong className="text-black">Global App Testing</strong> and most recently, I worked at <strong className="text-black">Trouva</strong>.
          </Typography>
        </div>
        <Image
          width={500}
          height={500}
          priority={true}
          alt="Michael Prestonise"
          src="/image/michael-p.jpg"
          className="h-[24rem] w-[24rem] rounded-xl object-cover mx-auto"
        />
      </div>
    </header>
  );
}

export default Hero;
