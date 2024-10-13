import { ReactNode, useEffect } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import colors from "../theme/colors";

interface Props {
  children: ReactNode;
}

SplashScreen.preventAutoHideAsync();

const ScreenWrapper = ({ children }: Props) => {
  const [loaded, error] = useFonts({
    "quicksand-regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
    "quicksand-semibold": require("../../assets/fonts/Quicksand-SemiBold.ttf"),
    "quicksand-bold": require("../../assets/fonts/Quicksand-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.black,
  },
});

export default ScreenWrapper;
