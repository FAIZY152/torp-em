"use client";

import type { IconType } from "react-icons";
import { motion } from "framer-motion";

type FloatingBadgeProps = {
  label: string;
  icon?: IconType;
  className?: string;
  delay?: number;
};

export function FloatingBadge({ label, icon: Icon, className = "", delay = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      className={`portfolio-icon-badge absolute z-20 h-14 w-14 rounded-2xl shadow-[0_0_28px_rgba(201,243,29,0.14)] backdrop-blur ${className}`}
      animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
      title={label}
    >
      {Icon ? <Icon className="h-7 w-7" /> : <span className="text-xs font-bold">{label}</span>}
    </motion.div>
  );
}
