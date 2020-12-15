import { StyleSheet } from 'react-native';

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
    borderTopColor: 'rgb(35,35,35)',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentImage: {
    width: 34,
    height: 34,
    borderRadius: 50,
    marginRight: 10
  },
  commentTexts: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentTextsUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  commentTextsComment: {
    color: '#fff'
  }
})

export default styles;