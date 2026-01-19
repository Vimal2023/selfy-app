import {useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";

const ThemeText = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;

  const textColor = title ? theme.textTitle : theme.text;
  return <View style={[{ color: textColor }, style]} {...props} />;
};

export default ThemeText;
