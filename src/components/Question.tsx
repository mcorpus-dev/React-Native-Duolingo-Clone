import { StyleSheet, Text } from "react-native";

import colors from "../theme/colors";

interface Props {
  text: string;
}

const Question = ({ text }: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 24,
    fontFamily: "quicksand-bold",
  },
});

export default Question;
