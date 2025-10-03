import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import React from "react";
import { Testimonial } from "./testimonial";

interface TestimononialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimononialCardProps> = ({
  testimonial,
}) => {
  return (
    <Card>
      <Avatar>
        <AvatarImage src={testimonial.avatarUrl} />
        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
      </Avatar>

      <CardContent>
        <CardDescription>{testimonial.content}</CardDescription>
        <span className="text-muted">- {testimonial.author}</span>
      </CardContent>
    </Card>
  );
};
