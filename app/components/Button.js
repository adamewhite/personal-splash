import Image from "next/image";

export default function Button({ text }) {
  return (
    <button className="align-center flex justify-center rounded bg-black px-3 py-2 text-white hover:bg-gray-800 sm:px-6 sm:py-4">
      <span className="text-sm sm:text-lg">{text}</span>
    </button>
  );
}
