import { movies, randomMoviesSet1, randomMoviesSet2 } from "../../lib/data";

export default function VideoCarousel() {
  return (
    <div className="bg-background">
      <div className="flex gap-5 mb-5 overflow-clip">
        <div className="w-[60vw] shrink-0 ">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src={movies[0].poster}
            alt={movies[0].name}
          />
        </div>
        <div className="w-[60vw] shrink-0 ">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src={movies[1].poster}
            alt={movies[0].name}
          />
        </div>
        <div className="w-[60vw] shrink-0 ">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src={movies[2].poster}
            alt={movies[0].name}
          />
        </div>
      </div>

      <SmallVideoCarousel movie={randomMoviesSet1} />
      <SmallVideoCarousel movie={randomMoviesSet2} />
    </div>
  );
}

type Movie = {
  poster: string;
  name: string;
};

type SmallVideoCarouselProps = {
  movie: Movie[];
};

const SmallVideoCarousel = ({ movie }: SmallVideoCarouselProps) => {
  return (
    //overflowclip: removes the scroll in x axis
    <div className="flex gap-3 overflow-clip">
      {movie.map((movie, i) => (
        <div className="w-[24vw] shrink-0" key={i}>
          <img
            className="object-cover w-full h-full rounded-xl"
            src={movie.poster}
            alt={movie.name}
          />
        </div>
      ))}
    </div>
  );
};
