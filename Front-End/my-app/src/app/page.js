import Image from "next/image";
import Navbar from "../../components/navbar";
import Modal from "../../components/modal";
import HeroCarousel from "../../components/carousel";
import Navsamp from "../../components/navsamp";

export default function Home() {
  return (
    <main>
      <Navsamp />
      <HeroCarousel />
    </main>
  );
}
