"use client";

import React from "react";
import { useInView } from "./useInView";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function StaggerReveal({ children, className, style }: StaggerRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div ref={ref} className={`stagger-reveal ${inView ? "is-visible" : ""} ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}
