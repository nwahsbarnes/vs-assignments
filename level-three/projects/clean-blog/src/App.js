import React from "react";
import './App.css';
import Header from "./Header";
import BlogList from "./BlogList";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}
