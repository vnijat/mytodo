/* eslint-disable prettier/prettier */
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headText}>-MyHead-</Text>
                </View>
            <ScrollView style={styles.scrollContainer} />

                <View style={styles.footer}>
                    <TextInput style = {styles.textInput}
                    placeholder = "add"
                    placeholderTextColor = "white"
                    underlineColorAndroid = "transparent" />

                    </View>
                    <TouchableOpacity style = {styles.addButton}>
                        <Text style = {styles.addButtonText}>+</Text>
                    </TouchableOpacity>

</View>
                );
                }
                }


const styles = StyleSheet.create({
                    container: {
                    flex:1,
               },
header:{
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor: 'black',
            },
headText:{
color:'white',
fontSize:18,
padding:26 },
scrollContainer:{
flex:1,
    marginBottom:100,
                },
 footer:{
position:'absolute',
bottom:0,
left:0,
right:0,
zIndex:10,
                },
textInput:{
alignSelf:'stretch',
color:'#fff',
padding:20,
backgroundColor: '#252525',
borderTopWidth:2,
borderTopColor: '#ededed'
},
addButton:{
position:'absolute',
zIndex:11,
right:20,
bottom:90,
backgroundColor:'#E91E63',
width:90,
height:90,
borderRadius:50,
alignItems:'center',
justifyContent:'center',
elevation:8,
},
addButtonText:{
color:'#fff',
fontSize:24,
}
                })
;