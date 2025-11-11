import { type CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;

