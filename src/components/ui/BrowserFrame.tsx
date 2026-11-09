import Image from "next/image";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  previewSrc?: string;
};

export function BrowserFrame({
  src,
  alt,
  url,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  quality = 82,
  previewSrc,
}: BrowserFrameProps) {
  return (
    <div className={cn("browser-frame", className)}>
      <div className="browser-frame__bar" aria-hidden="true">
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        <span className="browser-frame__url">{url}</span>
        <span className="ml-auto hidden text-[0.7rem] tracking-[0.08em] text-ink/65 sm:inline">
          {previewSrc ? "LIVE · HOVER" : "LIVE"}
        </span>
      </div>
      <div className={cn("browser-frame__content", imageClassName)}>
        <div
          className="browser-frame__scroll"
          data-scroll={previewSrc ? "true" : undefined}
        >
          <div className="browser-frame__slide">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              quality={quality}
              priority={priority}
              className="object-cover object-top"
            />
          </div>
          {previewSrc ? (
            <div className="browser-frame__slide" aria-hidden="true">
              <Image
                src={previewSrc}
                alt=""
                fill
                sizes={sizes}
                quality={quality}
                className="object-cover object-top"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
