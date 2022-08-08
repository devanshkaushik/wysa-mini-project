import styled from "styled-components"
import { HSLColor } from "react-color"

type ThemeColorProps = {
  themeColor: HSLColor
}

export const StyledThemePicker = styled.div`
  position: relative;

  button {
    position: relative;
    display: flex;
    height: 40px;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background-color: var(--primary);
    border-radius: 6px;
    font-family: inherit;

    --switch: calc((var(--primary-val) - var(--threshold)) * -100%);
    color: hsl(0, 0%, var(--switch));
    cursor: pointer;
    outline: none;
    border: none;
    z-index: 5;
    transition: all 0.4s ease;

    i {
      background-color: hsl(0, 0%, var(--switch));
    }
  }
`

export const Picker = styled.div`
  position: absolute;
  top: calc(100% - 12px);
  right: 0;
  padding: 10px 0;
  background-color: var(--secondary);
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;

  transition: background-color 0.4s ease, top 0.2s ease, opacity 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 30px;
    border: solid 8px transparent;
    border-bottom-color: var(--secondary);
    transition: border-color 0.4s ease;
  }

  &.visible {
    top: calc(100% + 12px);
    opacity: 1;
    pointer-events: all;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`

export const Theme = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: hsla(
      var(--primary-hue),
      calc(var(--primary-sat) * 1%),
      calc(var(--primary-val) * 1%),
      20%
    );
  }

  p {
    flex-grow: 1;
    margin-right: 10px;
    --switch: calc((var(--secondary-val) - var(--threshold)) * -100%);
    color: hsl(0, 0%, var(--switch));
    transition: color 0.4s ease;
    white-space: nowrap;
  }
`

export const ThemeColor = styled.span.attrs<ThemeColorProps>(
  ({ themeColor }) => ({
    style: {
      backgroundColor: `hsl(
        ${themeColor.h},
        ${themeColor.s * 100}%,
        ${themeColor.l * 100}%
      )`,
      borderColor: `hsla(
        ${themeColor.h},
        ${themeColor.s * 100}%,
        ${themeColor.l * 80}%
      )`,
    },
  })
)<ThemeColorProps>`
  display: block;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border: solid 3px white;

  &.square {
    border-radius: 5px;
  }
`
