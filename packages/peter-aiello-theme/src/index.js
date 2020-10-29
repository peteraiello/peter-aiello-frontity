import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import Root from "./Root";


const myTheme = {
  name: "peter-aiello-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen: false,
      headerIsScrolling: false
    }
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
      headerDefault: ({ state }) => {
        state.theme.headerIsScrolling = false;
      },
      headerScroll: ({ state }) => {
        state.theme.headerIsScrolling = true;
      },
    }
  },
  libraries: {
    html2react: {
      processors: [image, iframe],
    },
  },
};

export default myTheme;
