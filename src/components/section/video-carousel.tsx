import { movies, randomMoviesSet1, randomMoviesSet2 } from "../../lib/data";

export default function VideoCarousel() {
  return (
    <div className="bg-background">
      <div>
        <div>
          <img src={movies[0].poster} alt={movies[0].name} />
        </div>
        <div>
          <img src={movies[1].poster} alt={movies[0].name} />
        </div>
        <div>
          <img src={movies[2].poster} alt={movies[0].name} />
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
    <div>
      {movie.map((movie, i) => (
        <img src={movie.poster} alt={movie.name} key={i} />
      ))}
    </div>
  );
};
