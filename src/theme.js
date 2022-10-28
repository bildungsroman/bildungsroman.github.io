const variables = require("./data/variables");

const colorPalette = {
  lightShades: variables.lightGrey,
  lightAccent: variables.primaryLight,
  mainBrand: variables.primary,
  darkAccent: variables.primaryDark,
  darkShades: variables.darkGrey,
};

const baseTheme = {
  actions: {
    primary: colorPalette.mainBrand,
  },
  palette: {
    darkAccent: colorPalette.darkAccent,
    darkShades: colorPalette.darkShades,
    lightAccent: colorPalette.lightAccent,
    lightShades: colorPalette.lightShades,
    mainBrand: colorPalette.mainBrand,
  },
};

const darkTheme = {
  ...baseTheme,
  global: {
    background: variables.background.dark,
    backgroundGradient: variables.background.darkGradient,
    color: variables.text.dark,
    grey: variables.lightGrey,
    link: variables.link.dark,
    linkHover: variables.link.darkActive,
  },
};

const lightTheme = {
  ...baseTheme,
  global: {
    background: variables.background.light,
    backgroundGradient: variables.background.lightGradient,
    color: variables.text.light,
    grey: variables.grey,
    link: variables.link.light,
    linkHover: variables.link.lightActive,
  },
};

exports.darkTheme = darkTheme;
exports.lightTheme = lightTheme;
