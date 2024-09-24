import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import { baseImgUrl } from "../constants";

const Hero = () => {
  const { isLoading, error, movies } = useSelector((store) => store.movies);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <div className="grid grid-col-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      {!movies || isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{movie?.title}</h1>
            <p className="text-start">{movie?.overview}</p>
            <p>
              <span>IDBM:</span>
              <span className="text-yellow-400 ms-2 font-semibold">{movie?.vote_average.toFixed(1)}</span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-red-600 hover:bg-red-700 rounded">Filmi izle</button>
              <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded">Listeye Ekle</button>
            </div>
          </div>
          <div>
            <img
              className="hero-img my-4 object-contain rounded max-h-[300px]"
              src={baseImgUrl + movie?.backdrop_path}
              alt={movie?.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
