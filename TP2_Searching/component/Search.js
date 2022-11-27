import React, {useState} from "react"
import {StyleSheet, Text, View, TextInput, TouchableOpacity,Alert} from 'react-native';
import Album2 from "./Album";
//import {Alert} from "react-native-web";

const src = "../assets/1.jpg";
export default function Search() {
    const [item, setItem] = useState("")
    let [chercher,setRecherche]=useState(0);

    const onPress =()=>{
        chercher=item;
        if(chercher!=""){
        setRecherche(chercher);
        }else{
            Alert.alert("Donnez un chiffre s'ilvous Plait !")
        }
        //console.log("From onSearch="+chercher);

    }
    return (
        <View style={styles.container}>
            <TextInput style={[styles.TextInput]}
                       placeholder="Entrez un nombre entre 1 et 10"
                       placeholderTextColor="#003f5c"
                       keyboardType="numeric"
                       onChangeText={(item)=>setItem(item)}
                       value={item}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>Chercher</Text>
            </TouchableOpacity>
            <Album2 name={chercher}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1 / 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        marginTop: 30,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: 'blue',
        padding: 20,
        backgroundColor: 'blue',
        marginBottom: 80
    },
    TextInput: {
        marginTop: 80,
        borderColor: 'blue',
        borderWidth: 3,
        width: '17%',
        padding: 10,
        borderRadius: 25
    },
});
