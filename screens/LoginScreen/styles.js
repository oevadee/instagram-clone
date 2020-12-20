import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  loginLogo: {
    width: "50%",
    height: 100,
    marginBottom: 20,
  },
  loginInput: {
    width: "100%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "rgb(17, 18, 19)",
    marginBottom: 12,
    padding: 10,
    borderColor: "rgb(20, 22, 23)",
    borderWidth: 1,
  },
  passwordInputOption: {
    borderColor: "rgb(38, 39, 40)",
  },
  loginForgotContainer: {
    width: "100%",
    height: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  loginForgot: {
    color: "rgb(0, 145, 232)",
    fontWeight: "bold",
    fontSize: 12,
  },
  loginButton: {
    width: "100%",
    height: 45,
    backgroundColor: "rgb(0, 78, 124)",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "rgb(123, 126, 128)",
    fontSize: 16,
    fontWeight: "bold",
  },
});
/*
  borderColor: 'red',
  borderWidth: 1,
*/
export default styles;
