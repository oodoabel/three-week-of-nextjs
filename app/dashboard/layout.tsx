import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-amber-300 text-3xl">Dashboard ui</h1>
      {children}
    </div>
  );
};

export default layout;
