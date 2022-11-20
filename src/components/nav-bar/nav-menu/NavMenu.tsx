import { Fade } from "@/components";
import { useEffect, useState, useRef } from "react";
import * as styles from "./NavMenu.styles";
import { config } from "src/config";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const body = document.querySelector("body");
      if (isOpen) {
        body!.style.overflow = "hidden";
      } else {
        ref.current!.style.opacity = "0";

        setTimeout(() => {
          body!.style.overflow = "auto";
        }, 2000);
      }
    }
  }, [isOpen]);

  return (
    <>
      <styles.Container show={isOpen}>
        <styles.Button onClick={() => setIsOpen(!isOpen)}>Menu</styles.Button>
      </styles.Container>
      <Fade in={isOpen} timeout={300}>
        <styles.Wrapper ref={ref} isOpen={isOpen}>
          <styles.Links isOpen={isOpen}>
            {config.pages.map(({ path, title }) => (
              <styles.Link href={path} onClick={() => setIsOpen(false)}>
                {title}
              </styles.Link>
            ))}
          </styles.Links>
        </styles.Wrapper>
      </Fade>
    </>
  );
}

export { Menu };
