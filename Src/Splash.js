import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
export default class Splash extends Component{
    static navigationOptions={
        header:null
    }
    componentWillMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('main');
        },2000)
    }


        render(){
        return(
            <View style={[styles.continer, styles.horizontal]}>
                <Text style={{fontSize:40,backgroundColor:'transparent',textAlign:'center'}}>Loding please wait..!</Text>
                <Text style={styles.text}>Splash Screen</Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    continer: {
        alignItems: 'center',
        backgroundColor: 'skyblue',
        flex: 1,
        justifyContent: 'center'
    },

    horizontal: {
        flexDirection: 'column',
        justifyContent: 'space-around',

        padding: 10
    }
});
