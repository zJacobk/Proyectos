import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import styles from "./LoginScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../navigation/types";

type props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation, route }: props) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={require("../../../../assets/LoginScreen_topSection.jpeg")}
            style={styles.portada}
          />
        </View>

        <View style={styles.contentSection}>
          <View style={styles.content}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subTitle}>Nos alegra verte de vuelta!</Text>

            <TextInput
              value={correo}
              onChangeText={setCorreo}
              style={styles.input}
              placeholder="Correo electrónico"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                value={contrasena}
                onChangeText={setContrasena}
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={!mostrarContrasena}
              />

              <Pressable
                style={styles.eyeButton}
                onPress={() => {
                  setMostrarContrasena(!mostrarContrasena);
                }}
              >
                <Ionicons
                  name={mostrarContrasena ? "eye-off" : "eye"}
                  size={22}
                  color="gray"
                />
              </Pressable>
            </View>

            <Pressable
              style={styles.forgotPassword}
              onPress={() => {
                console.log("Olvidé mi contraseña");
              }}
            >
              <Text style={styles.forgotPasswordText}>
                ¿Olvidaste tu contraseña?
              </Text>
            </Pressable>

            <Pressable
              style={styles.loginButton}
              onPress={() => {
                console.log("Inicié sesión");
              }}
            >
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </Pressable>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Pressable
                style={styles.registerUser}
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text style={styles.registerUserText}>Crea una cuenta</Text>
              </Pressable>
              <View style={styles.dividerLine} />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
