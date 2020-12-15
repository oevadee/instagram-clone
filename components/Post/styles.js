import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  post: {
    borderTopColor: 'rgb(35,35,35)',
    borderTopWidth: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20
  },
  postHeader: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 3
  },
  postHeaderUser: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  postHeaderUserImage: {
    width: 33,
    height: 33,
    borderRadius: 50,
    marginRight: 10
  },
  postHeaderUserText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  postImageContainer: {
    width: '100%',
    height: '100vw',
    aspectRatio: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  postUtils: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  postUtilsLeft: {
    width: '35%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  postTags: {
    paddingHorizontal: 20,
  },
  postTagsLikes: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  postTagsDescription: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  postTagsUsername: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postTagsDecsctiptionText: {
    color: '#fff',
    fontSize: 14,
  },
  commentsButton: {
    color: "rgb(132,132,132)",
    fontWeight: 'bold'
  }
})

export default styles;