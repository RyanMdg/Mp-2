"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h1>{item.price}</h1>
          <img src={item.images} alt="" />
        </div>
      ))}
    </div>
  );
}
