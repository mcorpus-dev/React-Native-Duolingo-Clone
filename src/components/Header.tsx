import { StyleSheet, View, Image, Text } from "react-native";

import Progress from "./Progress";

import colors from "../theme/colors";

interface Props {
  progress: number;
  health: number;
}

const Header = ({ progress, health }: Props) => {
  return (
    <View style={styles.container}>
      <Progress progress={progress} />

      <Image
        style={styles.heartIcon}
        source={require("../../assets/images/heart.png")}
        resizeMode="contain"
      />

      <Text style={styles.health}>{health}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  health: {
    color: colors.red,
    fontFamily: "quicksand-bold",
    fontSize: 20,
  },
});

export default Header;
