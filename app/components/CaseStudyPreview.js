import Image from "next/image";
import Button from "./Button";

export default function CaseStudyPreview({ title, description, img }) {
  return (
    <div className="py-reg">
      <Image src={img} alt="img" className="h-auto w-full" />
      <div className="px-reg py-reg">
        <h2 className="py-reg text-3xl">{title}</h2>
        <p className="mb-6 py-1 text-lg">{description}</p>
        <Button text="View case study" />
      </div>
    </div>
  );
}
