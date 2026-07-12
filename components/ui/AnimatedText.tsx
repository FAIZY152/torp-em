"use client";

import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  void delay;

  return (
    <span className={cn("block max-w-full whitespace-normal break-words", className)}>
      {text}
    </span>
  );
}
