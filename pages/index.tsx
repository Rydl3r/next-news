import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center pt-10">
      <h1 className="font-bold text-4xl pt-10 pb-5">
        Welcome to your Favorite News Portal
      </h1>
      <h3 className="text-2xl py-10">Proceed to one of our categories: </h3>
      <div className="flex justify-center">
        <Link href="./latest">
          <a className="transition bg-gray-800 cursor-pointer hover:bg-gray-900 text-white py-2 px-6 rounded mx-2">
            Latest
          </a>
        </Link>
        <Link href="./popular">
          <a className="transition bg-gray-800 cursor-pointer hover:bg-gray-900 text-white py-2 px-6 rounded mx-2">
            Popular
          </a>
        </Link>
      </div>
    </div>
  );
}
