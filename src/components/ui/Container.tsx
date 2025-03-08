import React from "react";
import clsx from "clsx";

type ContainerType = {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  id?: string;
};

const Container = ({
  children,
  backgroundColor,
  className,
  id,
}: ContainerType) => {
  const containerClass = !className && "container";
  return (
    <section
      id={id}
      className={`${backgroundColor} py-8 lg:py-14 xl:py-16 2xl:py-24 px-2`}
    >
      <div className={clsx(containerClass, "mx-auto")}>{children}</div>
    </section>
  );
};

export default Container;
