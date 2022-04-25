import styled from 'styled-components';

const borderSolid = 'border: 0pt rgb(194, 69, 96) solid;';

const primary = `#0a8afa`;
const whitePrimary = `#fff`;
const whiteSecondary = `#eee`;
const blackPrimary = `#000`;
const greyPrimary = `#ccc`;
const errorColor = `#f008`;

const buttonPrimary = `
  background: ${primary};
  color: ${whiteSecondary};
  border: solid 1px ${primary};
  &:hover {
    background: ${primary}dd;
    border-color: ${primary}dd;
  }
  &:active {
    background: ${primary}bb;
    border-color: ${primary}bb;
  }
`;

const buttonSecondary = `
  background: ${whiteSecondary};
  color: ${primary};
  border: solid 1px ${primary};
  &:hover {
    background: ${blackPrimary}1;
    border-color: ${primary}1;
  }
  &:active {
    background: ${blackPrimary}0;
    border-color: ${primary}1;
  }
`;

const textBlack = `
  color: ${blackPrimary}a;
`;

const textPrimary = `
  ${textBlack}
  &:focus-visible {
    outline: none;
    border: solid 1px ${primary};
  }
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px auto;
  padding: 1rem;
  min-width: 300px;
  max-width: 30%;
  box-shadow: 0 1px 7px -1px #cccf;
  border-radius: 0.5rem;
  
  & form {
    width: 100%;
  }


  ${borderSolid}
`;

export const FormHeaderContainer = styled.div`
  color: ${blackPrimary}c;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;

  ${borderSolid}
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${borderSolid}
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  ${borderSolid}
`;

export const ErrorMessageContainer = styled.div`
  & > div {
    margin-top: 3px;
    margin-left: 18px;
    color: ${errorColor};
    font-size: 13px;
  }

  ${borderSolid}
`;

export const ButtonFloatContainer = styled.div`
  display: flex;
  justify-content: end;

  ${borderSolid}
`;

export const Label = styled.label`
    margin-left: 18px;
    margin-bottom: 6px;
    font-size: 14px;
    color: #333a;

    ${borderSolid}
`;

export const Input = styled.input`
${borderSolid}
  border-radius: 40px;
  padding: 0.8rem 0 0.8rem 18px;
  border: solid 1px ${greyPrimary};
  font-size: 18px;
  
  ${textPrimary}

  &:focus-visible {
    border-color: ${({ isError }) =>
      isError ? `${errorColor}` : `${primary}`}
  }

`;

export const Button = styled.button`
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;

  &.primary {
    ${buttonPrimary}
  }

  &.secondary {
    ${buttonSecondary}
  }

  &.clean-button {
    border: 0;
    padding: 2px 8px;
    text-transform: lowercase;
    background: transparent;
    color: ${blackPrimary}7;
    &:hover {
      color: ${primary};
      background: transparent;
    }
    &:active {
      color: ${primary}aa;
    }
  }

  ${borderSolid}

`;
