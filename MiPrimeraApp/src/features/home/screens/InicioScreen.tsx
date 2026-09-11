import { Image, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../navigation/types";
import { useEffect } from "react";

type props = NativeStackScreenProps<RootStackParamList, "Inicio">;

import styles from "./InicioScreen.styles";

export default function InicioScreen({ navigation }: props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); //si usamos navigate el usuario podria regresar y eso no queremos
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/Logo.jpeg")}
        style={styles.logo}
      />
    </View>
  );
}
