import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return (
    <>
      <div
        className="flex flex-col gap-1 bg-gradient-to-br bg-[repeating-linear-gradient(135deg,#f3f4f6_0px,#f3f4f6_20px,#e5e7eb_20px,#e5e7eb_40px)] from-gray-50 via-gray-100 to-gray-200 p-2"
        {...props}
      >
        <DynamicIcon className="mb-4" name={props.icon} />

        <span className="text-lg font-semibold">{props.title}</span>
        <span>{props.description}</span>
      </div>
    </>
  );
};
