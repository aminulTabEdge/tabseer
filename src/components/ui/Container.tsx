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
  backgroundColor = "",
  className = "",
  id,
}: ContainerType) => {
  return (
    <section
      id={id}
      className={clsx(backgroundColor, "py-8 lg:py-14 xl:py-16 2xl:py-20 px-2")}
    >
      <div className={clsx(" mx-auto", className)}>{children}</div>
    </section>
  );
};

export default Container;
