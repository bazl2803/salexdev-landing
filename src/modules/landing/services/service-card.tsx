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
        className="border border-primary rounded-xl flex flex-col gap-1 bg-white bg-gradient-to-br p-4"
        {...props}
      >
        <DynamicIcon className="mb-4" name={props.icon} />

        <span className="text-lg font-semibold">{props.title}</span>
        <span>{props.description}</span>
      </div>
    </>
  );
};
