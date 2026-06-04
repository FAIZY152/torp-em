"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.set(root, { y: 0, rotateX: 0 });
      gsap.from(root, {
        y: 42,
        rotateX: -18,
        duration: 0.85,
        delay,
        ease: "power3.out",
        immediateRender: false,
        onComplete: () => gsap.set(root, { y: 0, rotateX: 0 }),
      });
    }, root);

    return () => ctx.revert();
  }, [delay, text]);

  return (
    <span ref={rootRef} className={cn("inline-block will-change-transform", className)}>
      {text}
    </span>
  );
}
