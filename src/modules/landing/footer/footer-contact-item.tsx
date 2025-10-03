import { DynamicIcon, IconName } from "lucide-react/dynamic";

export const FooterContactItem: React.FC<{
  iconName: IconName;
  description: string;
  href: string;
}> = ({ iconName, description, href }) => {
  return (
    <div className="flex items-center gap-2">
      <DynamicIcon name={iconName} color="white" size={16} />{" "}
      <a href={href}>{description}</a>
    </div>
  );
};
