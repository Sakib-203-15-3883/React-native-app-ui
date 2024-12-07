import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';

const PaymentScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Dummy data for purchased items
  const items = [
    { id: '1', name: 'Item 1', price: 50 },
    { id: '2', name: 'Item 2', price: 30 },
    { id: '3', name: 'Item 3', price: 20 },
    { id: '4', name: 'Item 1', price: 50 },
    { id: '5', name: 'Item 2', price: 30 },
    { id: '6', name: 'Item 3', price: 20 },
  ];

  // Calculate total amount
  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  // Handle payment confirmation
  const handlePayment = () => {
    if (!selectedMethod) {
      Alert.alert('Error', 'Please select a payment method.');
      return;
    }
    Alert.alert('Payment Successful', `Paid $${totalAmount} using ${selectedMethod}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>POS Payment System</Text>

      {/* Purchased Items List */}
      <View style={styles.itemList}>
        <Text style={styles.sectionHeader}>Purchased Items</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          )}
        />
      </View>

      {/* Total Amount */}
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total: ${totalAmount}</Text>
      </View>

      {/* Payment Methods */}
      <View style={styles.paymentMethods}>
        <Text style={styles.sectionHeader}>Payment Method</Text>
        {['Cash', 'Card', 'Digital Wallet'].map((method) => (
          <TouchableOpacity
            key={method}
            style={[
              styles.paymentMethodButton,
              selectedMethod === method && styles.selectedMethod,
            ]}
            onPress={() => setSelectedMethod(method)}
          >
            <Text
              style={[
                styles.paymentMethodText,
                selectedMethod === method && styles.selectedText,
              ]}
            >
              {method}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Confirm Payment Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handlePayment}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e', // Dark blue-gray background
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ecf0f1', // Light text color
  },
  itemList: {
    flex: 1,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ecf0f1', // Light text color
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#95a5a6', // Light gray border
  },
  itemName: {
    fontSize: 16,
    color: '#ecf0f1', // Light text color
  },
  itemPrice: {
    fontSize: 16,
    color: '#1abc9c', // Green for prices
  },
  totalSection: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#95a5a6', // Light gray border
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ecf0f1', // Light text color
  },
  paymentMethods: {
    marginVertical: 10,
  },
  paymentMethodButton: {
    padding: 15,
    backgroundColor: '#2c3e50', // Darker background for buttons
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  selectedMethod: {
    backgroundColor: '#1abc9c', // Highlighted green for selection
  },
  paymentMethodText: {
    fontSize: 16,
    color: '#ecf0f1', // Light text color
  },
  selectedText: {
    color: '#fff', // White text for selected
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#e74c3c', // Red for confirm button
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff', // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
});
