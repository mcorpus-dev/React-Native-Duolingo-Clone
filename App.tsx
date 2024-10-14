import { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ScreenWrapper from "./src/components/ScreenWrapper";
import Header from "./src/components/Header";
import MultipleChoice from "./src/components/MultipleChoice";
import OpenEnded from "./src/components/OpenEnded";
import Result from "./src/components/Result";

import IMultipleChoice from "./src/types/IMultipleChoice";
import IOpenEnded from "./src/types/IOpenEnded";

import questions from "./src/data/questions.json";

const INITIAL_HEALTH = 5;

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [health, setHealth] = useState(INITIAL_HEALTH);
  const [questionIndex, setQuestionIndex] = useState(0);

  const progress = ((questionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    const handleLoadData = async () => {
      const _health = await AsyncStorage.getItem("health");
      const _questionIndex = await AsyncStorage.getItem("questionIndex");

      if (_health) setHealth(Number(_health));
      if (_questionIndex) setQuestionIndex(Number(_questionIndex));

      setIsLoaded(true);
    };

    handleLoadData();
  }, []);

  useEffect(() => {
    const handleSaveData = async () => {
      await AsyncStorage.setItem("health", String(health));
      await AsyncStorage.setItem("questionIndex", String(questionIndex));
    };

    if (isLoaded) {
      handleSaveData();
    }
  }, [isLoaded, health, questionIndex]);

  const handleCorrect = () =>
    setQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);

  const handleIncorrect = () => {
    setHealth((currentHealth) => currentHealth - 1);

    if (health - 1 > 0 && health - 1 < INITIAL_HEALTH) {
      Alert.alert("Sorry!", "Incorrect answer.");
    }
  };

  const handleRestart = () => {
    setHealth(5);
    setQuestionIndex(0);
  };

  if (questionIndex === questions.length || health === 0) {
    return (
      <Result
        isWinner={questionIndex === questions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <ScreenWrapper>
      <Header progress={progress} health={health} />

      {questions[questionIndex].type === "MULTIPLE_CHOICE" && (
        <MultipleChoice
          question={questions[questionIndex] as IMultipleChoice}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
        />
      )}

      {questions[questionIndex].type === "OPEN_ENDED" && (
        <OpenEnded
          question={questions[questionIndex] as IOpenEnded}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
        />
      )}
    </ScreenWrapper>
  );
}
