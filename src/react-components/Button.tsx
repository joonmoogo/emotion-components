import { css } from '@emotion/react'

interface ButtonProps {
    children?: React.ReactNode,
    theme?: 'primary' | 'secondary';
    onClick?: () => void;
}

export const ReactButton = ({ children, theme, onClick }: ButtonProps) => {

    return (
        <>
            <div>test</div>
        </>
    )
}

const style = (css`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
`)

const themes = {
    primary: css`
      background-color: palevioletred;
      color: white;
      
      &:hover {
        background-color: darkviolet;
      }
    `,
    secondary: css`
      background-color: white;
      color: palevioletred;
      border: 1px solid palevioletred;
      
      &:hover {
        background-color: palevioletred;
        color: white;
      }
    `,
};