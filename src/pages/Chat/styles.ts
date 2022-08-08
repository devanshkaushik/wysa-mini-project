import styled from "styled-components"

export const StyledChat = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  width: 500px;
  padding: 50px 0;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    padding: 0 20px;
    margin-bottom: 50px;
  }

  .chat-bubble {
    &-enter,
    &-enter-active {
      opacity: 0;
      transform: scale(0.9);
    }
    &-enter-done {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const ChatInput = styled.div`
  display: flex;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  input {
    font-family: inherit;
    flex-grow: 1;
    padding: 15px 20px;
    border-radius: 10px 0 0 10px;
    border: none;
    outline: none;
    background-color: var(--secondary);
    transition: background-color 0.4s ease;
    --switch: calc((var(--secondary-val) - var(--threshold)) * -100%);
    color: hsl(0, 0%, var(--switch));

    &::placeholder {
      color: inherit;
      transition: color 0.4s ease;
    }
  }

  button {
    padding: 15px 20px;
    border: none;
    background-color: var(--secondary);
    color: white;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    outline: none;
    transition: all 0.4s ease;

    & > svg > path {
      fill: var(--primary);
    }
  }
`
