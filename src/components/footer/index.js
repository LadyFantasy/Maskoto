function Footer() {
  return (
    <>
      <footer className="mt-32 text-gray-700 bg-purple-300 border-t body-font">
        <div class="">
          <div className="container flex flex-col flex-wrap px-5 py-6 lg:px-20 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center text-base ">
              <p className="mr-5 text-sm text-center text-gray-700">
                © Maskoto — 2021
              </p>
              <a
                href="#"
                className="justify-center mr-5 text-sm text-center text-blueGray-200 hover:text-blue-700"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="justify-center mr-5 text-sm text-center text-blueGray-200 hover:text-blue-700"
              >
                Terms Of Service
              </a>
            </div>
            <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-end">
              <p class="mr-5 text-sm text-center text-gray-7000">
                Working Remote Since 2020
              </p>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
