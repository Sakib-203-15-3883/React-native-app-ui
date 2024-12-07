import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const CashierScreen = () => {
  const transactions = [
    { id: '1', name: 'Order #12345', amount: '$50.00', status: 'Completed' },
    { id: '2', name: 'Order #12346', amount: '$30.00', status: 'Pending' },
    { id: '3', name: 'Order #12347', amount: '$70.00', status: 'Completed' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Cashier Dashboard</Text>
      </View>

      {/* Sales Summary */}
      <View style={styles.salesSummary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTitle}>Total Sales</Text>
          <Text style={styles.summaryValue}>$150.00</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTitle}>Transactions</Text>
          <Text style={styles.summaryValue}>3</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryTitle}>Pending Orders</Text>
          <Text style={styles.summaryValue}>1</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Process Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Generate Receipt</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Transactions */}
      <View style={styles.recentTransactions}>
        <Text style={styles.sectionHeader}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
              <Text style={[styles.transactionStatus, item.status === 'Completed' ? styles.completed : styles.pending]}>
                {item.status}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CashierScreen;

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
  salesSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryItem: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#bdc3c7',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ecf0f1',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentTransactions: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 10,
  },
  transactionItem: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionName: {
    color: '#ecf0f1',
    fontSize: 16,
    flex: 2,
  },
  transactionAmount: {
    color: '#ecf0f1',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  transactionStatus: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
  },
  completed: {
    color: '#1abc9c',
  },
  pending: {
    color: '#f39c12',
  },
});
