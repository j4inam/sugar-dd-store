import Image from "next/image";
import notFoundSVG from "@/public/empty.svg";

export type EmptyListProps = {
  text: string;
  emptyListActions?: React.ReactNode;
};

const EmptyList = ({ text, emptyListActions }: EmptyListProps) => {
  return (
    <div className="relative flex flex-col gap-10 justify-center items-center text-center mt-6">
      <Image
        priority
        src={notFoundSVG}
        alt="No items found."
        height={500}
        width={500}
      />
      <h2>{text}</h2>
      {emptyListActions}
    </div>
  );
};

export default EmptyList;
