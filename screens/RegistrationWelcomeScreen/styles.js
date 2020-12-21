import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000000",
    // borderColor: "red",
    // borderWidth: 1,
  },
  welcomeContainer: {
    marginTop: 30,
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  header: {
    color: "#fff",
    fontSize: 27,
    marginBottom: 20,
    alignItems: "center",
  },
  nameText: {
    color: "rgb(119, 119, 119)",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  nextButtonText: {
    color: "rgb(0, 130, 253)",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10
  },
});

export default styles;
