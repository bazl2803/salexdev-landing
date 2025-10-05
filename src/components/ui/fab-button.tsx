import React from "react";

type FabProps = React.ComponentProps<"button">

export const FabButton: React.FC<FabProps> = ({ children, className }) => {
  return (
    <>
      <button
        className={`fixed right-8 bottom-8 z-10 h-12 w-12 rounded-2xl p-2 ${className}`}
      >
        {children}
      </button>
    </>
  );
};
