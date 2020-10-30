import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert  } from 'react-native';
import {Navbar} from "./src/Components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {

  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([
    {id:'1', title: 'Выучить React Native'},
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }

    setTodos((prevTodos) => {
      return [
          ...prevTodos,
          newTodo
      ]
    })
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);
    Alert.alert(
        'Удаление элемента',
        `Вы уверены, что хотите удалить ${todo.title}?`,
        [
          {
            text: 'Отмена',
            style: 'cancel'
          },
          { text: 'Удалить',
            onPress: () => {
              setTodoId(null);
              setTodos(prev => {
                return prev.filter((item) => {
                  return item.id !== id;
                });
              });
            }
          }
        ],
        { cancelable: false }
    );
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if(todo.id === id) {
        todo.title = title
      }
      return todo;
    }))
  }


  let content = (
      <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo} openTodo={setTodoId}/>
  );

  if(todoId) {
    const selectedTodo = todos.find(item => item.id === todoId);
    content = <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}/>
  }

  return (
    <View>
      <Navbar title={'Todo app'}/>
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
