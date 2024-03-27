import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    btnColor: string;
    lightColor: string;
    blueColor: string;
  }
  export interface MapTheme {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  }
}
