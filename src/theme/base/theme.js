const fontSizes = ["14px", "16px", "24px", "32px", "40px", "50px", "70px", "75px", "100px"];

fontSizes.small = fontSizes[0];
fontSizes.p = fontSizes[1];
fontSizes.h5 = fontSizes[2];
fontSizes.h4 = fontSizes[3];
fontSizes.h3 = fontSizes[4];
fontSizes.h2 = fontSizes[5];
fontSizes.h1 = fontSizes[6];
fontSizes.display1 = fontSizes[7];
fontSizes.display2 = fontSizes[8];

const breakpoints = ["320px", "568px", "768px", "992px", "1200px", "1400px", "1600px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];
breakpoints.ultraWide = breakpoints[6];

const space = ["4px", "8px", "16px", "18px", "38px", "48px", "100px"];

space.xxs = space[0];
space.xs = space[1];
space.s = space[2];
space.md = space[3];
space.lg = space[4];
space.xl = space[5];
space.xxl = space[6];

const colors = {
    text: "#3E3C40",
    light: "#F5F5F5",
    white: "#FFFFFF",
    black: "#000000",
    green: "#A6AE7B",
    blue: "#C3D8D6",
    brown: "#BBA998",
    salmon: "#E2BC9E"
}

export default {
    colors,
    fontSizes,
    breakpoints,
    space
};