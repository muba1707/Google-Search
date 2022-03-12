// import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`h-10 rounded-full cursor-pointer transition-duration-150 transform hover:scale-110 ${className}`}
      alt="profilepic"
      src={url}
    />
  );
}

export default Avatar;
