import Image from "next/image";
import React from "react";

function ReviewCard({ img, name, desc, alt, review }) {
  return (
    <div className="flex flex-col md:w-1/3 m-2 md:m-4 bg-blue-200 transition-all shadow-sm shadow-gray-500 justify-between">
      <div className="bg-white p-4 h-5/6">
        <p>{review}</p>
      </div>
      <div className="flex p-4 items-center max-h-20">
        <div>
          <Image
            className="rounded-full aspect-square"
            src={img}
            alt={alt}
            width={50}
            height={50}
          />
        </div>
        <div className="mx-2">
          <h1>{name}</h1>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
