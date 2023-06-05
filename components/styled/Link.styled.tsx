import styled from 'styled-components';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react'


// esta linea es para estilizar un componente de nextjs
const MyLink: FC<NextLinkProps & { classname?: string }> = ({
  className,
  children,
  href,
}) => (
  <NextLink href={href} className={className}>
    {children}
  </NextLink>
)


export const StyledLink = styled(MyLink)`
  color: green;
  font-size: 4em;
  font-weight: 400;

  &:hover {
    color: red;
  }
`