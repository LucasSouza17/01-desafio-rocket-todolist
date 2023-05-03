import { Image, Text, TouchableOpacity, View } from "react-native";
import CheckIcon from "../../assets/check.png";
import TrashIcon from "../../assets/trash.png";
import { styles } from "./styles";

type ToDoProps = {
  isCompleted: boolean;
  todoText: string;
  handleRemove(): void;
  handleComplete(): void;
};

export function ToDo({ handleComplete, handleRemove, isCompleted, todoText }: ToDoProps) {
  return (
    <View style={[styles.container, isCompleted && { borderColor: "transparent" }]}>
      <TouchableOpacity
        style={[styles.radioButton, isCompleted && styles.radioButtonSelected]}
        onPress={handleComplete}
        activeOpacity={0.5}
      >
        {isCompleted && <Image source={CheckIcon} style={styles.radioButtonIcon} />}
      </TouchableOpacity>
      <Text
        style={[styles.todoText, isCompleted && { textDecorationLine: "line-through", color: "#808080" }]}
      >
        {todoText}
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={handleRemove}>
        <Image source={TrashIcon} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}
