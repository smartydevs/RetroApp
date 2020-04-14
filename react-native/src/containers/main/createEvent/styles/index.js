import { StyleSheet } from 'react-native'
import { Colors } from '../../../../themes'
import Metrics, { normalizeHeight, normalizeWidth } from '../../../../themes/Metrics'

<<<<<<< HEAD

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    flex: 1
=======
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
>>>>>>> a3112992f61c9588ea55ab6aa78638bdef889d1c
  },
  lightGrayContainer: {
    backgroundColor: Colors.lightGray,
  },
  image: {
    flex: 1,
    height: normalizeHeight(200),
    zIndex: 500,
<<<<<<< HEAD
    backgroundColor: Colors.white
=======
    backgroundColor: Colors.white,
>>>>>>> a3112992f61c9588ea55ab6aa78638bdef889d1c
  },
  overlay: {
    flex: 1,
    backgroundColor: `${Colors.primaryDark}80`,
<<<<<<< HEAD
    padding: normalizeWidth(24)
=======
    padding: normalizeWidth(24),
>>>>>>> a3112992f61c9588ea55ab6aa78638bdef889d1c
  },
  separator: {
    width: '100%',
    borderBottomColor: Colors.gray,
    borderBottomWidth: normalizeHeight(4),
<<<<<<< HEAD
    zIndex: 500
=======
    zIndex: 500,
>>>>>>> a3112992f61c9588ea55ab6aa78638bdef889d1c
  },
  padding: {
    padding: normalizeHeight(24),
  },
  icon: {
    backgroundColor: Colors.primaryDark,
    height: normalizeHeight(40),
    width: normalizeHeight(40),
    borderRadius: normalizeHeight(20),
<<<<<<< HEAD
    marginRight: normalizeHeight(20)
=======
    marginRight: normalizeHeight(20),
>>>>>>> a3112992f61c9588ea55ab6aa78638bdef889d1c
  },
  profilePicture: {
    width: normalizeWidth(40),
    height: normalizeWidth(40),
    borderRadius: normalizeWidth(20),
    borderWidth: normalizeWidth(2),
    borderColor: Colors.gray,
    marginRight: Metrics.margin,
  },
  participant: {
    marginVertical: normalizeHeight(10),
    alignItems: 'center',
<<<<<<< HEAD
    width: normalizeHeight(160)
=======
    width: normalizeHeight(160),
>>>>>>> a3112992f61c9588ea55ab6aa78638bdef889d1c
  },
  organiser: {
    width: normalizeWidth(50),
    height: normalizeWidth(50),
<<<<<<< HEAD
    borderRadius: normalizeHeight(25)
=======
    borderRadius: normalizeHeight(25),
>>>>>>> a3112992f61c9588ea55ab6aa78638bdef889d1c
  },
  descriptionInput: {
    height: normalizeHeight(180),
  },
  label: {
<<<<<<< HEAD
    marginBottom: normalizeHeight(10)
  },
  button: {
    backgroundColor: Colors.primaryPink,
    marginTop: normalizeHeight(20)
  },
  createEventButton: {
    backgroundColor: Colors.primaryDark
  }
=======
    marginBottom: normalizeHeight(10),
  },
  button: {
    backgroundColor: Colors.primaryPink,
    marginTop: normalizeHeight(20),
  },
>>>>>>> a3112992f61c9588ea55ab6aa78638bdef889d1c
})

export default styles
