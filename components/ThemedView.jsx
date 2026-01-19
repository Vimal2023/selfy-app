import {useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedView = ({ style, ...props }) => {
  const colorscheme = useColorScheme();
  const theme = Colors[colorscheme] ?? Colors.light;
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;
