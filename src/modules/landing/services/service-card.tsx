import { DynamicIcon } from "lucide-react/dynamic";
export const ServiceCard = (props: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <DynamicIcon className="mb-4" />

        <span>{props.title}</span>
        <span>{props.description}</span>
      </div>
    </>
  );
};
