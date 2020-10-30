import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from "react-native";
import {THEME} from "../theme";

export const AddTodo = (props) => {

    const [value, setValue] = useState('');

    const pressHandler = () => {
        if(value.trim()) {
            props.addTodo(value);
            setValue('');
        } else {
            Alert.alert('Error','Название дела не может быть пустым')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setValue(text)}
                value={value}
                placeholder={'введите название дела...'}
            />
            <Button title={"Добавить"} onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    }
});