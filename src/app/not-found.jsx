import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you looking for does not exists</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
