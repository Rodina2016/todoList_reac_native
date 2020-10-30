import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {THEME} from '../theme';
import {AppCard} from "../Components/UI/AppCard";
import {EditModal} from "../Components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {

    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    }


    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}/>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Ред.' onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={'Back'} onPress={goBack} color={THEME.GRAY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button
                        color={THEME.DANGER_COLOR}
                        title={'Remove'}
                        onPress={() => onRemove(todo.id)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        padding: 15,
        marginBottom: 20,
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})