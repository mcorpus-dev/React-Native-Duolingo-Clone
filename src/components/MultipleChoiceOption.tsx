import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";

import colors from "../theme/colors";

interface Props {
  image: string;
  text: string;
  selected: boolean;
  onPress: () => void;
}

const MultipleChoiceOption = ({ image, text, selected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selectedContainer]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image
        style={styles.image}
        source={{ uri: image }}
        resizeMode="contain"
      />
      <Text style={[styles.text, selected && styles.selectedText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "48%",
    height: "48%",
    padding: 12,
    backgroundColor: colors.black,
    borderColor: colors.darkGrey,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 10,
  },
  selectedContainer: {
    borderColor: colors.green,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  text: {
    color: colors.white,
    fontFamily: "quicksand-semibold",
    fontSize: 20,
  },
  selectedText: {
    color: colors.green,
  },
});

export default MultipleChoiceOption;
