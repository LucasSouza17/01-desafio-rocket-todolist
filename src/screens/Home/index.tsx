import { useState } from "react";
import { Alert, FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

import Logo from "../../assets/logo.png";
import PlusIcon from "../../assets/plus.png";
import ClipBoardIcon from "../../assets/clipboard.png";
import { InfoContent } from "../../components/InfoContent";
import { ToDo } from "../../components/ToDo";

import { styles } from "./styles";

export function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<{ id: number; todo: string; isCompleted: boolean }[]>([]);

  function handleCreateTodo() {
    if(todo !== "") {
      setTodoList((prevState) => [...prevState, { id: todoList.length + 1, todo: todo, isCompleted: false }]);
      setTodo("");
    } else {
      return Alert.alert("Ops...", "Parece que você não digitou nenhuma tarefa.")
    }
  }

  function handleRemoveTodo(id: number) {
    return Alert.alert("Remover Tarefa", "Deseja realmente remover essa tarefa da lista de ToDo's?", [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => setTodoList((prevState) => prevState.filter((item) => item.id !== id))
      }
    ])
  }

  function handleCompletedTodo(index: number) {
    const newTodoList = todoList;
    if (newTodoList[index].isCompleted === false) {
      newTodoList[index].isCompleted = true;
    } else {
      newTodoList[index].isCompleted = false;
    }
    return setTodoList([...newTodoList]);
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.input}
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleCreateTodo}>
          <Image source={PlusIcon} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <InfoContent maids={todoList.length} completeds={todoList.filter(item => item.isCompleted).length} />

        <View style={styles.divider} />

        <FlatList
          data={todoList}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 48}}
          ListEmptyComponent={() => (
            <View style={styles.containerEmpty}>
              <Image source={ClipBoardIcon} style={styles.clipboardIcon} />
              <Text style={styles.titleEmpty}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.subtitleEmpty}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
          renderItem={({ item, index }) => (
            <ToDo
              handleComplete={() => handleCompletedTodo(index)}
              handleRemove={() => handleRemoveTodo(item.id)}
              isCompleted={item.isCompleted}
              todoText={item.todo}
            />
          )}
        />
      </View>
    </View>
  );
}
