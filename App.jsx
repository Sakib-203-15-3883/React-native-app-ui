import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For Drawer and Tab icons
import PaymentIcon from 'react-native-vector-icons/MaterialIcons'
import CashierScreen from './screens/CashierScreen';
import InventoryScreen from './screens/InventoryScreen';
import AdminDashboard from './screens/AdminDashboard';
import SalesReportScreen from './screens/SalesReportScreen';
import PaymentScreen from './screens/PaymentScreen';
import SettingsScreen from './screens/SettingsScreen';
import HelpDeskScreen from './screens/HelpDeskScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Cashier-specific stack
function CashierStack() {
  return (
    <Stack.Navigator initialRouteName="Cashier">
      <Stack.Screen name="Cashier" component={CashierScreen} options={{headerShown:false}}/>
      
    </Stack.Navigator>
  );
}

// Inventory Manager stack
function InventoryStack() {
  return (
    <Stack.Navigator initialRouteName="Inventory">
      <Stack.Screen name="Inventory" component={InventoryScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Reports" component={SalesReportScreen} />
      <Stack.Screen name="Help Desk" component={HelpDeskScreen} />
    </Stack.Navigator>
  );
}

// Admin tab navigation
function AdminTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Dashboard') {
          iconName = 'view-dashboard';
        } else if (route.name === 'Reports') {
          iconName = 'chart-line';
        } else if (route.name === 'Payment') {
          iconName = 'contactless-payment';
        } else if (route.name === 'Help Desk') {
          iconName = 'help-circle';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#ffffff',
      tabBarInactiveTintColor: '#cccccc',
      tabBarStyle: {
        backgroundColor: '#1e293b', // Navy background
        borderTopWidth: 0,
        elevation: 5,
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      tabBarItemStyle: {
        paddingVertical: 5,
      },
      headerShown: false, // Hide the header for a cleaner look
    })}
  >
     <Tab.Screen name="Payment" component={PaymentScreen} />
    <Tab.Screen
      name="Dashboard"
      component={AdminDashboard}
      options={{
        tabBarBadge: 3, // Example badge for notifications
        tabBarBadgeStyle: {
          backgroundColor: '#ff5733',
          color: '#ffffff',
          fontSize: 10,
        },
      }}
    />
   
    <Tab.Screen name="Reports" component={SalesReportScreen} />
    
    <Tab.Screen
      name="Help Desk"
      component={HelpDeskScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="lifebuoy"
            size={size}
            color={color}
            style={{ transform: [{ rotate: '15deg' }] }}
          />
        ),
      }}
    />
  </Tab.Navigator>
  );
}

// Main drawer navigation for roles
function MainDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={({ route, navigation }) => ({
        drawerIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Admin') {
            iconName = 'account-cog';
          } else if (route.name === 'Cashier') {
            iconName = 'cash-register';
          } else if (route.name === 'Inventory Manager') {
            iconName = 'warehouse';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: '#ffffff', // White for active items
        drawerInactiveTintColor: 'gray', // Gray for inactive items
        drawerStyle: {
          backgroundColor: '#2c3e50', // Dark background color
          width: 240, // Drawer width
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: '#34495e', // Slightly lighter background for header
        },
        headerTitleStyle: {
          color: '#ffffff', // White text for the drawer header title
        },
        // Use default drawer toggle behavior
        headerLeft: () => (
          <Icon
            name="menu"
            size={24}
            color="white"
            style={{ marginLeft: 15 }}
            onPress={() => navigation.openDrawer()} // Open the drawer when icon is pressed
          />
        ),
      })}
    >
     
      <Drawer.Screen name="Admin" component={AdminTabs} />
      <Drawer.Screen name="Cashier" component={CashierStack}  />
      <Drawer.Screen name="Inventory Manager" component={InventoryStack} />
    </Drawer.Navigator>
  );
}

// Main app navigation
export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}
