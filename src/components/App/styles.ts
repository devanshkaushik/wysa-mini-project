import styled from "styled-components"

export const StyledApp = styled.div`
  height: 100vh;
  background: linear-gradient(239.26deg, var(--bg-first), var(--bg-second));
  display: flex;
  flex-direction: column;

  header {
    padding: 20px;
  }
`

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`

export const NavLinks = styled.li`
  height: 40px;
  padding: 10px 20px;
  background-color: var(--primary);
  --switch: calc((var(--primary-val) - var(--threshold)) * -100%);
  color: hsl(0, 0%, var(--switch));
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
`
