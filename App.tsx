import { useState } from "react";
import { Alert } from "react-native";

import ScreenWrapper from "./src/components/ScreenWrapper";
import MultipleChoice from "./src/components/MultipleChoice";

import IMultipleChoice from "./src/types/IMultipleChoice";

import questions from "./src/data/questions.json";

export default function App() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleCorrect = () => {
    setQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  };

  const handleIncorrect = () => {
    Alert.alert("Sorry", "Answer is incorrect.");
  };

  return (
    <ScreenWrapper>
      {questions[questionIndex].type === "IMAGE_MULTIPLE_CHOICE" && (
        <MultipleChoice
          question={questions[questionIndex] as IMultipleChoice}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
        />
      )}
    </ScreenWrapper>
  );
}
