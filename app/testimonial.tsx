"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { BoltIcon, LightBulbIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline";

const TESTIMONIALS = [
  {id: 0, text: "I worked with Michael for over 3 years. He was known in the company to have (almost unnatural!) ability to unlock people with a single, precise question and he has a laser-focus on his product vision. Michael is great at weighing difficult decisions with a lot of ambiguity to fish out very carefully the option with the highest impact", source: 'Head of Engineering', company: 'Global App Testing'},
  {id: 1, text: "I reported to Michael directly in my role of a Senior Product Manager for the last (almost) 3 years. He is one of the best leaders I have worked with. He is genuinely invested in the growth and development of his team, meaning that I enjoyed plenty of feedback, guidance, coaching and challenging from him, which helped me significantly further my skills and habits. He is very smart and sees a broad holistic picture of the entire business, which gives him leverage to solve deep problems in a long-term way. He is also highly skilled as an engineer, product manager and designer, meaning there is always plenty to learn from him.", source: 'Senior product manager', company: 'Global App Testing'},
  {id: 2, text: "Anyone that has the opportunity to work with Michael will see that he is a brilliant leader, a joy to collaborate with and a lovely human being. I reported directly to Michael for 2 years, during which he taught me what it really means to be impact focussed and helped me grow as a designer enormously.", source: 'Product designer', company: 'Global App Testing'},
];

export function Testimonial() {

  return (
    <section className="py-12 px-8 lg:pt-24 lg:pb-0">
      <div className="container max-w-1/2-lg mx-auto">
        <div className="container mx-auto mb-8 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            What Team Members Say
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Here is what people who have worked with me have to say about their experiences
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="pb-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 lg:!flex justify-between ">
            <div className="rounded-lg w-full lg:flex justify-between gap-x-8">
            {TESTIMONIALS.map((t) => {
              return <div key={t.id} className="flex-row sm:mb-[3rem]">
                {t.id === 0 ? <CodeBracketSquareIcon className="h-8 hidden md:block" /> : null}
                {t.id === 1 ? <LightBulbIcon className="h-8 hidden md:block" /> : null}
                {t.id === 2 ? <BoltIcon className="h-8 hidden md:block" /> : null}
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="my-4 lg:max-w-xs"
                >
                  {TESTIMONIALS[t.id].text}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-0.5">
                  {TESTIMONIALS[t.id].source}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal mb-5 !text-gray-500"
                >
                  {TESTIMONIALS[t.id].company}
                </Typography>
                </div>
            })}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
