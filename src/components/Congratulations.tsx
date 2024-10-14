import { StyleSheet, View, Image, Text } from "react-native";

import Button from "./Button";

import colors from "../theme/colors";

interface Props {
  onRestart: () => void;
}

const Congratulations = ({ onRestart }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/trophy.png")}
        resizeMode="contain"
      />

      <Text style={styles.headerText}>Congratulations!</Text>

      <Text style={styles.subHeaderText}>
        You've conquered the Spanish skill tree!
      </Text>

      <Button
        containerStyle={styles.button}
        text="Play Again"
        onPress={onRestart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.black,
  },
  image: {
    width: "50%",
    height: 300,
  },
  headerText: {
    color: colors.yellow,
    fontFamily: "quicksand-bold",
    fontSize: 24,
  },
  subHeaderText: {
    color: colors.white,
    fontFamily: "quicksand-regular",
    fontSize: 20,
    marginTop: 8,
  },
  button: {
    marginTop: 40,
    alignSelf: "stretch",
  },
});

export default Congratulations;
