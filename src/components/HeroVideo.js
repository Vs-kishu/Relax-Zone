import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { useGetHeroVideo } from "../utils/helperHook";
import { useSelector } from "react-redux";

const HeroVideo = () => {
  const { heroVideo, heroInfo } = useSelector((store) => store.movies);

  useGetHeroVideo();

  return heroVideo ? (
    <section className="relative borde-4 border-red-600 ">
      <iframe
        className="relative aspect-video w-full mt-5 -z-20 md:-mt-22"
        src={`https://www.youtube.com/embed/${heroVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&disablekb=1&rel=0`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      ></iframe>
      <div className="absolute bottom-10 md:bottom-[30%] w-3/4 md:w-1/2">
        <div className="text-white p-3 md:pl-10">
          <h1 className="text-lg md:text-6xl font-bold">
            {heroInfo?.original_title}
          </h1>
          <p className="max-md:hidden w-full mt-5 mb-10">
            {heroInfo?.overview}
          </p>
          <div className="flex items-center gap-5 md:gap-14 max-sm:mt-5 ">
            <button className="flex  items-center justify-center gap-2 px-3 md:px-5 py-1 md:py-3 text-sm  md:text-2xl text-black bg-white rounded-lg md:w-[150px] hover:bg-slate-200 text-center">
              <FaPlay /> Play
            </button>
            <button className="flex  items-center justify-center px-3 md:px-5 py-1 md:py-3 gap-2  text-sm md:text-2xl text-black bg-gray-500 rounded-lg  hover:bg-white text-center">
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
