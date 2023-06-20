import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IHomeContainerProps {
  sidebarOpen: boolean
}

const HomeContainer = styled(motion.div) <IHomeContainerProps>`
  display: grid;
  grid-template-columns: ${({ sidebarOpen }) => (sidebarOpen ? '150px 3fr' : '64px 3fr')};
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  /* transition: grid-template-columns .5s ease-in-out; */
`


const Header = styled.header`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 2rem 0;
  grid-area: header;
`

interface ISidebarProps {
  sidebarOpen: boolean
}

const Sidebar = styled(motion.aside) <ISidebarProps>`
  display: flex;
  flex-flow: column;
  padding: 1rem 0;
  grid-area: sidebar;
  column-gap: 2rem;
  flex-grow: 1;
  width: ${({ sidebarOpen }) => (sidebarOpen ? '150px' : '64px')};
  /* transition: width .5s ease-in-out; */
`

const ItemsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 40%;
`

const ConfigItemsContainer = styled(ItemsContainer)`
  height: 40%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
  width: 100%;
`

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  height: auto;
  border-radius: 20px 20px 0 0;
  padding: 2rem 1rem 2rem 1rem;
  position: relative;
  overflow-y: auto;
  background-color: #b92828;
`

const ListLinks = styled(motion.ul)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  gap: 1rem;
`

const MyLink = styled(Link)`
  width: 95%;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  text-align: center;
  z-index:3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
      color: #3C91E6;
  }
`

interface IListItemProps {
  selected?: boolean
  sidebarOpen: boolean
}

const ListItem = styled(motion.li) <IListItemProps>`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  z-index: 0;
  border-radius: 20px 0 0 20px;
  

  &.selected {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    color: #3C91E6;
    z-index: 1;
    position: relative;
    left: ${({ sidebarOpen }) => (sidebarOpen ? '12px' : '10px')};

    & ${MyLink}{
      /* padding: ${({ sidebarOpen }) => (sidebarOpen ? '.2rem' : '.4rem')}; */
      padding: .4rem;
    }
  }
`

interface ITextProps {
  sidebarOpen: boolean
}

const Text = styled.p<ITextProps>`
  display: ${({ sidebarOpen }) => (sidebarOpen ? 'flex' : 'none')};
  margin: 0;
  transition: display .5s ease-in-out;
  white-space: nowrap;
`

export {
  HomeContainer,
  Header,
  Sidebar,
  ListLinks,
  ItemsContainer,
  ConfigItemsContainer,
  LogoContainer,
  DashboardContainer,
  ListItem,
  MyLink,
  Text
}