// components/breadcrumbs/Breadcrumbs.ts
import { ReactNode } from "react";
import Link from "next/link";

import styled from 'styled-components'

const BreadCrumbContainer = styled.div`
  display: flex;
  padding-left: 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 1em;
  width: 200px;
  height: 30px;
  font-size: 1.1rem;

  & > span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  & > span.last {
    color: #01a1dd;
  }
`

// defining the Props
export type CrumbItem = {
  label: ReactNode; // e.g., Python
  path: string; // e.g., /development/programming-languages/python
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};


const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <BreadCrumbContainer>
      {items.map((crumb, i) => {
        console.log("este es el crumb", crumb)
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          if (crumb.label === 'Responder') {
            return <>
              <span key={i}>{crumb.label}</span>
              <span> {' > '} </span>
            </>
          } else {
            return (
              <>
                <Link
                  key={i}
                  href={crumb.path}
                >
                  {crumb.label}
                </Link>
                {/* separator */}
                <span> {' > '} </span>
              </>
            );
          }
        } else {
          return <span key={i} className="last">{crumb.label}</span>;
        }
      })}
    </BreadCrumbContainer>
  );
};
export default Breadcrumbs;
