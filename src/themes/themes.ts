import { HSLColor } from "react-color"

export type ITheme = {
  id: string
  name: string
  colors: {
    background: {
      first: HSLColor
      second: HSLColor
    }
    primary: HSLColor
    secondary: HSLColor
  }
}

export type IThemes = { [key: string]: ITheme }

export const defaultThemes: IThemes = {
  default: {
    id: "default",
    name: "Default",
    colors: {
      background: {
        first: { h: 176, s: 0.33, l: 0.9 },
        second: { h: 35, s: 0.88, l: 0.94 },
      },
      primary: { h: 192, s: 0.36, l: 0.5 },
      secondary: { h: 0, s: 0, l: 1 },
    },
  },

  dark: {
    id: "dark",
    name: "Default - Dark",
    colors: {
      background: {
        first: { h: 231, s: 0.09, l: 0.16 },
        second: { h: 231, s: 0.11, l: 0.12 },
      },
      primary: { h: 192, s: 1, l: 0.35 },
      secondary: { h: 192, s: 0.19, l: 0.24 },
    },
  },

  electric_blue: {
    id: "electric_blue",
    name: "Electric Blue",
    colors: {
      background: {
        first: { h: 51, s: 0.95, l: 0.71 },
        second: { h: 52, s: 0.65, l: 0.49 },
      },
      primary: { h: 236, s: 0.47, l: 0.4 },
      secondary: { h: 190, s: 1, l: 0.35 },
    },
  },

  lemon_lime: {
    id: "lemon_lime",
    name: "Lemon Lime",
    colors: {
      background: {
        first: { h: 167, s: 0.44, l: 0.62 },
        second: { h: 102, s: 0.43, l: 0.72 },
      },
      primary: { h: 50, s: 0.96, l: 0.7 },
      secondary: { h: 265, s: 1, l: 0.4 },
    },
  },
}
