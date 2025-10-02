import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return (
    <>
      <div className="flex flex-col gap-1 border border-neutral-300 rounded-md p-4 shadow-md" {...props}>
        <DynamicIcon className="mb-4" name={props.icon} />

        <span className="text-lg font-semibold">{props.title}</span>
        <span>{props.description}</span>
      </div>
    </>
  );
};
