import styled from "styled-components"

type StyledCustomizeThemeProps = {
  index: number
}

export const StyledCustomizeTheme = styled.div<StyledCustomizeThemeProps>`
  .color-picker {
    position: absolute;
    top: 100%;
    right: calc(0% + 25px + ${(props) => props.index * 40}px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s ease;

    &.visible {
      opacity: 1;
      pointer-events: all;
    }
  }
`
