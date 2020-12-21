import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  story: {
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  storyThumbnailCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: "rgb(75,75,75)",
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  storyThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  storyText: {
    color: "rgb(75,75,75)",
    fontSize: 12
  },
})

export default styles;