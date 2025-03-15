import { Default } from "@/components/default/Default";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
};

export default Navigation;
