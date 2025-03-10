import Image from "next/image";

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex justify-center">
      <Image
        src={src}
        height={300}
        width={300}
        alt={alt}
        className="w-[400px] lg:w-[500px] "
      />
    </div>
  );
};

export default ImageComponent;
