import { Text, View } from "react-native";
import { styles } from "./styles";

type InfoContentProps = {
  maids: number;
  completeds: number;
}

export function InfoContent({completeds, maids}: InfoContentProps) {
  return (
    <View style={styles.infoContent}>
      <View style={styles.containerInfo}>
        <Text style={[styles.counterTitle, { color: "#4EA8DE" }]}>Criadas</Text>
        <View style={styles.counterInfo}>
          <Text style={styles.counterInfoText}>{maids}</Text>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <Text style={[styles.counterTitle, { color: "#8284FA" }]}>Concluídas</Text>
        <View style={styles.counterInfo}>
          <Text style={styles.counterInfoText}>{completeds}</Text>
        </View>
      </View>
    </View>
  );
}
