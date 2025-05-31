import Image from "next/image";
import { Menu } from "lucide-react";

import { title } from "@/components/primitives";

export default function SkylinePettingZooPage() {
  return (
    <>
      <div className="flex bg-green-500 dark:bg-green-900 p-2 gap-4 items-center">
        <Image
          alt="Skyline Petting Zoo Logo"
          className="w-auto h-8"
          height={138.04}
          src="/skyline-petting-zoo.svg"
          width={227.47}
        />
        <h1 className="text-xl font-bold">Skyline Petting Zoo</h1>
        <div className="flex-grow" />
        <button className="hidden md:inline-block bg-green-600 dark:bg-green-800 p-2">
          Home
        </button>
        <a
          className="hidden md:inline-block bg-green-600 dark:bg-green-800 p-2"
          href="#visit"
        >
          Visit
        </a>
        <Menu className="md:hidden" />
      </div>
      <div className="flex flex-col md:flex-row bg-orange-950 text-white overflow-hidden text-large items-center">
        <p className="md:w-1/2 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          obcaecati voluptatem fuga dolorum repudiandae, quaerat nam quam, qui
          id repellat necessitatibus culpa aspernatur ea maiores veniam fugiat!
          Labore, aspernatur tenetur officiis saepe, ab dicta ipsa nobis iure
          necessitatibus animi odio! Sunt, exercitationem. Neque obcaecati sed
          recusandae nam provident, quis quisquam.
        </p>
        <Image
          alt="Bunny"
          className="md:w-1/2 md:h-96 object-cover"
          height={5184}
          src="/satyabratasm-u_kMWN-BWyU-unsplash.jpg"
          width={3456}
        />
      </div>
      <div className="flex flex-col md:flex-row-reverse bg-orange-900 text-white overflow-hidden text-large items-center">
        <p className="md:w-1/2 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          obcaecati voluptatem fuga dolorum repudiandae, quaerat nam quam, qui
          id repellat necessitatibus culpa aspernatur ea maiores veniam fugiat!
          Labore, aspernatur tenetur officiis saepe, ab dicta ipsa nobis iure
          necessitatibus animi odio! Sunt, exercitationem. Neque obcaecati sed
          recusandae nam provident, quis quisquam.
        </p>
        <Image
          alt="Bunny"
          className="md:w-1/2 md:h-96 object-cover"
          height={5184}
          src="/pierre-borthiry-peiobty-ftF9k0ynr4Q-unsplash.jpg"
          width={3456}
        />
      </div>
      <div className="flex flex-col md:flex-row bg-orange-800 text-white overflow-hidden text-large items-center">
        <p className="md:w-1/2 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          obcaecati voluptatem fuga dolorum repudiandae, quaerat nam quam, qui
          id repellat necessitatibus culpa aspernatur ea maiores veniam fugiat!
          Labore, aspernatur tenetur officiis saepe, ab dicta ipsa nobis iure
          necessitatibus animi odio! Sunt, exercitationem. Neque obcaecati sed
          recusandae nam provident, quis quisquam.
        </p>
        <Image
          alt="Bunny"
          className="md:w-1/2 md:h-96 object-cover"
          height={5184}
          src="/yang-_9dAwWA4LD8-unsplash.jpg"
          width={3456}
        />
      </div>
      <div className="flex flex-col gap-2 bg-orange-700 p-4 text-white">
        <h2 className={title({ size: "sm" })} id="visit">
          Find Us
        </h2>
        <iframe
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-122.36773967742921%2C47.66200574396263%2C-122.33941555023195%2C47.674866264152534&amp;layer=mapnik"
          title="MAP"
          width="100%"
        />
        <br />
        <small>
          <a href="https://www.openstreetmap.org/?#map=16/47.66844/-122.35358">
            View Larger Map
          </a>
        </small>
      </div>
    </>
  );
}
