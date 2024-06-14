import { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ViewProps, ActivityIndicator, Image } from "react-native";
import useAuth from "../hooks/useAuth";
import icon from '../assets/AritmosLogo.png'



function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { login, loading } = useAuth();

    const handleLogin = async () => {
        await login(email, password);
    };


    if(loading){
        return (
            <View style={styles.mainContainer}>
                <ActivityIndicator/>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <Image source={icon} style={styles.iconContainer}/>
            <View style={styles.loginContainer}>
                <Text style={styles.loginTitle}>Welcome!</Text>
                <View style={styles.loginInnerContainer}>
                    <Text style={styles.loginText}>Username</Text>
                    <TextInput
                        style={styles.loginInput}
                        onChangeText={setEmail}
                        placeholder="Enter username"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>
                <View style={styles.loginInnerContainer}>
                    <Text style={styles.loginText}>Password</Text>
                    <TextInput
                        style={styles.loginInput}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholder="Enter password"
                        placeholderTextColor="#A9A9A9"
                    />
                </View>
               <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity> 
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#CB5DF1',
    },
    iconContainer: {
        width: 150, 
        height: 150,
        margin: '5%',
    },
    loginContainer: {
        backgroundColor: '#8C07DD',
        padding: 20,
        paddingVertical: 50,
        width: '85%',
        height: '70%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    loginInnerContainer: {
        marginVertical: 10,
        width: '100%',
    },
    loginTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#F7EBFD',
        textAlign: 'center',
        marginBottom: 20,
    },
    loginText: {
        fontSize: 18,
        color: '#F7EBFD',
        marginBottom: 5,
    },
    loginInput: {
        backgroundColor: '#F8F8F8',
        borderRadius: 5,
        padding: 10,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        width: '100%',
        fontSize: 16,
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: '#6910A8',
        borderRadius: 20,
        padding: 15,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default LoginPage