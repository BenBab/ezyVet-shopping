import React from 'react';
import styled from 'styled-components'

export function Flex(props) {
    return (
        <FlexBox 
            justifyContent={props.justifyContent || 'initial'}
            alighItems={props.alighItems || 'center'}
            margin={props.margin || 0}
            width={props.width || 'auto'}
        >
            {props.children}
        </FlexBox>
    );
}

const FlexBox = styled.div`${props => `
    justify-content: ${props.justifyContent}
    align-items: ${props.alighItems}
    margin: ${props.margin} 
    width: ${props.width}`}
    
    display: flex;
;`