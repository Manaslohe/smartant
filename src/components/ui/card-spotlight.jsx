"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      className={cn(
        "group/spotlight relative",
        "rounded-2xl overflow-hidden",
        "backdrop-blur-md bg-white/[0.03] border border-white/[0.08]", // Updated background styling
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[#00c8e8]/10 rounded-2xl blur-xl opacity-50" />

      {/* Existing spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      <div className="relative z-10 p-8 lg:p-10">
        {children}
      </div>
    </div>
  );
};
