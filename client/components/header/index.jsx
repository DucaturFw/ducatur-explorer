import React from "react";

import styled from 'styled-components';

import Container from './../elements/container';

 export default class Header extends React.Component {
    render() {
        return (
            <Wrap>
                <Container>
                    <Inner>
                        <Name>
                            <h3>DUCATUR EXPLORER</h3>
                        </Name>
                        <Acc>
                            ETH TOKEN : DUCAT
                        </Acc>
                    </Inner>
                </Container>
            </Wrap>
        )
    }
}



const Wrap = styled.div`
    background-color: #262626;
    color: white;
    font-size: 16px;
    height: 40px;
`;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
`;

const Name = styled.div``;
const Acc = styled.div``;
