import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">
            © {new Date().getFullYear()} | All Rights Reserved <br /> Sanjeev J
            Thakur
          </p>
        </div>
      </footer>
    </>
  );
}
