import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Testimonial } from "./testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <Card className={"h-auto w-full break-inside-avoid hover:scale-105"}>
      <CardHeader
        className={"grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-x-4"}
      >
        <Avatar className={"col-start-1 row-span-2 row-start-1"}>
          <AvatarImage className={"col-start-2"} src={testimonial.avatarUrl} />
          <AvatarFallback className={"col-start-2"}>
            {testimonial.author[0]}
          </AvatarFallback>
        </Avatar>
        <CardTitle>{testimonial.author}</CardTitle>
        <CardDescription>{testimonial.role}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{testimonial.comment}</p>
      </CardContent>
    </Card>
  );
};
