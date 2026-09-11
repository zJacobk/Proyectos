import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F2",
  },

  topSection: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#fdd5bc",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  portada: {
    width: 450,
    height: 400,
    resizeMode: "cover",
  },

  contentSection: {
    flex: 2,
    width: "100%",
    backgroundColor: "#FFF7F2",
  },

  content: {
    flex: 1,
    width: "75%",
    alignSelf: "center",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 16,
    color: "#060606",
  },

  subTitle: {
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 28,
    color: "#080808",
  },

  input: {
    width: "100%",
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#FFF7F3",
    paddingHorizontal: 15,
    marginBottom: 14,
  },
  passwordContainer: {
    width: "100%",
    position: "relative",
  },
  eyeButton: {
    position: "absolute",
    right: 12,
    top: 14,
  },

  forgotPassword: {
    alignSelf: "flex-start",
    marginTop: 6,
  },

  forgotPasswordText: {
    color: "#F4511E",
    fontSize: 14,
    fontWeight: "600",
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#F4511E",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  divider: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 40,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#000000",
  },

  registerUser: {},

  registerUserText: {
    color: "#080808",
    fontSize: 14,
    fontWeight: "600",
    marginHorizontal: 12,
  },
  keyboardContainer: {
    flex: 1,
  },
});

export default styles;
