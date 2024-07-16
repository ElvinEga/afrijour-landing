"use client";

const HowItWorks = () => {
  return (
    <>
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="flex flex-col w-full bg-white">
          <div className="justify-center self-start px-8 py-3 text-2xl text-black whitespace-nowrap border-2 border-solid border-slate-900 rounded-full">
            How It works
          </div>
          <div className="mt-10 text-6xl font-semibold  leading-[72px]  text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Revolutionize Your Customer Support with <br />{" "}
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-6 rounded-full  bg-lime-300 text-gray-800 dark:bg-white/10 dark:text-white">
              Kazifi :
            </span>
            The Ultimate Solution for Fast and Efficient Support!
          </div>
          <div className="lg:pt-5 text-5xl font-semibold  text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl"></div>
          <div className="mt-10 mr-2.5 mb-20 max-md:my-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow px-8 py-12 w-full bg-zinc-900 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-white max-md:mt-10">
                        <div className="text-4xl">Integrate</div>
                        <div className="mt-7 text-base">
                          Intergate all your knowledge sources, including
                          support tickets, documents, guides, aricles, community
                          forums and chats.
                        </div>
                        <div className="flex gap-5 justify-between pr-1.5 mt-24 text-xl font-semibold max-md:mt-10">
                          <div className="flex-auto my-auto">Get started</div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b944d30e137c76e8d226104e9a64eb48a8aa5d8b1e92356c6da5fc9b61a18352?"
                            className="aspect-square w-[72px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[40%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="/assets/img/social-icons.svg"
                        className="grow mt-3.5 w-40 max-w-full aspect-[0.53] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-12 py-12 w-full border-2 border-solid border-zinc-900 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                      <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-zinc-900">
                          <div className="text-4xl">Recommendations</div>
                          <div className="mt-10 text-base">
                            Intergate all your knowledge sources, including
                            support tickets, documents, guides, aricles,
                            community forums and chats.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ddf3017202d6d3a770ab390bdd0caf9287526f1e6ec8bf6f8cdb96b052a7ff?"
                          className="grow mt-14 w-40 max-w-full aspect-[1.03] max-md:mt-10"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-7 text-xl font-semibold text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto my-auto">Get started</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/436ece518980073d97d01f40d48763f07d9832e5a26ff4428e23e22b6592e078?"
                      className="aspect-square w-[72px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
