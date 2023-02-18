'use client'
import React from "react";
import { Toaster } from "react-hot-toast";

function ClientProvider() {
  return (
    <>
      {/* Add all util client components here */}
      <Toaster position="top-right" />
    </>
  );
}

export default ClientProvider;
