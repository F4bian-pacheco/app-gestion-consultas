import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../context/TemaProvider';



const ToggleSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 23px;
  cursor: pointer;
  `;

const ToggleSwitchInput = styled.input`
  display: none;
  `;

interface ToggleSwitchBackground {
  isActive: boolean
}
const ToggleSwitchBackground = styled.div<ToggleSwitchBackground>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ isActive }) => (isActive ? '#ddd' : '#3C91E6')};
  border-radius: 20px;
  box-shadow: inset 0 0 0 2px #ccc;
  transition: background-color 0.5s ease-in-out;
`;

interface ToggleSwitchHandleProps {
  isActive: boolean
}

const ToggleSwitchHandle = styled.div<ToggleSwitchHandleProps>`
  position: absolute;
  top: 4px;
  left: ${({ isActive }) => (isActive ? '3px' : '25px')};
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
`;


const ToggleSwitch = ({ tema, toggleTema }) => {

  const [isActive, setIsActive] = useState(tema === 'light');

  const handleToggle = () => {
    setIsActive(!isActive);
    localStorage.setItem('tema', isActive ? 'dark' : 'light');
    toggleTema();

  };


  return (
    <ToggleSwitchLabel >
      <ToggleSwitchInput type="checkbox" />
      <ToggleSwitchBackground onClick={handleToggle} isActive={isActive} >
        <ToggleSwitchHandle isActive={isActive} />
      </ToggleSwitchBackground>
    </ToggleSwitchLabel>
  );
};

export default ToggleSwitch;
