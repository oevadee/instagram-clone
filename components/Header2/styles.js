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
    marginBottom: 20,
  },
  icon: {
    height: 40,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
