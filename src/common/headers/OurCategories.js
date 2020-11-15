import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    color: #000;
`;

const Content = () => (
    <>
        <Title>Our Categories</Title>

        <p style={{ cursor: 'pointer' }}>See All</p>
    </>

);

export default Content;
