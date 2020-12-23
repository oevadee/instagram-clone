import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
    flex: 1,
    display: "flex",
  },
  addDescription: {
    height: 100,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgb(35,35,35)',
    borderWidth: 1
  },
  addDescriptionImage: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  addDescriptionInput: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
    height: '100%',
    color: '#fff',
    paddingHorizontal: 10,
  }
});

export default styles;
