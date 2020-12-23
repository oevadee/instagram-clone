import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
    flex: 1,
    display: "flex",
  },
  addDescription: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgb(35,35,35)',
    borderWidth: 1
  },
  addDescriptionImage: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  addDescriptionInput: {
    flex: 1,
    height: '100%',
    color: '#fff',
    paddingVertical: 5,
  },
  addDescriptionText: {
    color: '#fff',
    fontSize: 18,
  },
  addDescriptionSocialContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: 'rgb(35,35,35)',
    borderWidth: 1,
  },
  addDescriptionSocials: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40
  }
});

export default styles;
