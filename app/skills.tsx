"use client";

import Image from "next/image";
import {
  UserGroupIcon,
  RocketLaunchIcon,
  HeartIcon,
  BoltIcon,
  PuzzlePieceIcon,
  CubeTransparentIcon
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: BoltIcon,
    title: "Action",
    children:
      "I develop a strong bias for action across the company through leadership by example and active support of others",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Discovery",
    children:
      "I specialize in identifying key opportunities that have outsized impact on the company goals and vision",
  },
  {
    icon: CubeTransparentIcon,
    title: "Vision",
    children:
      "I can move seamlessly from the 'cloud to the ground', from creating high-level strategy down to the tactical specifics",
  },
  {
    icon: UserGroupIcon,
    title: "Collaboration",
    children:
      "I facilitate cross-functional collaboration and action through active stakeholder management and relationship-building",
  },  
  {
    icon: HeartIcon,
    title: "Engagement",
    children:
      "I build alignment and engagement with the company vision in my teams through storytelling and data-backed insights",
  },
  {
    icon: RocketLaunchIcon,
    title: "Inclusivity",
    children:
      "I create a culture of shared ownership by inviting others to participate and making product development accessible",
  }
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Image
          width={897}
          height={610}
          priority={true}
          alt="Product leadership"
          src="/image/product-leadership@2x.png"
          className="h-[auto] w-2/3 rounded-xl object-cover mx-auto"
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
