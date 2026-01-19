import {StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedCard = ({ style, ...props }) => {
  const colorscheme = useColorScheme();
  const theme = Colors[colorscheme] ?? Colors.light;
  return (
    <View style={[{ backgroundColor: theme.background },styles.card, style]} {...props} />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
    card:{
        borderRadius: 5,
        padding: 20,
    }
});
