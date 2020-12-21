import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 8,
  },
  headerLogo: {
    width: 120,
    height: 40
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