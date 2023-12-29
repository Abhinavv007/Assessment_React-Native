import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const list = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Ananas' },
    { id: 3, name: 'Anguur' },
    { id: 4, name: 'Aadu' },
    { id: 5, name: 'Litchi' },
    { id: 6, name: 'Strawberry' },
    { id: 7, name: 'Blueberry' },
    { id: 8, name: 'Mango' },
    { id: 9, name: 'Pineapple' },
    { id: 10, name: 'Kiwi' },
     
  ];

  const handleChange = (text) => {
    setSearch(text);
    const filtered = list.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  
  const sortedList = list.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange(text)}
        value={search}
        placeholder="Search here"
        placeholderTextColor="#999"
      />
      <ScrollView style={styles.scrollView}>
        {filteredData.length > 0
          ? filteredData.map((item) => (
              <View style={styles.listItem} key={item.id}>
                <Text style={styles.listItemText}>{item.name}</Text>
              </View>
            ))
          : sortedList.map((item) => (
              <View style={styles.listItem} key={item.id}>
                <Text style={styles.listItemText}>{item.name}</Text>
              </View>
            ))}
            
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#333',
  },
  scrollView: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
