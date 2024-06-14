import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ViewProps, ActivityIndicator, Image } from "react-native";
import demoService from '../services/demoService'
import { Student } from '../types/user.type'
import icon from '../assets/AritmosLogo.png';
// import useAuth from "../hooks/useAuth";


function LoginPage() {
    const [loading, setLoading] = useState(true);
    const [data,  setData] = useState< Student | undefined>(undefined);

    useEffect(() => {
        handleLoad()
    }, [])

    useEffect(() => {
        console.log({data})

    }, [data])

    const handleLoad = async () => {
        setLoading(true)
        const _data = await demoService()
        setData(_data)
        setLoading(false)
    };

    if(loading || !data){
        return (
            <View style={styles.mainContainer}>
                <ActivityIndicator/>
            </View>
        );
    }
    

    return (
        <View style={styles.mainContainer}>
            <View style={styles.loginContainer}>
                <Image source={icon} style={styles.iconContainer}/>
                <Text style={styles.loginText}>Name: </Text>
                <Text style={styles.loginTitle}>{data.name}</Text>
                <Text style={styles.loginText}>Last name: </Text>
                <Text style={styles.loginTitle}>{data.lastname}</Text>
                <Text style={styles.loginText}>email: </Text>
                <Text style={styles.loginTitle}>{data.email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CB5DF1',
        padding: 20,
    },
    loginContainer: {
        backgroundColor: '#8C07DD',
        padding: 20,
        width: 300,
        borderRadius: 10,
        shadowColor: '#FFF',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    loginInnerContainer: {
        marginVertical: 10,
        width: '100%',
    },
    iconContainer: {
        alignItems: 'center',
        width: 150, 
        height: 150,
        margin: 50,
    },
    loginTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F7EBFD',
        textAlign: 'center',
        marginBottom: 20,
    },
    loginText: {
        fontSize: 15,
        color: '#F7EBFD',
        marginBottom: 10,
        marginTop: 20,
    },
});


export default LoginPage