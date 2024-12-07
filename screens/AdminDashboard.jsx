import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const AdminDashboard = () => {
  return (
    <View style={styles.container}>
      

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Horizontal Stats Section */}
        <Text style={styles.sectionTitle}>Key Metrics</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.statsContainer}
        >
          <View style={styles.statBox}>
            <Text style={styles.statText}>Total Sales</Text>
            <Text style={styles.statValue}>$25,400</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>Inventory Items</Text>
            <Text style={styles.statValue}>1,200</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>Active Orders</Text>
            <Text style={styles.statValue}>56</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>New Customers</Text>
            <Text style={styles.statValue}>320</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>Pending Shipments</Text>
            <Text style={styles.statValue}>14</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>Returns</Text>
            <Text style={styles.statValue}>8</Text>
          </View>
        </ScrollView>

        {/* Quick Actions Section */}
        <View style={styles.actionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Manage Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>View Sales Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Manage Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Customer Feedback</Text>
            </TouchableOpacity>
            
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Manage Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>View Sales Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Manage Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Customer Feedback</Text>
            </TouchableOpacity>
            
          </View>


          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Manage Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>View Sales Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Manage Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Customer Feedback</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>

      
    </View>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  header: {
    backgroundColor: '#34495e',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#2ecc71',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  statBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    width: 150,
    marginRight: 15,
  },
  statText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginTop: 8,
  },
  actionsContainer: {
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical:"5%"
  },
  actionButton: {
    backgroundColor: '#007aff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '47%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#34495e',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});
