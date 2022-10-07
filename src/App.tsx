import { useState } from "react";
import { Layout, Navbar } from "@components";
import { DetailsGrid, Landing, Header } from "src/sections";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Header />
      <Landing />
      <DetailsGrid />
    </Layout>
  );
}

export default App;
