import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000000",
    // borderColor: "red",
    // borderWidth: 1,
  },
  emailContainer: {
    marginTop: 30,
    width: '100%',
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  header: {
    color: "#fff",
    fontSize: 27,
    marginBottom: 20,
  },
  nameText: {
    color: "rgb(119, 119, 119)",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: 'center'
  },
  registerInput: {
    width: "100%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "rgb(17, 18, 19)",
    marginBottom: 20,
    padding: 10,
    borderColor: "rgb(20, 22, 23)",
    borderWidth: 1,
    color: "#fff",
  },
  passwordInputOption: {
    borderColor: "rgb(38, 39, 40)",
  },
  nextButton: {
    width: "100%",
    height: 45,
    backgroundColor: "rgb(0, 46, 76)",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  activeNextButton: {
    backgroundColor: 'rgb(0, 152, 253)',
  },
  nextButtonText: {
    color: "rgb(77, 77, 77)",
    fontSize: 14,
    fontWeight: "bold",
  },
  activeNextButtonText: {
    color: '#fff'
  }
});

export default styles;
