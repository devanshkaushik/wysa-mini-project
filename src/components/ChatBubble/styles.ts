import styled from "styled-components"

export const StyledChatBubble = styled.div`
  font-size: 14px;
  padding: 20px;
  width: fit-content;
  max-width: 256px;
  background-color: var(--secondary);
  border-radius: 20px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);
  --switch: calc((var(--secondary-val) - var(--threshold)) * -100%);
  color: hsl(0, 0%, var(--switch));
  transition: all 0.4s ease;
  opacity: 0;

  &.receiver {
    border-top-left-radius: 0;
  }

  &.sender {
    align-self: end;
    background-color: var(--primary);
    --switch: calc((var(--primary-val) - var(--threshold)) * -100%);
    color: hsl(0, 0%, var(--switch));
    border-top-right-radius: 0;
  }
`
