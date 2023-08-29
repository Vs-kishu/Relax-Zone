import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { useGetHeroVideo } from "../utils/helperHook";
import { useSelector } from "react-redux";

const HeroVideo = () => {
  const { heroVideo, heroInfo } = useSelector((store) => store.movies);

  useGetHeroVideo();

  return heroVideo ? (
    <section className="relative borde-4 border-red-600 ">
      <iframe
        className="aspect-video w-full -mt-14"
        src={`https://www.youtube.com/embed/${heroVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&disablekb=1&rel=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>
      <div className="absolute w-full h-screen top-0 mt-14 bg-gradient-to-t from-black">
        <div className="text-white absolute bottom-[30%] left-10">
          <h1 className="text-6xl font-bold">{heroInfo?.original_title}</h1>
          <p className="w-2/5 mt-5 mb-10">{heroInfo?.overview}</p>
          <div className="flex items-center gap-14 ">
            <button className="flex  items-center justify-center gap-2 px-5 py-3   text-2xl text-black bg-white rounded-lg w-[150px] hover:bg-slate-200 text-center">
              <FaPlay /> Play
            </button>
            <button className="flex  items-center justify-center gap-2 px-5 py-3 text-2xl text-black bg-gray-500 rounded-lg  hover:bg-white text-center">
              <FaInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <h1>refresh to display</h1>
  );
};

export default HeroVideo;
