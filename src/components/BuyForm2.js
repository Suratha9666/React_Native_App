import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Picker
} from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";


import {Actions} from 'react-native-router-flux';

export default class Form extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cardname:'',
      cardnum:'',
      expdate:'',
      cvv:'',
      PickerValue:'',
    }
  }

  verifybuy = () =>{
    const {cardname} = this.state;
    const {cardnum} = this.state;
    const {expdate} = this.state;
    const {cvv} = this.state;
    var video = this.state.PickerValue

    fetch('http://192.168.64.2/buy.php',{
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        cardname:cardname,
        cardnum:cardnum,
        expdate:expdate,
        cvv:cvv,
        video:video
      })

    })
    .then((response) => response.json())
      .then((responseJson) =>{
        if(responseJson == 'OK'){
          Actions.Confirmation()
        }
        else{
          Actions.Confirmation()
        }
      })
      .catch((error)=>{
        console.error(error);
      })
  }
  render() {
    return(
      <View style={styles.form}>
      <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='CardholderName' 
        placeholderTextColor='black' ref="cardname" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {cardname => this.setState({cardname})}/>
        <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Card number' 
        placeholderTextColor='black' ref="cardnumber" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {cardnum => this.setState({cardnum})}/>
        <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Exp date MM/YY' 
        placeholderTextColor='black' ref="expdate" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {expdate=> this.setState({expdate})}/>
        <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='CVV' 
        placeholderTextColor='black' ref="cvv" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {cvv => this.setState({cvv})}/>
        <TouchableOpacity style={styles.inputbox1}>
        <Text style={styles.inputbox2}> Selected {this.state.PickerValue}</Text>
        </TouchableOpacity>
         <Picker
         style ={{position:'absolute',bottom:0,left:0,right:0,top:350}}
         selectedValue = {this.state.itemValue}
         onValueChange ={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
         >
        
         <Picker.Item label="1.Astronomy" value="Astronomy" />
         <Picker.Item label="2.Kinematics" value="Kinematics" />
         
       
         <Picker.Item label="3.Relativity and Astrophysics" value="Relativity and Astrophysics" />
         <Picker.Item label="4.Spatial Data Visualization" value="Spatial Data Visualization" />
         </Picker>
        <TouchableOpacity style={styles.button} onPress={this.verifybuy}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create ({
  form: {
    justifyContent: "center",
    alignItems: "center"
  },
  inputbox: {
    width:300,
    height:45,
    fontFamily:"Avenir Next",
    borderStyle:'solid',
    borderBottomWidth: 1,
    paddingHorizontal:18,
    marginVertical:10,
    fontSize:16,
    color: 'black'
  },
  inputbox1: {
    width:300,
    height:45,
    borderWidth:0,
    fontFamily:"Avenir Next",
    borderStyle:'solid',
    borderBottomWidth: 1,
    paddingHorizontal:18,
    marginVertical:10,
    fontSize:16,
    color: 'black'
  },
  inputbox2: {
    width:300,
    height:45,
    borderWidth:0,
    fontFamily:"Avenir Next",
    borderRadius:25,
    paddingHorizontal:0,
    marginVertical:10,
    fontSize:16,
    color: 'black'
  },
  buttonText: {
    fontSize:16,
    fontWeight:'800',
    color:'white',
    textAlign: 'center'

  },
  button: {
    backgroundColor:'#585858',
    width:150,
    height:45,
    borderRadius:25,
    marginVertical:10,
    paddingVertical:12
  },
   menuContent: {
    
    backgroundColor:'rgba(255,255,255,0.3)',
    padding: 2,
    fontSize: 20
  }
});