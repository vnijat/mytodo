/* eslint-disable prettier/prettier */
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class Note extends React.Component {
    render() {
        return (
            <View key ={this.props.keyval} style ={styles.note}>
                <Text style = {styles.noteText}>{this.props.val.date} </Text>
                <Text style = {styles.noteText}>{this.props.val.note} </Text>
               
                    <TouchableOpacity onPress={this.props.deleteMethod} style= {styles.noteDelete}>
                        <Text style={styles.noteDeleteText}>X</Text>

                    </TouchableOpacity>


                </View>


                );
                }
                }


const styles = StyleSheet.create({
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:1,
        borderBottomColor:'#cfd3d4'
    },
noteText:{
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:'#41d6e0',
},
noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff6b6b',
    padding:10,
    borderRadius:10,
    top:10,
    bottom:10,
    right:10
},
noteDeleteText:{
    color:'white',
    fontWeight:'bold'
}
                   
                })
