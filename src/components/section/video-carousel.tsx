import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../lib/data";

export default function VideoCarousel() {
  return (
    <div className="bg-background">
      <div className="overflow-clip">
        <div className="flex gap-5 mb-5 -translate-x-1/2 ">
          <div className="w-[60vw] shrink-0 aspect-video">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={movies[0].poster}
              alt={movies[0].name}
            />
          </div>
          <div className="w-[60vw] shrink-0 aspect-video">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={movies[1].poster}
              alt={movies[1].name}
            />
          </div>
          <div className="w-[60vw] shrink-0 aspect-video">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={movies[2].poster}
              alt={movies[2].name}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="[--duration:120s]">
          <SmallVideoCarousel movie={randomMoviesSet1} />
        </div>
        <div className="[--duration:80s]">
          <SmallVideoCarousel movie={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
}

type SmallVideoCarouselProps = {
  movie: Movie[];
};

const SmallVideoCarousel = ({ movie }: SmallVideoCarouselProps) => {
  return (
    //overflowclip: removes the scroll in x axis
    <div className="overflow-clip">
      <div className="animate-carousel-move flex gap-3 ">
        {movie.map((movie, i) => (
          <div className="w-[24vw] shrink-0 aspect-video" key={i}>
            <img
              className="object-cover w-full h-full rounded-xl"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
