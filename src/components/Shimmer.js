export const ShimmerCards = () => {
  return (
    <div className="flex justify-between gap-6 px-5 my-5">
      <div className=" bg-slate-600 h-96 w-64 animate-pulse rounded-lg my-2 "></div>
      <div className=" bg-slate-600 h-96 w-64 animate-pulse rounded-lg my-2 "></div>

      <div className=" bg-slate-600 h-96 w-64 animate-pulse rounded-lg my-2 "></div>
      <div className=" bg-slate-600 h-96 w-64 animate-pulse rounded-lg my-2 "></div>
      <div className=" bg-slate-600 h-96 w-64 animate-pulse rounded-lg my-2 "></div>
      <div className=" bg-slate-600 h-96 w-64 animate-pulse rounded-lg my-2 "></div>
    </div>
  );
};

export const Shimmer = () => {
  return (
    <div className="w-full h-full bg-black relative flex flex-col items-center">
      <div className=" bg-slate-600 h-20 w-[98%]  animate-pulse rounded-lg my-2 "></div>
      <div className=" bg-slate-600 h-[70vh] w-[98%]  animate-pulse rounded-lg my-2 "></div>
      <ShimmerCards />
    </div>
  );
};
