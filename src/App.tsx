import { useState } from "react";
import { Layout } from "@components";
import { DetailsGrid, Landing } from "src/sections";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Landing />
      <DetailsGrid />
    </Layout>
  );
}

export default App;
