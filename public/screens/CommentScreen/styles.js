import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  commentContainer: {
    height: 60,
    paddingHorizontal: 20,
    borderTopColor: "rgb(35,35,35)",
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentImage: {
    width: 34,
    height: 34,
    borderRadius: 50,
    marginRight: 10,
  },
  commentTexts: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentTextsUser: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  commentTextsComment: {
    color: "#fff",
  },
  commentAdder: {
    height: 80,
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: '#000'
  },
  commentAdderMiniature: {
    width: 42,
    height: 42,
    borderRadius: 50,
    marginRight: 10,
  },
  commentAdderInputContainer: {
    flex: 1,
    height: 42,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "rgb(35,35,35)",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentAdderInput: {
    color: "#fff",
    flex: 1,
  },
  sendText: {
    color: "rgb(179, 210, 255)",
  },
});

export default styles;
