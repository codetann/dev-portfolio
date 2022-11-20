import { Layout, Navbar } from "@components";
import { Landing } from "./landing";
import { Header } from "./header";
import { DetailsGrid } from "./details-grid";

function Home() {
  return (
    <Layout>
      <Landing />
      <DetailsGrid />
    </Layout>
  );
}

export { Home };
