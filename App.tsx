import { useState, useEffect } from "react";
import { Alert } from "react-native";

import ScreenWrapper from "./src/components/ScreenWrapper";
import Header from "./src/components/Header";
import MultipleChoice from "./src/components/MultipleChoice";
import OpenEnded from "./src/components/OpenEnded";

import IMultipleChoice from "./src/types/IMultipleChoice";
import IOpenEnded from "./src/types/IOpenEnded";

import questions from "./src/data/questions.json";

export default function App() {
  const [health, setHealth] = useState(5);
  const [questionIndex, setQuestionIndex] = useState(0);

  const progress = ((questionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (health === 0) {
      endGame("You Lose!");
    }
  }, [health]);

  useEffect(() => {
    if (questionIndex === questions.length) {
      endGame("You Won!");
    }
  }, [questionIndex]);

  const handleCorrect = () => {
    setQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  };

  const handleIncorrect = () => {
    setHealth((currentHealth) => currentHealth - 1);
  };

  const restartGame = () => {
    setHealth(5);
    setQuestionIndex(0);
  };

  const endGame = (title: string) => {
    Alert.alert(title, "Please restart the game.", [
      { text: "OK", onPress: restartGame },
    ]);
  };

  return (
    <ScreenWrapper>
      <Header progress={progress} health={health} />

      {questions[questionIndex] &&
        questions[questionIndex].type === "MULTIPLE_CHOICE" && (
          <MultipleChoice
            question={questions[questionIndex] as IMultipleChoice}
            onCorrect={handleCorrect}
            onIncorrect={handleIncorrect}
          />
        )}

      {questions[questionIndex] &&
        questions[questionIndex].type === "OPEN_ENDED" && (
          <OpenEnded
            question={questions[questionIndex] as IOpenEnded}
            onCorrect={handleCorrect}
            onIncorrect={handleIncorrect}
          />
        )}
    </ScreenWrapper>
  );
}
