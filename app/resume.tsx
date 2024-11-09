"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  BanknotesIcon,
  TrophyIcon,
  AcademicCapIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: TrophyIcon,
    children: "Voted 'Employee of the year'",
  },
  {
    icon: BanknotesIcon,
    children: "Sucessfully exited a startup"
  },
  {
    icon: AcademicCapIcon,
    children: "Product School Certifications",
  }
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            I am a product leader with 10+ years of experience in designing valuable user experiences,
            10+ years developing robust applications, 5+ years managing complex B2B products, and
            3+ years managing high-performance teams as a Head of product & design
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
