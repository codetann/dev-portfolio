import { Fade } from "@/components";
import { useEffect, useState, useRef } from "react";
import * as styles from "./NavMenu.styles";
import { config } from "src/config";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflow = "hidden";
    } else {
      body!.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <styles.Button onClick={() => setIsOpen(!isOpen)}>Menu</styles.Button>
      {isOpen && (
        <>
          <styles.Wrapper ref={ref} isOpen={true}>
            <styles.Links isOpen={isOpen}>
              {config.pages.map(({ path, title }) => (
                <styles.Link href={path} onClick={() => setIsOpen(false)}>
                  {title}
                </styles.Link>
              ))}
            </styles.Links>
          </styles.Wrapper>
          <styles.Overlay onClick={() => setIsOpen(!isOpen)} />
        </>
      )}
    </>
  );
}

export { Menu };
