import Image from "next/image";
import React from "react";

function ServicesCard(props) {
  return (
    <div className="flex flex-col rounded-2xl md:w-1/3 m-6 md:m-8 bg-yellow-200 transition-all hover:shadow-sm hover:shadow-gray-500">
      <Image
        className="w-full h-[200px] rounded-t-2xl"
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
