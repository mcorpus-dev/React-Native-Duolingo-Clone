import { StyleSheet, View, Image, Text } from "react-native";

import ScreenWrapper from "./ScreenWrapper";
import Button from "./Button";

import colors from "../theme/colors";

interface Props {
  isWinner: boolean;
  onRestart: () => void;
}

const Congratulations = ({ isWinner, onRestart }: Props) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={
            isWinner
              ? require("../../assets/images/winner.png")
              : require("../../assets/images/loser.png")
          }
          resizeMode="contain"
        />

        <Text style={[styles.headerText, isWinner && styles.winnerHeaderText]}>
          {isWinner ? "Congratulations!" : "Game Over!"}
        </Text>

        <Text style={styles.subHeaderText}>
          {isWinner
            ? "You've conquered the spanish skill tree."
            : "Your journey ends here… for now."}
        </Text>

        <Button
          containerStyle={styles.button}
          text={isWinner ? "Play Again" : "Restart Game"}
          onPress={onRestart}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  image: {
    width: "50%",
    height: 300,
  },
  headerText: {
    color: colors.red,
    fontFamily: "quicksand-bold",
    fontSize: 24,
  },
  winnerHeaderText: {
    color: colors.yellow,
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
