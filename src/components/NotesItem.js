// src/components/NotesItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotesItem = ({ note }) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.content}>{note.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
  },
});

export default NotesItem;

