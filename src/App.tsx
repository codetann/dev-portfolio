import { useState } from "react";
import { Layout, Navbar } from "@components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { config } from "src/config";

function App() {
  const [count, setCount] = useState(0);

  function renderRoutes() {
    return config.pages.map((page) => {
      return (
        <Route key={page.title} path={page.path} element={<page.component />} />
      );
    });
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{renderRoutes() as any}</Routes>
    </BrowserRouter>
  );
}

export default App;
