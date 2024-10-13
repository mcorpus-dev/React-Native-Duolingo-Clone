import { useState } from "react";
import { StyleSheet, Image, View, Text, TextInput } from "react-native";

import Question from "./Question";
import Button from "./Button";

import IOpenEnded from "../types/IOpenEnded";

import colors from "../theme/colors";

interface Props {
  question: IOpenEnded;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const OpenEnded = ({ question, onCorrect, onIncorrect }: Props) => {
  const [answer, setAnswer] = useState("");

  const handleCheck = () => {
    if (answer.trim().toLowerCase() === question.answer.toLowerCase()) {
      onCorrect();
    } else {
      onIncorrect();
    }

    setAnswer("");
  };

  return (
    <>
      <Question text="Translate this sentence" />

      <View style={styles.container}>
        <View style={styles.row}>
          <Image
            style={styles.mascot}
            source={require("../../assets/images/mascot.png")}
            resizeMode="contain"
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>{question.text}</Text>
          </View>
        </View>

        <TextInput
          style={styles.textInput}
          value={answer}
          onChangeText={setAnswer}
          placeholder="Type in English"
          placeholderTextColor={colors.white}
          multiline
          textAlignVertical="top"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
        />
      </View>

      <Button text="Check" disabled={!answer.trim()} onPress={handleCheck} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
  mascot: {
    width: "30%",
    aspectRatio: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    padding: 12,
    backgroundColor: colors.black,
    borderColor: colors.darkGrey,
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontFamily: "quicksand-semibold",
    fontSize: 20,
  },
  textInput: {
    flex: 1,
    borderColor: colors.green,
    borderWidth: 2,
    borderRadius: 10,
    color: colors.white,
    fontFamily: "quicksand-regular",
    fontSize: 18,
    padding: 12,
  },
});

export default OpenEnded;
