import React from "react";
import { useNavigate } from "react-router-dom";

import LogoImage from "src/assets/carenow.png";

import { cn } from "src/lib/utils";

interface LogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function Logo({
  width = "100px",
  height = "100px",
  className,
}: LogoProps): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      className={cn(className, "cursor-pointer")}
      onClick={() => navigate("/")}
    >
      <img alt="Carenow Logo" src={LogoImage} style={{ width, height }} />
    </div>
  );
}
