import "styled-components";
import { theme } from "@theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: theme["colors"];
    fontSize: theme["fontSize"];
  }
}
