import { StyleSheet, Text, View, Image } from "react-native";

import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemeText from "../components/ThemeText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemeText style={styles.title} title={true}>
        The Number 1
      </ThemeText>
      <Spacer height={10} />
      <ThemeText>Reading List App</ThemeText>
      <Spacer />
      {/* 
      <View style={styles.card}>
        <Text>Hello, this is a card.</Text>
      </View> */}

      <Link style={styles.link} href="/login">
        <ThemeText>LogIn Page</ThemeText>
      </Link>
      <Link style={styles.link} href="/register">
        <ThemeText>Register Page</ThemeText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemeText>Profile</ThemeText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0, 0, 0, 0.1)",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
