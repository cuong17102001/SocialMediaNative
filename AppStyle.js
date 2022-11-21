import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
  app: {
    color: "#242d49",
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',

  },
  blur: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "#a6ddf0",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    // elevation: 3,
    backgroundColor: '#f9822d',
  },
  textButton : {
    color : "white"
  },
  input: {
    height: 40,
    margin: 12,
    width: 250,
    borderWidth: 1,
    borderRadius : 10,
    borderColor : "orange",
    padding: 10,
  },
})

export default AppStyle