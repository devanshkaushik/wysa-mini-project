import { createGlobalStyle, ThemeProps } from "styled-components"
import { ITheme } from "./themes"

export const GlobalStyles = createGlobalStyle<ThemeProps<ITheme>>`
  :root,
  ::after,
  ::before {
    --bg-first-hue: ${({ theme }) => theme.colors.background.first.h};
    --bg-first-sat: ${({ theme }) => theme.colors.background.first.s * 100};
    --bg-first-val: ${({ theme }) => theme.colors.background.first.l * 100};

    --bg-second-hue: ${({ theme }) => theme.colors.background.second.h};
    --bg-second-sat: ${({ theme }) => theme.colors.background.second.s * 100};
    --bg-second-val: ${({ theme }) => theme.colors.background.second.l * 100};

    --primary-hue: ${({ theme }) => theme.colors.primary.h};
    --primary-sat: ${({ theme }) => theme.colors.primary.s * 100};
    --primary-val: ${({ theme }) => theme.colors.primary.l * 100};

    --secondary-hue: ${({ theme }) => theme.colors.secondary.h};
    --secondary-sat: ${({ theme }) => theme.colors.secondary.s * 100};
    --secondary-val: ${({ theme }) => theme.colors.secondary.l * 100};

    --bg-first: hsl(
      var(--bg-first-hue),
      calc(var(--bg-first-sat) * 1%),
      calc(var(--bg-first-val) * 1%)
    );
    --bg-second: hsl(
      var(--bg-second-hue),
      calc(var(--bg-second-sat) * 1%),
      calc(var(--bg-second-val) * 1%)
    );
    --primary: hsl(
      var(--primary-hue),
      calc(var(--primary-sat) * 1%),
      calc(var(--primary-val) * 1%)
    );
    --secondary: hsl(
      var(--secondary-hue),
      calc(var(--secondary-sat) * 1%),
      calc(var(--secondary-val) * 1%)
    );

    /* the threshold at which colors are considered "light." */
    --threshold: 60;
    --border-threshold: 80;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: hsla(
      var(--primary-hue),
      calc(var(--primary-sat) * 1%),
      calc(var(--primary-val) * 1%),
      30%
    );
  }

  body {
    font-size: 14px;
  }
`
