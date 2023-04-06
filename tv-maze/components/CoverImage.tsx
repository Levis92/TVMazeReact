import Image, { ImageProps } from "next/image";

type CoverImageProps = Omit<ImageProps, "src" | "width" | "height"> & {
  src: ImageProps["src"] | undefined;
} & ({ width: number } | { height: number });

const ASPECT_RATIO = 0.68;

export function CoverImage({ src, style, ...props }: CoverImageProps) {
  const width = "width" in props ? props.width : Math.round(ASPECT_RATIO * props.height);
  const height = "height" in props ? props.height : Math.round(props.width / ASPECT_RATIO);
  
  return (
    <Image
      {...props}
      width={width}
      height={height}
      src={src ?? "/cover-placeholder.png"}
      alt={props.alt}
      style={{ margin: "auto", ...style }}
    />
  );
}
