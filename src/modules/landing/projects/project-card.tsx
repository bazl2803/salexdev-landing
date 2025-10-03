import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Project } from "./project";

export function ProjectCard({
  name,
  description,
  technologies,
  screenshot,
  link,
}: Project) {
  const CardWrapper = link ? "a" : "div";
  const cardProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className="group block transition-all duration-300 hover:-translate-y-2"
    >
      <Card className="border-border bg-card group-hover:shadow-primary/10 overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
        {/* Screenshot */}
        <div className="bg-muted relative aspect-video w-full overflow-hidden">
          <Image
            src={screenshot || "/placeholder.svg"}
            alt={`${name} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-foreground group-hover:text-primary mb-2 text-2xl font-semibold text-balance transition-colors duration-300">
            {name}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">
            {description}
          </p>

          {/* Technology Stack */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </CardWrapper>
  );
}
