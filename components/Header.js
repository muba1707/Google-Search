import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputValue = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputValue.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        alt="google"
        onClick={() => router.push("/")}
      />
      <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
        <input
          type="text"
          ref={searchInputValue}
          className="flex-grow w-full focus:outline-none"
        />
        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          onClick={() => (searchInputValue.current.value = "")}
        />
        <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer" />
        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
        <button
          hidden
          type="submit"
          onClick={() => {
            search;
          }}
        >
          Search
        </button>
      </form>
    </header>
  );
}

export default Header;
