import styled, { css } from "styled-components";

interface I_StyButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}
export const StyButton = styled.button<I_StyButtonProps>`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
`

const getVariantStyles = (props: I_StyButtonProps) =>
  props.primary
    ? css`
        color: white;
        background-color: #1ea7fd;
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

const getSizeStyles = (props: I_StyButtonProps) => {
  switch (props.size) {
    case 'small': {
      return css`
          font-size: 12px;
          padding: 10px 16px;
        `;
    }
    case 'large': {
      return css`
          font-size: 16px;
          padding: 12px 24px;
        `;
    }
    default: {
      return css`
          font-size: 14px;
          padding: 11px 20px;
        `;
    }
  }
};