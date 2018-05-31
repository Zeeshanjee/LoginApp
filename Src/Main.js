import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,

} from 'react-native';
import Button from 'react-native-button';
import Login from "../MainScreen/Login";
export default class Main extends Component{
    static navigationOptions={
        header:null
    }


    render(){
        return(





                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}} >
                    <ImageBackground source={require('../ZDlogo.png')} style={{width:null,height: null, flex:1,
                        justifyContent:'flex-end',alignItems:'center',}}>
                        <Button
                            style={{marginBottom:20,fontSize:30}}
                            onPress={() => this.props.navigation.navigate("signupscr")}>
                            SignUp
                        </Button>
                        <Button
                            style={{marginBottom:30,fontSize:30}}
                            onPress={() => this.props.navigation.navigate("loginscr")}>
                            Login
                        </Button>
                        <Text style={{marginBottom:25,color:'blue'}}>Forget Password!!</Text>
                        <Text style={{fontSize:40,backgroundColor:'transparent',color: 'white',}}>Welcome to Page</Text>

                    </ImageBackground>

                </View>
        );
    }
}



