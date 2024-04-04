import { Button } from "../button";
import { Container } from "../container";

export default function Hero() {
  return (
    <div className="bg-background text-white h-[300vh]">
      <Container>
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
