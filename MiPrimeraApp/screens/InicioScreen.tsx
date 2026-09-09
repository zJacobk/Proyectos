import { Image, Text, View } from "react-native";

import styles from "../styles";

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo_prueba.png")}
        style={styles.logo}
      />
      <Text style={styles.titulo}>VERANO AVENTURA</Text>
    </View>
  );
}
