import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Simplified background */}
          <div className="absolute inset-0 bg-[#00c8e8]/5 rounded-xl blur-xl opacity-50" />
          
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.icon && (
              <div className="text-4xl mb-4 relative z-10">
                {item.icon}
              </div>
            )}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full",
        "p-6 lg:p-8",
        "backdrop-blur-md bg-white/[0.03] border border-white/[0.08]",
        "relative overflow-hidden",
        className
      )}>
      <div className="relative z-50 flex flex-col items-start">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn(
      "text-xl md:text-2xl font-semibold",
      "text-slate-200 tracking-wide mb-3",
      className
    )}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p className={cn(
      "text-base md:text-lg text-slate-400",
      "tracking-wide leading-relaxed",
      className
    )}>
      {children}
    </p>
  );
};
