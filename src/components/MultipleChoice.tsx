import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Question from "./Question";
import MultipleChoiceOption from "./MultipleChoiceOption";
import Button from "./Button";

import IMultipleChoice from "../types/IMultipleChoice";
import IMultipleChoiceOption from "../types/IMultipleChoiceOption";

interface Props {
  question: IMultipleChoice;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const MultipleChoice = ({ question, onCorrect, onIncorrect }: Props) => {
  const [selectedOption, setSelectedOption] =
    useState<null | IMultipleChoiceOption>(null);

  const handlePress = (option: IMultipleChoiceOption) => {
    setSelectedOption(option.id === selectedOption?.id ? null : option);
  };

  const handleCheck = () => {
    if (selectedOption?.isCorrect) {
      onCorrect();
    } else {
      onIncorrect();
    }

    setSelectedOption(null);
  };

  return (
    <>
      <Question text={question.question} />

      <View style={styles.container}>
        {question.options.map((option) => (
          <MultipleChoiceOption
            key={option.id}
            {...option}
            selected={option.id === selectedOption?.id}
            onPress={() => handlePress(option)}
          />
        ))}
      </View>

      <Button text="Check" disabled={!selectedOption} onPress={handleCheck} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    marginVertical: 20,
  },
});

export default MultipleChoice;
