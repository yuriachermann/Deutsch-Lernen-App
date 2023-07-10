import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import NounsPage from './grammar/a1-1/NounsPage';
import ArticlesPage from "./grammar/a1-1/ArticlesPage";
import PrepositionsPage from "./grammar/a1-1/PrepositionsPage";
import CasesPage from "./grammar/a1-1/CasesPage";
import VerbConjugationPage from "./grammar/a1-1/VerbConjugationPage";
import WordOrderPage from "./grammar/a1-1/WordOrderPage";
import WordOrderInQuestionsPage from "./grammar/a1-1/WordOrderInQuestionsPage";
import AdjectiveEndingsPage from "./grammar/a1-1/AdjectiveEndingsPage";
import ModalVerbsPage from "./grammar/a1-1/ModalVerbsPage";
import ReflexiveVerbsPage from "./grammar/a1-1/ReflexiveVerbsPage";
import WordFormationPage from "./grammar/a1-1/WordFormationPage";
import NegationPage from "./grammar/a1-1/NegationPage";
import image2 from '/assets/images/emoji2.png';


// Add additional pages to this array
const PAGES = [
  {
    key: 'nouns',
    title: 'A1.1 - Nouns',
    component: NounsPage,
  },
  {
    key: 'articles',
    title: 'A1.1 - Articles',
    component: ArticlesPage,
  },
  {
    key: 'cases',
    title: 'A1.1 - Cases',
    component: CasesPage,
  },
  {
    key: 'verb_conjugation',
    title: 'A1.1 - Verb Conjugation',
    component: VerbConjugationPage,
  },
  {
    key: 'word_order',
    title: 'A1.1 - Word Order',
    component: WordOrderPage,
  },
  {
    key: 'word_order_in_questions',
    title: 'A1.1 - Word Order in Questions',
    component: WordOrderInQuestionsPage,
  },
  {
    key: 'prepositions',
    title: 'A1.1 - Prepositions',
    component: PrepositionsPage,
  },
  {
    key: 'adjective_endings',
    title: 'A1.1 - Adjective Endings',
    component: AdjectiveEndingsPage,
  },
  {
    key: 'modal_verbs',
    title: 'A1.1 - Modal Verbs',
    component: ModalVerbsPage,
  },
  {
    key: 'reflexive_verbs',
    title: 'A1.1 - Reflexive Verbs',
    component: ReflexiveVerbsPage,
  },
  {
    key: 'word_formation',
    title: 'A1.1 - Word Formation',
    component: WordFormationPage,
  },
  {
    key: 'negation',
    title: 'A1.1 - Negation',
    component: NegationPage,
  },
];
// Add additional pages and group them into topics
const TOPICS = [
  {
    title: 'A1.1',
    pages: [
      {
        key: 'nouns',
        title: 'Nouns',
        component: NounsPage,
      },
      {
        key: 'articles',
        title: 'Articles',
        component: ArticlesPage,
      },
      {
        key: 'cases',
        title: 'Cases',
        component: CasesPage,
      },
      {
        key: 'verb_conjugation',
        title: 'Verb Conjugation',
        component: VerbConjugationPage,
      },
      {
        key: 'word_order',
        title: 'Word Order',
        component: WordOrderPage,
      },
      {
        key: 'word_order_in_questions',
        title: 'Word Order in Questions',
        component: WordOrderInQuestionsPage,
      },
      {
        key: 'prepositions',
        title: 'Prepositions',
        component: PrepositionsPage,
      },
      {
        key: 'adjective_endings',
        title: 'Adjective Endings',
        component: AdjectiveEndingsPage,
      },
      {
        key: 'modal_verbs',
        title: 'Modal Verbs',
        component: ModalVerbsPage,
      },
      {
        key: 'reflexive_verbs',
        title: 'Reflexive Verbs',
        component: ReflexiveVerbsPage,
      },
      {
        key: 'word_formation',
        title: 'Word Formation',
        component: WordFormationPage,
      },
      {
        key: 'negation',
        title: 'Negation',
        component: NegationPage,
      },
    ],
  },
  {
    title: 'A1.2',
    pages: [
      {
        key: 'nouns',
        title: 'A1.1 - Nouns',
        component: NounsPage,
      },
      {
        key: 'articles',
        title: 'A1.1 - Articles',
        component: ArticlesPage,
      },
    ],
  },
];

