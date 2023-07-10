import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';

const CasesPage = () => {
  return (
    <ScrollView style={styles.container}>
      {/*<Image*/}
      {/*  source={require('./assets/german_nouns.png')}*/}
      {/*  style={styles.bannerImage}*/}
      {/*  resizeMode="cover"*/}
      {/*/>*/}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Nouns in German</Text>
        <Text style={styles.paragraph}>
          In German, a <Text style={styles.bold}>noun</Text> is a word that names a person, place, thing, or idea. Nouns in German are always capitalized, and they can have one of three <Text style={styles.bold}>genders</Text>: masculine, feminine, or neuter. The gender of a noun is important because it affects the <Text style={styles.bold}>article</Text> and the <Text style={styles.bold}>adjective</Text> that are used to describe it.
        </Text>
        <Text style={styles.subTitle}>Gender of Nouns</Text>
        <Text style={styles.paragraph}>
          The gender of a noun is not always predictable, and there are few rules to determine the gender of a noun. However, there are some patterns that can help you to identify the gender of a noun:
        </Text>
        <Text style={styles.listItem}>
          - <Text style={styles.bold}>Masculine:</Text> Most German nouns that refer to male humans are masculine, as well as many nouns that end in -er, -ig, -ling, or -ismus.
        </Text>
        <Text style={styles.listItem}>
          - <Text style={styles.bold}>Feminine:</Text> Most German nouns that refer to female humans are feminine, as well as many nouns that end in -in, -heit, -keit, -schaft, or -ung.
        </Text>
        <Text style={styles.listItem}>
          - <Text style={styles.bold}>Neuter:</Text> Most German nouns that refer to things or concepts are neuter, as well as many nouns that end in -chen, -lein, or -tum.
        </Text>
      </View>
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

export default CasesPage;
