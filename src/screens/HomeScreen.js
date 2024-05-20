// src/screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button, StyleSheet, TextInput } from 'react-native';
import NotesItem from '../components/NotesItem';
import { db, collection, getDocs, addDoc } from '../config.js/firebaseConfig';

const HomeScreen = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      const querySnapshot = await getDocs(collection(db, "notes"));
      
      const notesList= querySnapshot.docs.map((doc) => {
        return ({ id: doc.id, ...doc.data() });
      });
      setNotes(notesList);
    };

    fetchNotes();
  }, []);

  const addNote = async () => {
    const newNote = {
      value:input
    };
    try {
      const docRef = await addDoc(collection(db, "notes"), newNote);
      setNotes([{ id: docRef.id, ...newNote }, ...notes, ]);
      setInput("")
    } catch (e) {
      console.error("Error adding document: ", e);
    }   
  };

  return (
    <View style={styles.container}>
        <TextInput
        placeholder='Add a note'
        style= {{borderWidth:1, borderColor:"lightgrey", borderRadius:10, height:50,
            padding:10,
        }}
        value={input}
        onChangeText={(inputText) => setInput(inputText)}
        
        />
      <Button title="Add Note" onPress={addNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => <NotesItem note={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
