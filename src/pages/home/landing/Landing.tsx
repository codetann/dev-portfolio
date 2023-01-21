import { Container, Wrapper } from "./Landing.styles";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Avatar } from "@/components";
import { profileConfig } from "@/config/index";

export function Landing() {
  return (
    <Container>
      <Avatar src={profileConfig.photo} />
      <h1>{profileConfig.title}</h1>
      <p>{profileConfig.description}</p>
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
