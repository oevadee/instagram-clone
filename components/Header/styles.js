import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 16,
  },
  userName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userNameText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;