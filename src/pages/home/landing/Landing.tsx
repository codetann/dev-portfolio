import { Container, Wrapper } from "./Landing.styles";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Avatar } from "@/components";

export function Landing() {
  return (
    <Container>
      <Avatar src="https://media-exp1.licdn.com/dms/image/D5635AQFzgZePT2LKPA/profile-framedphoto-shrink_200_200/0/1668721821611?e=1669399200&v=beta&t=GNZxSDuX76JC621aDH0GzK6TZycQhd18PwQvPnGYikg" />
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
