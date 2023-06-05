import styled from 'styled-components'
import Link from 'next/link'



const LoginForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
  width: 40%;
  height: 100%;
`
const LoginTitle = styled.h1`
  font-family: 'poppins';
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  &:after {
    content: '';
    display: block;
    width: 80%;
    height: 2px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

`
const LoginInput = styled.input`
  font-family: 'poppins';
  padding: 1rem;
  width: 80%;
  height: 2.5rem;
  margin: 1rem 0;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};

  &:focus{
    background-color: #ffffff;
    color: #000
  }
  &::placeholder{
    font-size: 0.9rem;
  }

`
const LoginButton = styled.button`
  font-family: 'poppins';
  width: 50%;
  height: 3rem;
  margin: 0 auto;
  padding: 0 1rem;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: #ffffff;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 60%;
  height: 1200px;
  transform: rotate(12.07deg) translate(-200px, -140px);
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.25);
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MyLink = styled(Link)`
  position: relative;
  left: -130px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`

export {
  LoginForm,
  LoginTitle,
  LoginInput,
  LoginButton,
  ImageContainer,
  StyledImage,
  MyLink
}