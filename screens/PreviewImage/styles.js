import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 1,
  },
  goBackIcon: {
    position: "absolute",
    left: 20,
  },
  headerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerInfoUser: {
    fontSize: 12,
    color: "rgb(132,132,132)",
    fontWeight: 'bold'
  },
  headerInfoPosts: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default styles;
