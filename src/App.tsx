import { Header } from "./components/header";
import Hero from "./components/section/hero";
import Usps from "./components/section/usps";
import VideoCarousel from "./components/section/video-carousel";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
}

export default App;
