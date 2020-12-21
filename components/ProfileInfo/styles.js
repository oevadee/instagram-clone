import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  stats: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  statsLogo: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  statsCount: {
    display: "flex",
    alignItems: "center",
  },
  statsCountNumber: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  statsCountName: {
    color: "rgb(132,132,132)",
  },
  bio: {
    paddingHorizontal: 20,
  },
  bioName: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#f5f5f5",
    marginBottom: 10,
  },
  bioDescription: {
    fontSize: 13,
    color: "#f5f5f5",
    marginBottom: 18,
  },
});

export default styles;
