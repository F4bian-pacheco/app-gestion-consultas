import React from 'react'
import ReservasDashboardContainer from '../styled/Reservas.styled'
import MyCalendar from '../MyCalendar'
import styled from "styled-components";

const TabsContainer = styled.div`
  width: 90%;
  height: 100%;
  /* background: #053742; */
  color: #000000;
`;

const TabNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  li {
    margin-right: 1rem;
    cursor: pointer;
  }
  margin-bottom: 1rem;
`;

interface TabNavItemProps {
  activeTab: number;
}

const TabNavItem = styled.li<TabNavItemProps>`
  width: 80px;
  list-style: none;
  padding: 0.5rem 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.5);
  
  &:nth-child(${({ activeTab }) => activeTab}) {
    color: #000;
    /* background-color: #d1d1d1; */
    &::after {
        content: '';
        display: block;
        width: 80%;
        height: 2px;
        margin: 0 auto;
        background: #01a1dd;
        transition: all 0.3s;
      }
  }
  
`;


const TabOutlet = styled.div`
  width: 100%;
  height: auto;
`;

const Tabs = () => {

  const [activeTab, setActiveTab] = React.useState(1);

  const handleTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer>
      {/* Tab nav */}
      <TabNav>
        <TabNavItem activeTab={activeTab} onClick={() => handleTab(1)}>Reservas</TabNavItem>
        <TabNavItem activeTab={activeTab} onClick={() => handleTab(2)}>Calendario</TabNavItem>
        <TabNavItem activeTab={activeTab} onClick={() => handleTab(3)}>Otra Cosa</TabNavItem>
      </TabNav>
      <TabOutlet>
        {/* content will be shown here */}
        {activeTab === 1 && <div>Reservas</div>}
        {activeTab === 2 && <MyCalendar />}
        {activeTab === 3 && <div>Otra Cosa</div>}
      </TabOutlet>
    </TabsContainer>
  );
};


function ReservasContainerComponent() {
  return (
    <ReservasDashboardContainer>
      {/* <MyCalendar /> */}
      <Tabs />
    </ReservasDashboardContainer>
  )
}

export default ReservasContainerComponent