const AppPrevious = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState([]);

  const handleNextPage = () => {
    if (currentPage < PAGES.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageSelect = (pageIndex) => {
    setCurrentPage(pageIndex);
    setIsMenuOpen(false);
  };

  const toggleTopic = (topicIndex) => {
    if (expandedTopics.includes(topicIndex)) {
      setExpandedTopics(expandedTopics.filter((index) => index !== topicIndex));
    } else {
      setExpandedTopics([...expandedTopics, topicIndex]);
    }
  };

  const CurrentPageComponent = PAGES[currentPage].component;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{PAGES[currentPage].title}</Text>
      </View>

      {isMenuOpen && (
        <ScrollView style={styles.menu}>
          {TOPICS.map((topic, topicIndex) => (
            <View key={topicIndex}>
              <TouchableOpacity onPress={() => toggleTopic(topicIndex)}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
              </TouchableOpacity>
              {expandedTopics.includes(topicIndex) &&
                topic.pages.map((page, pageIndex) => (
                  <TouchableOpacity
                    key={page.key}
                    onPress={() => handlePageSelect(pageIndex)}
                  >
                    <Text style={styles.menuItem}>{page.title}</Text>
                  </TouchableOpacity>
                ))}
            </View>
          ))}
        </ScrollView>
      )}

      <ScrollView style={styles.content}>
        <CurrentPageComponent />
      </ScrollView>

      <View style={styles.root}>
      <Text style={styles.chooseYourLesson}>
        Choose<br/>your lesson
      </Text>
      <View style={styles.group11}>
        <Text style={styles.a11}>
          A1.1
        </Text>
        <View style={styles.rectangle}/>
        <View style={styles.rectangle2}/>
      </View>
      <View style={styles.frame1}>
        <View style={styles.group1}>
          <View style={styles.rectangle1}/>
          <Image source={{uri: image2}} style={{width: 79, height: 39}} contentFit="cover"/>
          <Text style={styles.nouns}>
            Nouns
          </Text>
          <Image source={{uri: image2}} style={{width: 58, height: 59}} contentFit="cover"/>
          <Image source={{uri: image2}} style={{width: 20, height: 20}} contentFit="cover"/>
        </View>
        <View style={styles.group2}>
          <View style={styles.rectangle12}/>
          <Image source={{uri: image2}} style={{width: 79, height: 39}} contentFit="cover"/>
          <Text style={styles.articles}>
            Articles
          </Text>
          <Image source={{uri: image2}} style={{width: 58, height: 59}} contentFit="cover"/>
          <Image source={{uri: image2}} style={{width: 20, height: 20}} contentFit="cover"/>
        </View>
        <View style={styles.group3}>
          <View style={styles.rectangle13}/>
          <Image source={{uri: image2}} style={{width: 79, height: 39}} contentFit="cover"/>
          <Text style={styles.cases}>
            Cases
          </Text>
          <Image source={{uri: image2}} style={{width: 58, height: 59}} contentFit="cover"/>
          <Image source={{uri: image2}} style={{width: 20, height: 20}} contentFit="cover"/>
        </View>
      </View>
      <Text style={styles.____DeutschLernen}>
        🇩🇪 Deutsch Lernen
      </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handlePreviousPage} disabled={currentPage === 0}>
          <Text style={styles.arrow}>◀</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage} disabled={currentPage === PAGES.length - 1}>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#dd0000',
    height: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 16,
  },
  menu: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 8,
  },
  topicTitle: {
    fontSize: 18,
    paddingVertical: 8,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#ffce00',
    height: 60
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  root: {
    width: 390,
    height: 356,
  },
  chooseYourLesson: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
  a11: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  rectangle: {
    width: 186,
    height: 8,
    flexShrink: 0,
    backgroundColor: '#CBD5E1',
  },
  rectangle2: {
    width: 103,
    height: 8,
    flexShrink: 0,
    backgroundColor: '#10B981',
  },
  group11: {
    width: 346,
    height: 29,
    flexShrink: 0,
  },
  rectangle1: {
    width: 136,
    height: 160,
    flexShrink: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
  },
  image2: {
    width: 79,
    height: 39,
    flexShrink: 0,
  },
  nouns: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
  image22: {
    width: 58,
    height: 59,
    flexShrink: 0,
  },
  image3: {
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  frame1: {
    display: 'inline-flex',
    paddingTop: 8,
    paddingRight: 0,
    paddingBottom: 12,
    paddingLeft: 19,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: 12,
    flexDirection: 'row',
  },
  group1: {
    width: 136,
    height: 160,
  },
  rectangle12: {
    width: 136,
    height: 160,
    flexShrink: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
  },
  articles: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
  group2: {
    width: 136,
    height: 160,
  },
  rectangle13: {
    width: 136,
    height: 160,
    flexShrink: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
  },
  cases: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
  group3: {
    width: 136,
    height: 160,
  },
});

export default AppPrevious;
