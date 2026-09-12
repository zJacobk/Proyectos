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
import styles from "./ForgotPasswordScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../navigation/types";

type props = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;

export default function ForgotPasswordScreen({ navigation, route }: props) {
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
            <Text style={styles.title}>Recupera tu contraseña</Text>
            <Text style={styles.subTitle}>
              ¡Hola, aventurero! Ingresa tu correo para enviarte un código de
              recuperación.
            </Text>

            <TextInput
              value={correo}
              onChangeText={setCorreo}
              style={styles.input}
              placeholder="Ingresa tu correo"
            />

            <Pressable
              style={styles.sendCodeButton}
              onPress={() => {
                //
              }}
            >
              <Text style={styles.loginButtonText}>Mandar codigo</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
