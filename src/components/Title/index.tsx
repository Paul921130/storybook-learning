
import React from 'react';
import styled from 'styled-components';
// Create a Title component that'll render an <h1> tag with some styles
const StyTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const StyWrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Title = () => {
    return (
        <StyWrapper>
            <StyTitle>
                Hello World!
            </StyTitle>
        </StyWrapper>
    )
}
