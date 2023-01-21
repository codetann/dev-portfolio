import { Card, Article } from "@/components";
import { config } from "@/config";
import WorkCard from "./WorkCard";
import { Comment } from "./comment";
import { BiEnvelope } from "react-icons/bi";
import { Container, ContainerColumn, Articles } from "./DetailsGrid.styles";

export function DetailsGrid() {
  return (
    <Container>
      <Articles>
        {config.comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </Articles>
      <ContainerColumn>
        <Card icon={<BiEnvelope size={24} />} title="Get In Touch">
          <p style={{ lineHeight: "24px" }}>
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message" />
            <button>Send</button>
          </div>
        </Card>
        <WorkCard />
      </ContainerColumn>
    </Container>
  );
}
