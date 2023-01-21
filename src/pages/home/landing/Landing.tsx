import { Container, Wrapper } from "./Landing.styles";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Avatar } from "@/components";
import { config } from "@/config";

export function Landing() {
  return (
    <Container>
      <Avatar src={config.profile_photo} />
      <h1>Software designer, founder, and amateur astronaut.</h1>
      <p>
        I'm Spencer, a software designer and entrepreneur based in New York
        City. I'm the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <SocialLinks />
    </Container>
  );
}

function SocialLinks() {
  return (
    <Wrapper>
      <FaGithub size={22} />
      <FaTwitter size={22} />
      <FaLinkedin size={22} />
    </Wrapper>
  );
}
