import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="px-3 py-2 bg-base-200 flex gap-5 items-center">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-8" pauseOnHover={true} speed={60}>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod
          molestias itaque eos repellat distinctio! Lorem ipsum dolor sit amet
          consectetur.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod
          molestias itaque eos repellat distinctio! Lorem ipsum dolor sit amet
          consectetur.
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod
          molestias itaque eos repellat distinctio! Lorem ipsum dolor sit amet
          consectetur.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
