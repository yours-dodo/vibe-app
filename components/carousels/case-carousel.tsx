import Image from "next/image";

type CaseItem = {
  image: string;
  alt: string;
};

type CaseCarouselProps = {
  items: readonly CaseItem[];
};

export default function CaseCarousel({ items }: CaseCarouselProps) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="case-marquee-shell">
      <div className="case-marquee-track">
        {marqueeItems.map((item, index) => (
          <article
            key={`${item.image}-${index}`}
            className="case-marquee-card overflow-hidden rounded-[28px] border border-[#d9e6ff] bg-white shadow-[0_18px_50px_rgba(27,73,156,0.12)]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={669}
              height={1203}
              className="h-[575px] w-[320px] object-cover"
              sizes="320px"
            />
          </article>
        ))}
      </div>
    </div>
  );
}
