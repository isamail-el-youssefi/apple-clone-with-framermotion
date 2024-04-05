import { useRef } from "react";
import { Button } from "../button";
import { Container } from "../container";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Give us how far the element we targeted with useRef has BEEN IN VIEW
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start start", "end end"],
  });

  // Amount of distance scroll we're interested in [FIRST ARRAY] in the second array
  // its like adding keyframe for animation
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative bg-background h-[300vh] text-white">
      <motion.div
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
        style={{ opacity: opacity }}
        ref={imageContainerRef}
      >
        <img
          className="sticky top-0 h-screen object-cover"
          src="/napoleon.webp"
        />
      </motion.div>

      <Container className="relative z-10 pb-7 min-h-[--hero-height] flex flex-col justify-end items-start">
        <h1 className="text-5xl font-bold mb-10">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>
        <Button className="mb-16" size="large">
          Large
        </Button>
        <p className="font-semibold">Watch on the TV app</p>
      </Container>
    </div>
  );
}
