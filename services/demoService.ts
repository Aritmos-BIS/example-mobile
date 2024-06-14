import AsyncStorage from "@react-native-async-storage/async-storage";

async function demoService() {

  try {
    const authDataSerialize = await AsyncStorage.getItem('@authData');

    if(!authDataSerialize){
      throw new Error("Not auth data storage")  
    }
    
    const { token } = JSON.parse(authDataSerialize)
      
    const response = await fetch('http://10.100.0.149:3000/api/students', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
     
    });
  
    if(!response.ok){
      await response.json();
      throw new Error(response.message);
    }
  
    return response.json();
    
  } catch (error) {
    alert("Error in login")

    return undefined;
  }
}

export default demoService;
