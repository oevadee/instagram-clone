import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: '100%',
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
    fontWeight: 'bold',
    marginBottom: 3
  },
  headerInfoPosts: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default styles;
