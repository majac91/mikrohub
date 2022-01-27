const fontSizes = ["14px", "16px", "24px", "40px", "70px", "75px", "100px"];

fontSizes.small = fontSizes[0];
fontSizes.p = fontSizes[1];
fontSizes.h4 = fontSizes[2];
fontSizes.h3 = fontSizes[3];
fontSizes.h2 = fontSizes[4];
fontSizes.h1 = fontSizes[4];
fontSizes.display1 = fontSizes[5];
fontSizes.display2 = fontSizes[6];

console.log(fontSizes.h1);

const breakpoints = ["480px", "568px", "768px", "992px", "1200px", "1400px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

const spaces = ["4px", "8px", "16px", "32px", "48px", "56px"];

spaces.sm = spaces[1];
spaces.xs = spaces[0];
spaces.md = spaces[2];
spaces.lg = spaces[3];
spaces.xl = spaces[4];

const colors = {
    text: "#3E3C40",
    light: "#F5F5F5",
    white: "#FFFFFF",
    black: "#000000",
    green: "#A6AE7B",
    blue: "#C3D8D6",
    brown: "#BBA998"
}

export default {
    colors,
    fontSizes,
    breakpoints,
    spaces
};