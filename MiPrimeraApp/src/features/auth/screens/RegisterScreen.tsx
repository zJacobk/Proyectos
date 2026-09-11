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
import styles from "./RegisterScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../navigation/types";

type props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation, route }: props) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={require("../../../../assets/RegisterScreen.jpeg")}
            style={styles.portada}
          />
        </View>

        <View style={styles.contentSection}>
          <View style={styles.content}>
            <Text style={styles.title}>Registrate</Text>
            <Text style={styles.subTitle}>Bienvenido nuevo aventurero!</Text>

            <TextInput
              value={nombre}
              onChangeText={setNombre}
              style={styles.input}
              placeholder="Ingresa tu nombre"
            />
            <TextInput
              value={apellido}
              onChangeText={setApellido}
              style={styles.input}
              placeholder="Ingresa tu apellido paterno"
            />
            <TextInput
              value={correo}
              onChangeText={setCorreo}
              style={styles.input}
              placeholder="Ingresa tu correo personal"
            />

            <View style={styles.passwordContainer}>
              <TextInput
                value={contrasena}
                onChangeText={setContrasena}
                style={styles.input}
                placeholder="Crea una contraseña"
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
              style={styles.loginButton}
              onPress={() => {
                console.log("Inicié sesión");
              }}
            >
              <Text style={styles.loginButtonText}>Registrarme</Text>
            </Pressable>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Pressable
                style={styles.registerUser}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.registerUserText}>Ya tengo una cuenta</Text>
              </Pressable>
              <View style={styles.dividerLine} />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
