import styled from 'styled-components';

export interface IBotonProps {
  variant?: "primary" | "secondary";
  size: "large"
}

export const Boton = styled.button.attrs<Pick<IBotonProps, "size">>(
  (props) => {
    size: props?.size;
  }) <IBotonProps>`

  background: ${(props) =>
    props?.variant === "primary"
      ? props?.theme.colors.primary
      : props?.theme.colors.secondary};
  border-radius: 5px;
  border-radius: 999px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: ${(props) => props?.size === "large" ? "18px 28px" : "8px 18px"};
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin: 0.25em;

  /* animation-name: breadth-animation;
  animation-duration: 1s;
  animation-iteration-count: infinite; */

  &:hover {
    background: #3a5a97;
  }

  @keyframes breadth-animation {
    0%{
      height: 50px;
    }
    40%{
      height: 100px;
    }
    100%{
      height: 50px;
    }
  }

`;

// export const Boton = styled.a<IBotonProps>`
//   background: ${(props) => props?.variant === "primary" ? "#ff4742" : "#000"};
//   border-radius: 5px;
//   border-radius: 999px;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: 700;
//   line-height: 24px;
//   opacity: 1;
//   outline: 0 solid transparent;
//   padding: 8px 18px;
//   width: fit-content;
//   word-break: break-word;
//   border: 0;
//   margin: 0.25em;
// `
export const FacebookBoton = styled(Boton)`
background: #3a5a97;
color: #fff;
`