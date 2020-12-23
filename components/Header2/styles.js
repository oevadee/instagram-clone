import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderColor: "blue",
    borderWidth: 1,
    marginBottom: 20,
  },
  icon: {
    height: 40,
    width: 60,
    borderColor: "yellow",
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: "blue",
    borderWidth: 1,
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
  },
  headerRight: {
    borderColor: "red",
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 60,
  },
  headerRightText: {
    color: 'rgb(0, 152, 253)',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default styles;
