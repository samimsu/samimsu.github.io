import React, { useState, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top-start",
}) => {
  const [visible, setVisible] = useState(false);

  let positionClass;

  switch (position) {
    case "top-start":
      positionClass = "bottom-full";
      break;
    case "top-end":
      positionClass = "bottom-full right-0";
      break;
    default:
      positionClass = "bottom-full";
  }

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div
          className={`absolute mb-2 py-1 px-2 text-xs font-medium text-white bg-[rgba(97,97,97,0.92)] rounded shadow-lg text-nowrap break-words ${positionClass}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
