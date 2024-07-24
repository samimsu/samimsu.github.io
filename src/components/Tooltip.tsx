import React, { useState, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [visible, setVisible] = useState(false);

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
        <div className="absolute bottom-full mb-2 py-1 px-2 text-xs font-medium text-white bg-[rgba(97,97,97,0.92)] rounded shadow-lg text-nowrap break-words">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
