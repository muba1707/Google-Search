// import Image from "next/image";

function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      className="h-10 rounded-full cursor-pointer transition-duration-150 transform hover:scale-110"
      alt="profilepic"
      src={url}
    />
  );
}

export default Avatar;
