import Navbar from "../src/app/components/navbar";
import "../src/app/globals.css";
import { useState } from "react";

const dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <title>Dashboard</title>

      <Navbar />
      <section>
        <h1>this is home</h1>
      </section>
    </main>
  );
};

export default dashboard;
