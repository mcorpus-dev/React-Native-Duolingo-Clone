import { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  View,
  Text,
  TextInput,
} from "react-native";

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
  const [isTextInputFocus, setIsTextInputFocus] = useState(false);
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={12}
    >
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
          style={[
            styles.textInput,
            isTextInputFocus && styles.focusedTextInput,
          ]}
          value={answer}
          onChangeText={setAnswer}
          onFocus={() => setIsTextInputFocus(true)}
          onBlur={() => setIsTextInputFocus(false)}
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
    </KeyboardAvoidingView>
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
    borderColor: colors.darkGrey,
    borderWidth: 2,
    borderRadius: 10,
    color: colors.white,
    fontFamily: "quicksand-regular",
    fontSize: 18,
    padding: 12,
  },
  focusedTextInput: {
    borderColor: colors.green,
  },
});

export default OpenEnded;
