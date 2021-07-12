const variables = require('./data/variables');

const colorPalette = {
  lightShades: variables.lightGrey,
  lightAccent: variables.primaryLight,
  mainBrand: variables.primary,
  darkAccent: variables.primaryDark,
  darkShades: variables.darkGrey
};

const baseTheme = {
  actions: {
    primary: colorPalette.mainBrand
  },
  palette: {
    darkAccent: colorPalette.darkAccent,
    darkShades: colorPalette.darkShades,
    lightAccent: colorPalette.lightAccent,
    lightShades: colorPalette.lightShades,
    mainBrand: colorPalette.mainBrand
  },
};

const darkTheme = {
  ...baseTheme,
  global: {
    background: variables.background.dark,
    color: variables.text.dark,
    link: variables.link.dark,
    linkHover: variables.link.active
  }
};

const lightTheme = {
  ...baseTheme,
  global: {
    background: variables.background.light,
    color: variables.text.light,
    link: variables.link.light,
    linkHover: variables.link.light
  }
};

exports.darkTheme = darkTheme;
exports.lightTheme = lightTheme;
