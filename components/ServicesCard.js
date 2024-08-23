import Image from "next/image";
import React from "react";

function ServicesCard(props) {
  let gradient = [
    "from-amber-200 to-amber-100",
    "from-blue-200 to-blue-100",
    "from-purple-200 to-purple-100",
    "from-red-200 to-red-100",
    "from-green-200 to-green-100",
    "from-pink-200 to-pink-100",
  ];
  return (
    <div
      className={`flex flex-col rounded-2xl mx-12 md:mx-4 md:w-1/3 m-6 md:m-8 bg-gradient-to-br ${
        gradient[props.id - 1]
      } transition-all hover:shadow-sm hover:shadow-gray-500`}
    >
      <Image
        className="w-full md:h-[300px] object-cover rounded-t-2xl"
        src={props.img}
        alt={props.alt}
        width={200}
        height={200}
      />
      <div className="p-4">
        <h1 className="text-xl mb-2">{props.title}</h1>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
