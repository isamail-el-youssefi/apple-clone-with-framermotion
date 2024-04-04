import { Button } from "../button";
import { Container } from "../container";

export default function Hero() {
  return (
    <div className="relative bg-background text-white">
      <div className="absolute top-0 left-0 w-full">
        <img src="/napoleon.webp" />
      </div>

      <Container className="relative z-10 min-h-[100svh]">
        <h1 className="text-5xl font-bold">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>
        <Button size="large">Large</Button>
        <p className="font-semibold">Watch on the TV app</p>
      </Container>
    </div>
  );
}
