import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import JOS from "jos-animation/dist/jos.js";
import Navbar from "../components/landing/navbar";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/hero";
import { BookMarked, Notebook, NotebookPen } from "lucide-react";

onload = () => {
  const options = {
    debugMode: true,
    animation: "flip",
    duration: 0.7,
    rootMargin: "0% 0% 0% 0%",
  };
  JOS.init(options);
  //JOS.version();
};

function LandingPage() {
  useEffect(() => {
    JOS.refresh();
  }, []);

  // function toggleSwitch() {
  //   const month = document.querySelectorAll(".month");
  //   const annual = document.querySelectorAll(".annual");
  //   const toggleElement = document.getElementById(
  //     "toggle"
  //   ) as HTMLInputElement | null;
  //   for (let i = 0; i < month.length; i++) {
  //     if (toggleElement?.checked == true) {
  //       month[i].classList.add("hidden");
  //       annual[i].classList.remove("hidden");
  //     } else {
  //       month[i].classList.remove("hidden");
  //       annual[i].classList.add("hidden");
  //     }
  //   }
  // }

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <Navbar />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section className="section-hero">
          {/* Hero */}
          <div className="relative overflow-hidden">
            {/* Gradients */}
            <div
              aria-hidden="true"
              className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
            >
              {/* <div className="bg-gradient-to-r from-green-300/50 to-green-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" /> */}
              <div className="bg-gradient-to-tl from-green-50 via-green-100 to-green-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
            </div>
            {/* End Gradients */}
            <div className="relative z-10">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="max-w-4xl text-center mx-auto">
                  <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-green-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                    Get Started with AfriJour
                  </p>
                  {/* Title */}
                  <div className="mt-5 ">
                    <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                      Spotlighting African Journals
                    </h1>
                  </div>
                  {/* End Title */}
                  <div className="mt-5 max-w-3xl">
                    <p className="text-lg text-gray-600 dark:text-neutral-400">
                      Welcome to AfriJour, your passport to the myriad
                      narratives and viewpoints emanating from the heart of
                      Africa. Our platform is dedicated to showcasing the
                      vibrant tapestry of African journals through the lens of
                      diverse analytics.
                    </p>
                  </div>
                  {/* Buttons */}
                  <div className="mt-8 gap-3 flex justify-center">
                    <a
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm text-white font-semibold rounded-lg border border-transparent bg-green-600 text-balck hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="https://afrijour-dashboard.vercel.app/"
                    >
                      Go to Dashboard
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                  {/* End Buttons */}
                </div>
              </div>
            </div>
          </div>
          {/* End Hero */}
          {/* Section Background */}
        </section>
        <section className="section-hero">
          <div className="max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8 ">
            <Hero />
          </div>
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content" id="about">
          {/* Team */}
          <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-4xl font-bold md:text-4xl md:leading-tight dark:text-white">
                AfriJour is for every Student! Researcher! Professor
              </h2>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Creative people
              </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card */}
              <div className="group p-8 flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex flex-col  justify-center items-center rounded-t-xl">
                  <Notebook className="size-20 text-green-600 dark:text-green-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl mt-3 font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    Journals
                  </h3>
                  <p className="mt-3  text-gray-500 dark:text-neutral-500">
                    Find out our exclusive directory of more than a thousand
                    African Journals.
                  </p>
                  <div className="pt-5 gap-3 flex justify-center">
                    <a
                      className="btn-outline dark:bg-transparent text-center py-3 w-full"
                      href="#"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="group p-8 flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex flex-col  justify-center items-center rounded-t-xl">
                  <BookMarked className="size-20 text-green-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl mt-3 font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    Partner Repositories
                  </h3>
                  <p className="mt-3  text-gray-500 dark:text-neutral-500">
                    Our Journals are hosted on various repositories. Follow the
                    link to find out more.
                  </p>
                  <div className="pt-5 gap-3 flex justify-center">
                    <a
                      className="btn-outline dark:bg-transparent text-center py-3 w-full"
                      href="#"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="group p-8 flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex flex-col  justify-center items-center rounded-t-xl">
                  <NotebookPen className="size-20 text-green-600 dark:text-neutral-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl mt-3 font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    Partner Indexers
                  </h3>
                  <p className="mt-3  text-gray-500 dark:text-neutral-500">
                    Want to know where our platform's Journals are indexed?
                  </p>
                  <div className="pt-5 gap-3 flex justify-center">
                    <a
                      className="btn-outline dark:bg-transparent text-center py-3 w-full"
                      href="#"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Team */}
        </section>
        {/*...::: Content Section End :::... */}
        <section className="section-content">
          {/* Features */}
          <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
              <div>
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
              <div className="mt-5 sm:mt-10 lg:mt-0">
                <div className="space-y-6 sm:space-y-8">
                  {/* Title */}
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                      Illuminating African Voices through Scholarly Excellence
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-500">
                      Our platform is dedicated to showcasing the vibrant
                      tapestry of African journals, offering a rich repository
                      of scholarly articles and research from across the
                      continent. Dive into a world of diverse perspectives,
                      where each journal provides unique insights and cultural
                      narratives that shape Africa's intellectual landscape.
                    </p>
                  </div>
                  {/* End Title */}
                  {/* List */}
                  <ul className="space-y-2 sm:space-y-4">
                    <li className="flex space-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="flex-shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        <span className="font-bold">Easy &amp; fast</span>{" "}
                        journaling
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="flex-shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Powerful <span className="font-bold">features</span>
                      </span>
                    </li>
                    <li className="flex space-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg
                          className="flex-shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Resources and Repositories
                      </span>
                    </li>
                  </ul>
                  {/* End List */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Features */}
        </section>
        {/*...::: Features Section Start :::... */}
        <section className="section-content" id="about_us">
          {/* Team */}
          <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-5xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-6xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Who We Are
              </h2>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                AfriJour serves as a beacon illuminating the rich spectrum of
                African scholarship and thought. We are committed to amplifying
                the voices of African journals, providing a platform where their
                narratives and perspectives can shine brightly. With an
                unwavering dedication to excellence and inclusivity, we strive
                to be the foremost destination for exploring the depth and
                breadth of African academic discourse.
              </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <section className="text-gray-600 body-font">
              <div className="px-5  mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                      </svg>
                      <h1 className="text-green-600 font-medium title-font mb-2 text-2xl">
                        Our Mission
                      </h1>
                      <p className="leading-relaxed mb-6">
                        Our mission at AfriJour is to spotlight and elevate
                        African journals, fostering a global appreciation for
                        the intellectual richness and diversity emanating from
                        the continent. Through innovative analytics and
                        dedicated curation, we aim to empower African scholars
                        and researchers, catalyzing collaboration and knowledge
                        exchange on a global scale. We are driven by a passion
                        for promoting African scholarship and advancing the
                        collective understanding of Africa's multifaceted
                        narratives.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                      </svg>
                      <h1 className="text-green-600 font-medium title-font mb-2 text-2xl">
                        Our Vision
                      </h1>
                      <p className="leading-relaxed mb-6">
                        Our vision is to be the premier gateway to African
                        journals, fostering a vibrant ecosystem of scholarly
                        exchange and discovery. We aspire to be a catalyst for
                        the global recognition and appreciation of African
                        scholarship, providing a dynamic platform for the
                        exploration and dissemination of African knowledge. By
                        championing the diversity and depth of African academic
                        thought, we seek to inspire and empower the next
                        generation of African scholars and thought leaders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* End Grid */}
          </div>
          {/* End Team */}
        </section>
        {/*...::: Features Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section>
          <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  pb-8">
              {/* Title */}
              <div className="mt-5 max-w-xl text-center mx-auto">
                <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                  Get Started with AfriJour
                </h1>
              </div>
              {/* End Title */}

              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <a
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-green-600 to-green-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4 dark:focus:ring-offset-gray-800"
                  href="https://afrijour-dashboard.vercel.app/"
                >
                  Go to Dashboard
                </a>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </section>
        <section className="section-faq">
          {/* FAQ */}
          <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-2">
                <div className="max-w-xs">
                  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    Frequently
                    <br />
                    asked questions
                  </h2>
                  <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
                    The following are resources that can be accessed on our
                    platform
                  </p>
                </div>
              </div>
              {/* End Col */}
              <div className="md:col-span-3">
                {/* Accordion */}
                <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                  <div
                    className="hs-accordion pb-3 active"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    >
                      African Journals Directory
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p className="text-gray-600 dark:text-neutral-400">
                        With our African Journals Directory you can access a
                        wide range of journals from different disciplines. We
                        have journals from the fields of Medicine, Engineering,
                        Agriculture, Law, and many more. The Journals are from
                        accross the African continent. Access them by clicking
                        on the link below.
                      </p>
                    </div>
                  </div>
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    >
                      African Journals Indexers
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                    >
                      <p className="text-gray-600 dark:text-neutral-400">
                        You can find the list of African Journals Indexers on
                        our platform here:
                      </p>
                    </div>
                  </div>
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    >
                      African Journals Repositories
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                    >
                      <p className="text-gray-600 dark:text-neutral-400">
                        Our platform has journals that are being hosted on the
                        repositories. You can find them here:
                      </p>
                    </div>
                  </div>
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                    >
                      African Journals Reviewers
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                    >
                      <p className="text-gray-600 dark:text-neutral-400">
                        Our platform also provides a list of African Journals
                        Reviewers. They help in the peer review process of the
                        journals. You can find them here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Accordion */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End FAQ */}
        </section>
        {/*...::: FAQ Section End :::... */}

        <section>
          {/* Contact */}
          <div className="relative">
            <section className="text-gray-600 body-font relative">
              <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    frameBorder={0}
                    title="map"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    style={{
                      filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                    }}
                  />
                  <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        ADDRESS
                      </h2>
                      <p className="mt-1">
                        APHRC Campus, Manga Close, off Kirawa Road, Kitisuru,
                        Nairobi, Kenya P.O. Box 10787-00100, Nairobi, Kenya
                      </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                        EMAIL
                      </h2>
                      <a className="text-green-600 leading-relaxed">
                        info@aphrc.org
                      </a>
                      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                        PHONE
                      </h2>
                      <p className="leading-relaxed">+254 20 400 1000</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-0 md:mt-0">
                  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    Contact Us
                  </h2>
                  <p className="leading-relaxed mb-5 text-gray-600">
                    Fill the form below
                  </p>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                  <button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Submit
                  </button>
                </div>
              </div>
            </section>
          </div>
          {/* End Contact */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default LandingPage;
