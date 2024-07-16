"use client";

const Contactus = () => {
  return (
    <>
      <div className="w-full mx-auto  bg-zinc-900">
        <div className="max-w-[96rem] mx-auto  py-10 lg:py-20 ">
          <div className="flex flex-col px-20  w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="self-start text-6xl font-medium leading-[72px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              Contact us if you’re{" "}
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-6 rounded-full  bg-lime-200 text-gray-800 dark:bg-white/10 dark:text-white">
                interested{" "}
              </span>
              in getting involved
            </div>
            <div className="mt-9 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                    <div className="text-xl text-white max-md:max-w-full">
                      With Kazif App your support agents have the information
                      they need to provide fast effective support to your
                      customers.
                    </div>
                    <div className="flex gap-3 self-start px-12 py-6 mt-11 text-lg text-center whitespace-nowrap bg-lime-200 border border-black border-solid rounded-[100px] text-neutral-900 max-md:px-5 max-md:mt-10">
                      <div className="grow my-auto">Join The Wishlist</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60802bd358de4a283f971c3c0dd59ef5717dc3cfb7572889b610037d51e5c19f?"
                        className="w-6 aspect-square"
                      />
                    </div>
                    <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow  max-md:mt-10">
                            <div className="flex gap-4 justify-between whitespace-nowrap">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b06febbe49d0124e0684090b4b827408fd61d5b53c8583f90caf62a7af410f6?"
                                className="aspect-square w-[72px]"
                              />
                              <div className="flex flex-col flex-1 ml-5 my-auto">
                                <div className="text-xs text-zinc-300 text-opacity-70">
                                  MAIL
                                </div>
                                <div className="mt-3.5 text-base font-medium text-white">
                                  infor@mail.com
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between mt-10">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c8566474ee6d0a812d6ce17f085128fb145a9b587ad7d6003bd1886ba0c7d71?"
                                className="aspect-square w-[72px]"
                              />
                              <div className="flex flex-col flex-1 ml-5 my-auto">
                                <div className="text-xs text-zinc-300 text-opacity-70">
                                  Location
                                </div>
                                <div className="mt-5 text-base font-medium text-white">
                                  Nairobi, Kenya
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex gap-4 max-md:mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31dc0aecd90f423d92cb632db08177daca88ed0da9295056318b57d9756ede70?"
                              className="aspect-square w-[72px]"
                            />
                            <div className="flex flex-col flex-1 ml-5 my-auto">
                              <div className="text-xs text-zinc-300 text-opacity-70">
                                PHONE
                              </div>
                              <div className="mt-3 text-base font-medium text-white">
                                (254) 54434553
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="/assets/img/contact.svg"
                    className="self-stretch my-auto w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
