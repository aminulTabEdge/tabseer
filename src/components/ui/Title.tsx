import React from "react";

type TitleType = {
  title: string;
  description?: string;
  className?: string;
};
const Title = ({ title, description, className }: TitleType) => {
  return (
    <div
      className={`${className} max-w-5xl mx-auto text-center pb-8 lg:pb-14 xl:pb-16 2xl:pb-24 px-2`}
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-blue-400">{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Title;
