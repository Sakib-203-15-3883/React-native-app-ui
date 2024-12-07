import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, FlatList } from 'react-native';

const HelpDeskScreen = () => {
  const [faqExpanded, setFaqExpanded] = useState(null);

  // Dummy data for frequently asked questions
  const faqs = [
    { id: '1', question: 'How do I reset my password?', answer: 'To reset your password, click on "Forgot Password" at the login screen.' },
    { id: '2', question: 'How do I update my payment method?', answer: 'Go to "Account Settings" and select "Payment Methods" to update your details.' },
    { id: '3', question: 'Where can I view my order history?', answer: 'You can view your order history under the "My Orders" section in your profile.' },
  ];

  // Toggle FAQ answer
  const toggleFaq = (id) => {
    setFaqExpanded(faqExpanded === id ? null : id);
  };

  // Contact support action
  const contactSupport = () => {
    Alert.alert('Contacting Support', 'You will be connected to our support team shortly.');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Help Desk</Text>
      </View>

      {/* FAQs Section */}
      <View style={styles.faqSection}>
        <Text style={styles.sectionHeader}>Frequently Asked Questions</Text>
        <FlatList
          data={faqs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.faqItem}>
              <TouchableOpacity style={styles.faqQuestionContainer} onPress={() => toggleFaq(item.id)}>
                <Text style={styles.faqQuestion}>{item.question}</Text>
              </TouchableOpacity>
              {faqExpanded === item.id && <Text style={styles.faqAnswer}>{item.answer}</Text>}
            </View>
          )}
        />
      </View>

      {/* Contact Us Button */}
      <TouchableOpacity style={styles.contactButton} onPress={contactSupport}>
        <Text style={styles.contactButtonText}>Contact Support</Text>
      </TouchableOpacity>

      {/* Live Chat Placeholder */}
      <View style={styles.liveChatContainer}>
        <TouchableOpacity style={styles.liveChatButton}>
          <Text style={styles.liveChatText}>Live Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpDeskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e', // Dark background color
    padding: 15,
  },
  headerContainer: {
    backgroundColor: '#2c3e50', // Darker header background
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 30,
    elevation: 5, // Shadow for header
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ecf0f1', // Light text color for contrast
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ecf0f1', // Light text color for section headers
  },
  faqSection: {
    marginBottom: 30,
  },
  faqItem: {
    marginBottom: 15,
    backgroundColor: '#2c3e50', // Dark background for FAQ items
    borderRadius: 8,
    padding: 15,
    elevation: 2, // Shadow effect for FAQ items
  },
  faqQuestionContainer: {
    marginBottom: 10,
  },
  faqQuestion: {
    fontSize: 16,
    color: '#ecf0f1', // Light text color for questions
    fontWeight: 'bold',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#bdc3c7', // Lighter color for answers
    marginTop: 5,
  },
  contactButton: {
    backgroundColor: '#e74c3c', // Red button for contacting support
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 4, // Button shadow for elevation effect
  },
  contactButtonText: {
    color: '#fff', // White text for contact button
    fontSize: 18,
    fontWeight: 'bold',
  },
  liveChatContainer: {
    alignItems: 'center',
  },
  liveChatButton: {
    backgroundColor: '#1abc9c', // Green button for live chat
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 4, // Button shadow for elevation effect
  },
  liveChatText: {
    color: '#fff', // White text for live chat button
    fontSize: 18,
    fontWeight: 'bold',
  },
});
