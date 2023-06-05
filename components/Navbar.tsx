import React from 'react';
import styled from 'styled-components';

const NavbarStyled = styled.ul`
  width: 90%;
  margin: 0 auto;
  height: 100px;
  background-color: #000000;
  color: #ffffff;
  font-size: 2em;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  box-sizing: border-box;
  gap: 1em;
  list-style: none;
  border-radius: 0 0 20px 20px;
  position: fixed;
  top: 0;
`
const ItemStyled = styled.a`
  color: #ffffff;
  background-color: #000000;
  padding: .5em 1em;
  font-size: .8em;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out, outline 0.2s ease-out;

  &:hover {
    color: #0070f3;
    outline: 1px solid #0070f3;
    border-radius: .5em;
  }
`


export default function Navbar() {
  return (
    <NavbarStyled>
      <li>
        <ItemStyled href="/">Home</ItemStyled>
      </li>
      <li>
        <ItemStyled href="/about">About</ItemStyled>
      </li>
      <li>
        <ItemStyled href="/hola">Hola</ItemStyled>
      </li>
      <li>
        <ItemStyled href="/counter">Counter</ItemStyled>
      </li>
    </NavbarStyled>
  )
}
