"use client";

const HeroFooter = () => {
  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full mt-10">
        {/* Card */}
        <a
          className="group col-span-1 relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-slate-900 before:z-[1]">
            <img
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
              alt="Image Description"
            />
          </div>
          <div className="absolute top-0 inset-x-0 z-10">
            <div className="p-4 flex flex-col h-full w-full sm:p-6">
              {/* Avatar */}
              <div className="flex items-center justify-center text-center p-2">
                <h4 className="font-semibold text-3xl text-center text-lime-400">
                  We Save Your Time
                </h4>
              </div>
              {/* End Avatar */}
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-gl font-semibold text-purple-200 group-hover:text-white/[.8]">
                Start Now!
              </h3>
            </div>
          </div>
        </a>
        {/* End Card */}
        {/* Card */}
        <div className="group flex flex-col col-span-2 h-full bg-slate-300 border border-gray-200 shadow-sm rounded-3xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex gap-5 p-5">
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              <div className="justify-center p-3 text-sm text-black bg-white rounded-full">
                Linkedin marketing
              </div>
              <div className="mt-8 text-left text-xl text-white font-bold max-md:mt-10">
                Optimized Resume
              </div>
              <div className="mt-3 text-left text-white  text-base">
                The better visibility your pages
                <br />
                have in search for the more likely you are to be found and
                clicked on.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/assets/img/hero-banner.png"
                className="grow w-full aspect-[0.98] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <a
          className="group col-span-1 relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-slate-900 before:z-[1]">
            <img
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
              alt="Image Description"
            />
          </div>
          <div className="absolute top-0 inset-x-0 z-10">
            <div className="p-4 flex flex-col h-full w-full sm:p-6">
              {/* Avatar */}
              <div className="flex items-center text-left  p-2">
                <h4 className="font-semibold text-3xl text-white">
                  Manage Your <br />
                  Job
                  <br /> Portfolio
                </h4>
              </div>
              {/* End Avatar */}
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-gl font-semibold text-lime-200 group-hover:text-white/[.8]">
                Sign Up
              </h3>
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Grid */}
    </>
  );
};

export default HeroFooter;
