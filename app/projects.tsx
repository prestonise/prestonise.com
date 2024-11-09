"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/digital-transformation.png",
    title: "Facilitating digital transformation",
    desc: "An executive leader overseeing a multi-department project to reduce operational overhead and improve profitability",
  },
  {
    img: "/image/process-map.png",
    title: "Implementing ProductOps",
    desc: "I developed and implemented a scalable product development process that improved outcomes and company-wide engagement",
  },
  {
    img: "/image/crowd-of-testers.jpg",
    title: "Developing a crowd-first offering",
    desc: "A senior product designer leading the design and roll out of a global QA testing product connecting customers and testers directly through technology",
  },
  {
    img: "/image/introducing-ai.png",
    title: "Introducing AI in a company",
    desc: "I led the development and roll out of scalable AI-based solutions that improved result quality and freed up operational capacity",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8 lg:pt-[2.75rem]">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Case studies
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Read about some of the projects I have lead in my career
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;