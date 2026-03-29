import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="hover:opacity-90 transition">
      <img src="/logo.png" alt="Sunrise & Co." className="h-12 w-auto" />
    </Link>
  );
};

export default Logo;
