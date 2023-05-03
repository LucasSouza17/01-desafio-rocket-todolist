import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333333",
    backgroundColor: "#262626",
    marginBottom: 12
  },
  radioButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#4EA8DE",
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonSelected: {
    borderWidth: 1,
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE"
  },
  radioButtonIcon: {
    width: 13.49,
    height: 8.67
  },
  todoText: {
    flex: 1,
    marginLeft: 16,
    color: "#F2F2F2",
    fontSize: 16
  },
  buttonIcon: {
    width: 42,
    height: 42
  }
});
