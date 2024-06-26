import { css } from '@emotion/react'

const color = 'white'

interface props {
    onClick: () => void
    objtype: 'primary' | 'warning'
    content: string
}


const obj = {
    primary: 'blue',
    warning: 'red'
}


export const ReactButton = ({ onClick, objtype, content }: props) => {
    return (
        <div css={css`
            padding: 32px;
            background-color: ${obj[objtype]};
            font-size: 24px;
            border-radius: 4px;
            &:hover {
                color: ${color};
            }
            `}
            onClick={onClick}
        >
            {content}
        </div>
    )
}
