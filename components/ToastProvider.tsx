"use client";

import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return (
  <ToastContainer
        toastClassName="custom-toast"
        toastStyle={{
            background: "#1a1a1a", 
            color: "#fff",           
            borderRadius: "0.75rem", 
            fontWeight: 500,
            padding: "2rem",
            maxWidth: "400px",
        }}
    />
  );
}
