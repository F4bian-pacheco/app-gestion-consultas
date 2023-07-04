"use client"
import Link from 'next/link'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import { Turn as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context/TemaProvider';

import {
  HomeContainer,
  Sidebar,
  DashboardContainer,
  Header,
  LogoContainer,
  ItemsContainer,
  ConfigItemsContainer,
  ListLinks,
  ListItem,
  MyLink,
  Text
} from '../styled/Home.styled'

import {
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineCalendar
} from 'react-icons/ai'

import { FiUsers, FiSettings, FiLogOut } from 'react-icons/fi'
import { BiStats } from 'react-icons/bi'
import ToggleSwitch from '../toggle';

const containerVariant = {
  open: { gridTemplateColumns: '150px 3fr' },
  closed: { gridTemplateColumns: '64px 3fr' },
};

const sidebarVariant = {
  open: { width: '150px' },
  closed: { width: '64px' },
};

function Dashboard({ children }) {

  const router = useRouter();
  const [selected, setSelected] = useState<number>(1)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { tema, toggleTema } = useContext(ThemeContext);

  const handleSelected = (itemSelected) => {
    setSelected(itemSelected)
  }
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    // Obtén el nombre de la página actual desde el objeto `router`
    const currentPage = router.pathname;
    //necesito un regex para /dashboard/consultas/responder/[id]



    // Mapea las rutas de las páginas a los índices correspondientes en el estado seleccionado
    const routeToIndex = {
      '/dashboard': 1,
      '/dashboard/consultas': 2,
      '/dashboard/reservas': 3,
      '/dashboard/usuarios': 4,
      '/dashboard/estadisticas': 5,
      '/dashboard/configuracion': 6,
    };

    // Actualiza el estado seleccionado según la página actual
    // aca pasan cosas raras
    const url = router.pathname.split('/');
    if (url.includes('consultas')) {
      setSelected(2);
    } else if (routeToIndex[currentPage]) {
      setSelected(routeToIndex[currentPage]);
    }
  }, [router.pathname]);

  return (
    <HomeContainer
      initial={true}
      animate={sidebarOpen ? 'open' : 'closed'}
      transition={{ duration: 0.4 }}
      variants={containerVariant}
      sidebarOpen={sidebarOpen}>
      <Header>
        <Hamburger size={20} toggled={sidebarOpen} toggle={handleToggleSidebar} />
        <h1>Header</h1>
        <p>perfil - {tema}</p>
      </Header>
      <Sidebar
        initial={true}
        animate={sidebarOpen ? 'open' : 'closed'}
        transition={{ duration: 0.4 }}
        variants={sidebarVariant}

        className={sidebarOpen ? '' : 'close'}
        sidebarOpen={sidebarOpen}>
        <LogoContainer>
          <Link href="/dashboard"><img src="https://placehold.co/50x50/png" alt="Logo" /></Link>
        </LogoContainer>
        <ItemsContainer>
          <ListLinks
          >
            <ListItem
              sidebarOpen={sidebarOpen}
              className={selected === 1 ? 'selected' : ''}
              onClick={() => handleSelected(1)}>
              <MyLink href="/dashboard"><AiOutlineHome size={15} />
                <Text sidebarOpen={sidebarOpen}>Inicio</Text>
              </MyLink>
            </ListItem>
            <ListItem

              sidebarOpen={sidebarOpen}
              className={selected === 2 ? 'selected' : ''}
              onClick={() => handleSelected(2)}>
              <MyLink href="/dashboard/consultas"><AiOutlineMail size={15} />
                <Text sidebarOpen={sidebarOpen}>Consultas</Text>
              </MyLink>
            </ListItem>
            <ListItem
              sidebarOpen={sidebarOpen}
              className={selected === 3 ? 'selected' : ''}
              onClick={() => handleSelected(3)}>
              <MyLink href="/dashboard/reservas"> <AiOutlineCalendar size={15} />
                <Text sidebarOpen={sidebarOpen}>Reservas</Text>
              </MyLink>
            </ListItem>
            <ListItem
              sidebarOpen={sidebarOpen}
              className={selected === 4 ? 'selected' : ''}
              onClick={() => handleSelected(4)}>
              <MyLink href="/dashboard/usuarios"><FiUsers size={15} />
                <Text sidebarOpen={sidebarOpen}>Usuarios</Text>
              </MyLink>
            </ListItem>
            <ListItem
              sidebarOpen={sidebarOpen}
              className={selected === 5 ? 'selected' : ''}
              onClick={() => handleSelected(5)}>
              <MyLink href="/dashboard/estadisticas"><BiStats size={15} />
                <Text sidebarOpen={sidebarOpen}>Estadisticas</Text>
              </MyLink>
            </ListItem>
          </ListLinks>
        </ItemsContainer>
        <ConfigItemsContainer>
          <ListLinks>
            <ListItem
              sidebarOpen={sidebarOpen}
              className={selected === 6 ? 'selected' : ''}
              onClick={() => handleSelected(6)}>
              <MyLink href="#"><FiSettings size={15} />
                <Text sidebarOpen={sidebarOpen}>Configuracion</Text>
              </MyLink>
            </ListItem>
            <ListItem sidebarOpen={sidebarOpen}>
              <MyLink href="/login"> <FiLogOut color='red' size={15} />
                <Text sidebarOpen={sidebarOpen}>Cerrar Sesión</Text>
              </MyLink>
            </ListItem>
          </ListLinks>
          <ToggleSwitch tema={tema} toggleTema={toggleTema} />
        </ConfigItemsContainer>
      </Sidebar>
      <DashboardContainer>
        {children}
      </DashboardContainer>
    </HomeContainer>
  )
}

export default Dashboard