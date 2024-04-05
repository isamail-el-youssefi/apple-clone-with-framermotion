import { Button } from "./button";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex min-h-11 items-center">
          <a href="/" className="-ml-6 flex h-11 items-center px-6 text-xl">
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>

      <div className="bg-backgroundContrast sticky z-20 top-0  text-white">
        <Container className="flex min-h-11 items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
