import React, {useState} from 'react';
import styled from "styled-components";


const AddItemArea = styled.View`
    padding:10px;
    background-color: #CCC;
`;

const AddItemInput = styled.TextInput`
    background-color: #FFF;
    font-size:15px;
    height:50px;
    border-radius:5px; 
    padding: 10px;
    margin-top:30px;
`;

export default (props) => {
    const [item, setItem] = useState("");

    const handleSubmit =()=>{
        if(item.trim() != ''){
            props.onAdd(item.trim());
        }
        setItem('');
    }

    return(
        <AddItemArea>
            <AddItemInput 
                placeholder="Digite um novo item" 
                value={item}
                onChangeText={e=>setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </AddItemArea>
    );
}