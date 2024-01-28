"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
};

export default ContextWrapper;
