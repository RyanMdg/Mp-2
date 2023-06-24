"use client";
import Image from "next/image";
import axios from "axios";
import Navbar from "../../components/navbar";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>HI FROM HOME</h1>
      <span>this is our fucking home!</span>
    </main>
  );
}
