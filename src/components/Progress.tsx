import { StyleSheet, View } from "react-native";

import colors from "../theme/colors";

interface Props {
  progress: number;
}

const Progress = ({ progress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 24,
    backgroundColor: colors.grey,
    borderRadius: 10,
    overflow: "hidden",
  },
  progress: {
    backgroundColor: colors.darkYellow,
  },
});

export default Progress;
