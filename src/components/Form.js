import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Form extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:''
		}
	}

	Home

	verifyLogin = () =>{
		const {username} = this.state;
		const {password} = this.state


		fetch('http://192.168.64.2/login.php',{
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				username:username,
				password:password
			})

		})
		.then((response) => response.json())
			.then((responseJson) =>{
				if(responseJson == 'OK'){
					AsyncStorage.multiSet([
						["username", username]
					])
					Actions.Home()
				}
				else{
					alert("Invalid Username or Password!")
					let name = this.refs["name"];
					let pass = this.refs["pass"];
					name.clear();
					pass.clear();
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
				placeholderTextColor='black' ref="name" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {username => this.setState({username})}/>
				<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Password' 
				secureTextEntry={true} placeholderTextColor='black' ref="pass" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {password => this.setState({password})}/>
				<TouchableOpacity style={styles.button} onPress={this.verifyLogin}>
					<Text style={styles.buttonText}>Login</Text>
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
        borderBottomWidth: 1,
		paddingHorizontal:18,
		fontFamily:"Avenir Next",
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
		paddingVertical:12,
		color: 'white'
	}
});