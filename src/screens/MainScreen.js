import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import {AddTodo} from "../Components/AddTodo";
import {Todo} from "../Components/Todo";

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {

    let content = <FlatList data={todos}
                            renderItem={({item}) => <Todo
                                todo={item}
                                onRemove={removeTodo}
                                onOpen={openTodo}/>}
                            keyExtractor={item => item.id.toString()}/>;
    if(todos.length === 0) {
        content = <View style={styles.imgWrap}>
            <Image source={require('../../assets/empty-product.png')} style={styles.image}/>
        </View>
    }

    return (
        <View>
            <AddTodo addTodo={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
})