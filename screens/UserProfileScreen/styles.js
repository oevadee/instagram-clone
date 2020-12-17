import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  bioButton: {
    width: "100%",
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgb(48, 48, 48)",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5
  },
  bioButtonText: {
    color: "#f5f5f5",
    fontWeight: "bold",
  },
  gallery: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  galleryViewChooser: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  galleryViewChooserCategory: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  galleryView: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

export default styles;
