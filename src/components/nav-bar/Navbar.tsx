import { config } from "@/config";
import { Menu } from "./nav-menu/NavMenu";
import * as styles from "./Navbar.styles";

function Navbar() {
  return (
    <>
      <styles.Relative>
        <styles.Sticky>
          <styles.Nav>
            {config.pages.map(({ path, title }) => (
              <styles.Link href={path}>{title}</styles.Link>
            ))}
          </styles.Nav>
        </styles.Sticky>
      </styles.Relative>
      <Menu />
    </>
  );
}

export { Navbar };
