import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
    flex: 1,
    display: "flex",
  },
  addImageContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  chosenImageContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chosenImage: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  nextButton: {
    width: "100%",
    height: 45,
    backgroundColor: 'rgb(0, 152, 253)',
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
