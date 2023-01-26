import React from 'react';
import { Text } from 'react-native';
import styled from "styled-components";


const ListaItemSwipe = styled.TouchableHighlight`
    width:100%;
    height:50px;
    background-color:'#FF0000';
    justify-content:center;
`;

const ListaItemIcom = styled.View`
    width:20px;
    height:20px;
    margin-left:15px;

`;

export default (props) =>{
    return(
        <ListaItemSwipe onPress={props.onDelete} underlayColor='#FF3333'>
            <ListaItemIcom><Text>X</Text></ListaItemIcom>
        </ListaItemSwipe>
    );
}