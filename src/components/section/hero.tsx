import { Button } from "../button";
import { Container } from "../container";

export default function Hero() {
  return (
    <div className="relative bg-background h-[300vh] text-white">
      <div className="absolute -top-[--header-height] left-0 w-full h-[200vh] bg-white">
        <img
          className="sticky top-0 h-screen object-contain"
          src="/napoleon.webp"
        />
      </div>

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
