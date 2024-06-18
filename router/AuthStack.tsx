import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import LoginPage from "../pages/LoginPage";

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5A189A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
}

export default AuthStack;
