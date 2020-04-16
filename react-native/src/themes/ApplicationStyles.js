import { Fonts, Metrics, Colors } from '.'
import { normalizeHeight, normalizeWidth } from './Metrics'
import { ButtonStyles, InputStyles } from './Styles'

const ApplicationStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.dark
  },
  space: {
    flex: 1
  },
  padding: {
    paddingHorizontal: Metrics.defaultPadding
  },
  justifyEvenly: {
    justifyContent: 'space-evenly'
  },
  touchableText: {
    width: undefined,
    height: undefined,
    backgroundColor: Colors.transparent
  },
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.dark
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      padding: Metrics.defaultPadding
    }
  },
  maxWidth: {
    width: '100%'
  },
  alignCenter: {
    alignItems: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  smallText: {
    fontSize: Fonts.size.medium,
    color: Colors.white
  },
  navigation: {
    header: {
      backgroundColor: Colors.black
    }
  },
  buttons: {
    ...ButtonStyles
  },
  forms: {
    ...InputStyles
  },
  profileContainer: {
    borderWidth: 2,
    borderColor: Colors.black,
    height: Metrics.profilePicture,
    width: Metrics.profilePicture,
    backgroundColor: Colors.black,
    borderRadius: Metrics.profilePicture / 2
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottom: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  marginVertical: {
    marginVertical: Metrics.margin
  },
  loadingContainer: {
    width: '100%',
    height: normalizeHeight(100)
  },
  row: {
    flexDirection: 'row'
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5
  }
}

export default ApplicationStyles
