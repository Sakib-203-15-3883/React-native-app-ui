import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const SalesReportScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Sales</Text>
          <Text style={styles.cardValue}>$25,400</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Orders</Text>
          <Text style={styles.cardValue}>1,320</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Average Order Value</Text>
          <Text style={styles.cardValue}>$52.30</Text>
        </View>

        <Text style={styles.sectionTitle}>Monthly Breakdown</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>October</Text>
          <Text style={styles.cardValue}>$5,400</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>September</Text>
          <Text style={styles.cardValue}>$8,200</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>August</Text>
          <Text style={styles.cardValue}>$11,800</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SalesReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#050629',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    color: 'whitesmoke',
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginTop: 8,
  },
});
