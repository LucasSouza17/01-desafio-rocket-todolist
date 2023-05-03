import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  infoContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerInfo: {
    flexDirection: "row",
    gap: 8,
  },
  counterInfo: {
    backgroundColor: "#333333",
    borderRadius: 100,
    paddingVertical: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  counterTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  counterInfoText: {
    color: "#D9D9D9",
    fontWeight: "bold",
    fontSize: 14,
  },
});
