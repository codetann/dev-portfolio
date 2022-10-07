import { Card, Article } from "@/components";
import WorkCard from "./WorkCard";
import { BiBriefcaseAlt2, BiEnvelope } from "react-icons/bi";
import { Container, ContainerColumn, Articles } from "./DetailsGrid.styles";

export default function DetailsGrid() {
  return (
    <Container>
      <Articles>
        <Article
          date="September 5, 2021"
          title="How to create a custom React hook"
          description="In this article, we will learn how to create a custom React hook. We will create a useFetch hook that will fetch data from an API and return the data and loading state."
        />
        <Article
          date="October 12, 2021"
          title="Creating a design system with styled-components"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quis ducimus nostrum. Impedit, aperiam exercitationem odit id labore, reiciendis numquam tempore at, illum cum quia illo perferendis magnam omnis atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quis ducimus nostrum. Impedit, aperiam exercitationem odit id labore, reiciendis numquam tempore at."
        />
      </Articles>
      <ContainerColumn>
        <Card icon={<BiEnvelope size={24} />} title="Stay up to date">
          <p style={{ lineHeight: "24px" }}>
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <input type="text" placeholder="Your email" />
            <button>Join</button>
          </div>
        </Card>
        <WorkCard />
      </ContainerColumn>
    </Container>
  );
}
