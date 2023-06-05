import React from 'react'
import Breadcrumbs from '../BreadCrumb'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const HeaderContent = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`



// colocar un header aca para el dashboard y poder colocar los breadcrumbs

function ContentDashboard({ titulo, children }) {

  const router = useRouter()

  const { pathname } = router
  const items = pathname.split('/').map((path, index) => {
    if (index === 0) {
      return {
        label: 'Inicio',
        path: '/dashboard'
      }
    }
    // not include dashboard path in items
    if (index === 1) {
      return null
    }
    return {
      // capitalize first letter
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: `${pathname.split(path)[0]}${path}`
    }
  }).filter(Boolean)

  return (
    <>
      <HeaderContent>
        <Breadcrumbs items={items} />
      </HeaderContent>
      {children}
    </>
  )
}

export default ContentDashboard