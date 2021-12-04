import Cover from "../components/Cover";
import CoverWhatWeDo from "../components/WhatWeDo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Cover />
      <CoverWhatWeDo />
      <Footer />
    </div>
  )
}
