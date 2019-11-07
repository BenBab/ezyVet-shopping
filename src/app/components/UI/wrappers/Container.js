import React from 'react';
import styled from 'styled-components'

export function Container(props) {
    return (
        <ContainerWrapper 
            textAlign={props.textAlign || 'left'}
            margin={props.margin || 0}
        >
            {props.children}
        </ContainerWrapper>
    );
}

const ContainerWrapper = styled.div`${props => `
    text-align: ${props.textAlign}
    margin: ${props.margin} `}
    
;`