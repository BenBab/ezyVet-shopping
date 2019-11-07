import React from 'react';
import styled from 'styled-components'

export function Button({ onClick, children, margin}) {
    return (
        <StyledButton onClick={onClick} margin={margin || 0}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    /* background-color: #0056b3; */
    background: linear-gradient(45deg, rgb(0,86,179), rgba(0,86,179, 0.7 ));
    color: white; 
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    margin: ${props => props.margin};

    &:hover{
        background: #0056b3;
    }
    
`;