import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingTop: StatusBar.currentHeight  ? StatusBar.currentHeight + 24 : 48
  },
  logo: {
    alignSelf: "center",
    marginTop: 28,
    width: 110,
    height: 32,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 42,
    marginBottom: -24,
    zIndex: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 56,
    borderRadius: 5,
    padding: 16,
    marginRight: 8,
    color: "#F2F2F2"
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
  },
  buttonIcon: {
    width: 18,
    height: 18,
  },
  content: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#333333",
    marginTop: 20,
    marginBottom: 20,
  },
  containerEmpty: {
    alignItems: "center",
    marginTop: 20
  },
  clipboardIcon: {
    width: 72,
    height: 72,
  },
  titleEmpty: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 16,
    color: "#808080",
    textAlign: "center"
  },
  subtitleEmpty: {
    fontSize: 16,
    color: "#808080",
    fontWeight: "200",
    marginTop: 2,
    textAlign: "center"
  }
});
