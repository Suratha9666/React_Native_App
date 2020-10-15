import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Form extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:'',
			repeatpass:''
		}
	}

	forgotPassword = () =>{
		const {username} = this.state;
		const {password} = this.state;
		const {repeatpass} = this.state


		fetch('http://192.168.64.2/reset.php',{
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				username:username,
				password:password,
				repeatpass:repeatpass
			})

		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
				if(responseJson=='Your password has been reset successfully!'){
					Actions.Login()
				}
				if(responseJson=='No such User exists!'){
					let username = this.refs["username"];
					let password = this.refs["password"];
					let repeatpass = this.refs["repeatpass"];
					username.clear();
					password.clear();
					repeatpass.clear();
				}
			})
			.catch((error)=>{
				console.error(error);
			})
	}

	render() {
		return(
			<View style={styles.form}>
				<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='UserName' 
				placeholderTextColor='black' ref="username" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {username => this.setState({username})}/>
				<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='New Password' 
				secureTextEntry={true} placeholderTextColor='black' ref="password" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {password => this.setState({password})}/>
				<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Confirm Password' 
				secureTextEntry={true} placeholderTextColor='black' ref="repeatpass" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {repeatpass => this.setState({repeatpass})}/>
				<TouchableOpacity style={styles.button} onPress={this.forgotPassword}>
					<Text style={styles.buttonText}>Submit</Text>
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
		borderStyle:'solid',
		fontFamily:"Avenir Next",
        borderBottomWidth: 1,
		paddingHorizontal:18,
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
		marginVertical:15,
		paddingVertical:12
	}
});