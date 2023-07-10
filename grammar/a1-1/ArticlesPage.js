import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const NounsPage = () => {
  return (
    <ScrollView style={styles.container}>
      {/*<Image*/}
      {/*  source={require('./assets/german_nouns.png')}*/}
      {/*  style={styles.bannerImage}*/}
      {/*  resizeMode="cover"*/}
      {/*/>*/}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Articles in German</Text>
        <Text style={styles.paragraph}>In German language, every noun is assigned a gender and it has a corresponding article that changes depending on the gender, number and case of the noun. There are three genders in German language: masculine, feminine, and neuter. German articles are divided into definite articles (der, die, das) and indefinite articles (ein, eine).</Text>

        <Text style={styles.subTitle}>Definite Articles</Text>
        <Text>Definite articles are used to refer to a specific noun. In German, the definite articles are:</Text>
        <Text>- Der - masculine singular</Text>
        <Text>- Die - feminine singular</Text>
        <Text>- Das - neuter singular</Text>
        <Text>- Die - plural (masculine, feminine and neuter)</Text>

        <Text h4>Examples:</Text>
        <Text>- Der Hund (the dog)</Text>
        <Text>- Die Katze (the cat)</Text>
        <Text>- Das Haus (the house)</Text>
        <Text>- Die Bücher (the books)</Text>

        <Text h3>Indefinite Articles</Text>
        <Text>Indefinite articles are used to refer to an unspecified noun. In German, the indefinite articles are:</Text>
        <Text>- Ein - masculine and neuter singular</Text>
        <Text>- Eine - feminine singular</Text>
        <Text>- Kein - negative article used with all genders and numbers</Text>

        <Text h4>Examples:</Text>
        <Text>- Ein Hund (a dog)</Text>
        <Text>- Eine Katze (a cat)</Text>
        <Text>- Kein Haus (no house)</Text>
        <Text>- Keine Bücher (no books)</Text>
      </View>
      {/*<View style={styles.contentContainer}>*/}
      {/*  <Text style={styles.title}>Articles in German</Text>*/}
      {/*  <Text style={styles.paragraph}>*/}
      {/*    In German language, every noun is assigned a gender and it has a corresponding article that changes depending on the gender, number and case of the noun. There are three genders in German language: masculine, feminine, and neuter. German articles are divided into definite articles (der, die, das) and indefinite articles (ein, eine).*/}
      {/*  </Text>*/}
      {/*  <Text style={styles.subTitle}>Gender of Nouns</Text>*/}
      {/*  <Text style={styles.paragraph}>*/}
      {/*    The gender of a noun is not always predictable, and there are few rules to determine the gender of a noun. However, there are some patterns that can help you to identify the gender of a noun:*/}
      {/*  </Text>*/}
      {/*  <Text style={styles.listItem}>*/}
      {/*    - <Text style={styles.bold}>Masculine:</Text> Most German nouns that refer to male humans are masculine, as well as many nouns that end in -er, -ig, -ling, or -ismus.*/}
      {/*  </Text>*/}
      {/*  <Text style={styles.listItem}>*/}
      {/*    - <Text style={styles.bold}>Feminine:</Text> Most German nouns that refer to female humans are feminine, as well as many nouns that end in -in, -heit, -keit, -schaft, or -ung.*/}
      {/*  </Text>*/}
      {/*  <Text style={styles.listItem}>*/}
      {/*    - <Text style={styles.bold}>Neuter:</Text> Most German nouns that refer to things or concepts are neuter, as well as many nouns that end in -chen, -lein, or -tum.*/}
      {/*  </Text>*/}
      {/*</View>*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  bannerImage: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default NounsPage;
