import Image from "next/image";
import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function PhoneFrame({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 35vw, 220px",
}: PhoneFrameProps) {
  return (
    <div className={cn("phone-frame", className)}>
      <div className="relative aspect-[9/18] overflow-hidden rounded-[0.94rem]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
