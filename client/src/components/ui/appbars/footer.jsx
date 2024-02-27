import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://github.com/bltarkany"
              className="flex items-center"
              target="_blank"
            >
              <img
                src="./assets/imgs/logo.png"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-3xl font-header text-purple-400 whitespace-nowrap dark:text-white">
                Designed By Bobbi Tarkany
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 font-primary">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Bride & Groom
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/login" className="hover:underline">
                    <i className="fa-light fa-rings-wedding text-3xl text-purple-500"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Questions
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    Contact Info
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/bltarkany"
                    className="hover:underline "
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bobbi-tarkany/"
                    className="hover:underline"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            @
            <a href="https://github.com/bltarkany" className="hover:underline">
              bltarkany
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              target="_blank"
            >
              <i class="fa-brands fa-discord text-2xl text-purple-500"></i>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              target="_blank"
            >
              <i class="fa-duotone fa-file-user text-2xl text-purple-500"></i>
              <span className="sr-only">Resume</span>
            </a>
            <a
              href="https://github.com/bltarkany"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              target="_blank"
            >
              <i class="fa-brands fa-square-github text-2xl text-purple-500"></i>
              <span className="sr-only">GitHub Profile</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bobbi-tarkany/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin text-2xl text-purple-500"></i>
              <span className="sr-only">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
