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
    borderColor: "red",
    borderWidth: 1,
  },
  addImageContainer: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 1,
  },
  camera: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  cameraSafeContainer: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  orientationButton: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    // borderColor: 'blue',
    // borderWidth: 2,
  },
  pictureButton: {
    // borderColor: 'yellow',
    // borderWidth: 2,
    alignSelf: "center",
    marginBottom: 20,
  },
  previewContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    right: 0,
  },
  closeButton: {
    // borderColor: 'purple',
    // borderWidth: 2,
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
    marginRight: 20,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default styles;
