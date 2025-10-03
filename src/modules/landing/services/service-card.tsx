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
        className="flex flex-col gap-1 rounded-md border border-neutral-300 bg-white p-4 shadow-md dark:border-neutral-700 dark:bg-neutral-800"
        {...props}
      >
        <DynamicIcon className="mb-4" name={props.icon} />

        <span className="text-lg font-semibold">{props.title}</span>
        <span>{props.description}</span>
      </div>
    </>
  );
};
