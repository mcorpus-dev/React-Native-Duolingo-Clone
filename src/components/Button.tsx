import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";

import colors from "../theme/colors";
interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  text: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button = ({ containerStyle, text, disabled, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        disabled && styles.disabledContainer,
        containerStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    padding: 10,
    borderRadius: 10,
    borderBottomWidth: 4,
    borderBottomColor: colors.darkGreen,
  },
  disabledContainer: {
    backgroundColor: colors.grey,
    borderBottomColor: colors.darkGrey,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "quicksand-bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  disabledText: {
    color: colors.white,
  },
});

export default Button;
