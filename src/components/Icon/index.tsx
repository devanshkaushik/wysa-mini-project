import styled from "styled-components"

type IconProps = {
  src: string
  color?: string
  size?: string
}

export const Icon = styled.i<IconProps>`
  display: block;
  height: ${(props) => (props.size ? props.size : "18px")};
  width: ${(props) => (props.size ? props.size : "18px")};
  background-color: ${(props) =>
    props.color ? props.color : "var(--primary)"};
  transition: background-color 0.4s ease;

  mask-image: url(${(props) => props.src});
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center center;
`
