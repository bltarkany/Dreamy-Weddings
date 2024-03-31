import './styles.css';
export const HeroWithImg = ({ image, greeting, intro }) => {
  return (
    <section
      className={`bg-center bg-no-repeat bg-[url('${image}')] bg-cover bg-gray-400 bg-blend-multiply`}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-header  tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {greeting}
        </h1>
        <p className="mb-8 text-lg font-primary font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {intro}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-400 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
          >
            Events
            <i className="fa-light fa-calendar-star ms-2"></i>
            {/* <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:text-purple-600 focus:ring-4 focus:ring-gray-400"
          >
            Gallery
          </a>
        </div>
      </div>
    </section>
  );
};
