import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

const InventoryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dummy data for inventory
  const inventoryItems = [
    { id: '1', name: 'Laptop', category: 'Electronics', quantity: 5, price: '$1200' },
    { id: '2', name: 'Apple', category: 'Groceries', quantity: 50, price: '$1' },
    { id: '3', name: 'T-Shirt', category: 'Clothing', quantity: 20, price: '$15' },
    { id: '4', name: 'Headphones', category: 'Electronics', quantity: 15, price: '$50' },
    { id: '5', name: 'Banana', category: 'Groceries', quantity: 30, price: '$0.5' },
  ];

  // Filtered data based on search query and selected category
  const filteredItems = inventoryItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Electronics', 'Groceries', 'Clothing'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Inventory Management</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search items..."
          placeholderTextColor="#95a5a6"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.activeCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.activeCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Inventory List */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.inventoryList}
        renderItem={({ item }) => (
          <View style={styles.inventoryItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>Qty: {item.quantity}</Text>
            <Text style={styles.itemDetails}>Price: {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    padding: 15,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ecf0f1',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#2c3e50',
  },
  activeCategoryButton: {
    backgroundColor: '#1abc9c',
  },
  categoryText: {
    color: '#ecf0f1',
    fontSize: 14,
  },
  activeCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inventoryList: {
    paddingBottom: 20,
  },
  inventoryItem: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#bdc3c7',
  },
});
