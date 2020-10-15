 import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ScrollView,
	FlatList
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import {Actions} from 'react-native-router-flux';

export default class SignupForm extends React.Component{
	Login(){
		Actions.Login()
	}

	constructor(props){
		super(props)
		this.state={
			username:'',
			email:'',
			firstname:'',
			lastname:'',
			password:'',
			repeatpass:'',
			reason:[],
			contribution:[],
			ddlSelectedValue:'',
			ddlSelectedValue1:''
		}
		this.getReasons = this.getReasons.bind(this);
		this.getContributions = this.getContributions.bind(this);
		/*this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onChangeHand = this.onChangeHand.bind(this);*/
	}

	
  componentDidMount(){
  	this.getReasons();
  	this.getContributions();
  }

  getReasons(){
  	var temp =[];
  	fetch("http://192.168.64.2/reasons.php", {
  		method: "Get",
  		headers:{
			Accept: "application/json",
			"Content-Type": "application/json"
		}
	})
	.then(response => response.json())
    .then(responseJson => {
    
    	var len=responseJson.data.length;
    	if(len>0){
    		for(let i=0;i<len;i++){
    			var data=responseJson.data[i];
    			var obtained= {value: data.reason};
    			temp.push(obtained);
    		}
    	}
    	this.setState({
    		reason:temp
    	});
    })
    .catch(error => {
    	console.error(error);
    });
   }

setSelectedStateValue = (ddlValue) =>{
	this.setState({
		ddlSelectedValue:ddlValue
	});
}

setSelectedStateValue1 = (ddlValue) =>{
	this.setState({
		ddlSelectedValue1:ddlValue
	});
}
   
   getContributions(){
  	var temp =[];
  	fetch("http://192.168.64.2/contributions.php", {
  		method: "Get",
  		headers:{
			Accept: "application/json",
			"Content-Type": "application/json"
		}
	})
	.then(response => response.json())
    .then(responseJson => {
    	var len=responseJson.data.length;
    	if(len>0){
    		for(let i=0;i<len;i++){
    			var data=responseJson.data[i];
    			var obtained= {value: data.contribution};
    			temp.push(obtained);
    		}
    	}
    	this.setState({
    		contribution:temp
    	});
    })
    .catch(error => {
    	console.error(error);
    });
   }




	userRegister = () =>{
		const {username} = this.state;
		const {email} = this.state;
		const {firstname} = this.state;
		const {lastname} = this.state;
		const {password} = this.state;
		const {repeatpass} = this.state;
		const {ddlSelectedValue} = this.state;
		const {ddlSelectedValue1} = this.state;

		fetch('http://192.168.64.2/register.php',{
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				username:username,
				email:email,
				firstname:firstname,
				lastname:lastname,
				password:password,
				repeatpass:repeatpass,
				ddlSelectedValue:ddlSelectedValue,
				ddlSelectedValue1:ddlSelectedValue1
			})

		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
				if(responseJson=='User Registered Successfully!You may now Login'){
					Actions.Login();
				}
				
				/*if(responseJson == 'Email already exists!' || responseJson == 'UserName already exists!' || responseJson=='User Registered Successfully'){
					let user = this.refs["user"];
					let email = this.refs["email"];
					let fname = this.refs["fname"];
					let lname = this.refs["lname"];
					let pass = this.refs["pass"];
					let cnf = this.refs["cnf"];

					user.clear();
					email.clear();
					fname.clear();
					lname.clear();
					pass.clear();
					cnf.clear();

				}*/
				
			})
			.catch((error)=>{
				console.error(error);
			})
	}
	
	render() {
		return(
				<View style={styles.form}>

					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='UserName' 
					placeholderTextColor='black' autoCapitalize = 'none' ref="user" selectTextOnFocus={true} onChangeText = {username => this.setState({username})}/>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Email' 
					placeholderTextColor='black' autoCapitalize = 'none' ref="email" selectTextOnFocus={true} onChangeText = {email => this.setState({email})}/>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='FirstName' 
					placeholderTextColor='black' autoCapitalize = 'none' ref="fname" selectTextOnFocus={true} onChangeText = {firstname => this.setState({firstname})}/>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='LastName' 
					placeholderTextColor='black' autoCapitalize = 'none' ref="lname" selectTextOnFocus={true} onChangeText = {lastname => this.setState({lastname})}/>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Password' 
					secureTextEntry={true} placeholderTextColor='black' ref="pass" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {password => this.setState({password})}/>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Confirm Password' 
					secureTextEntry={true} placeholderTextColor='black' autoCapitalize = 'none' ref= "cnf" selectTextOnFocus={true} onChangeText = {repeatpass => this.setState({repeatpass})}/>

					
					
					<Dropdown
						containerStyle={{width:300,backgroundColor:'rgba(255,255,255,0.3)',borderBottomColor: 'transparent',borderRadius:25,height:60,paddingHorizontal:18,marginVertical:7,fontFamily:"Avenir Next",}}
						baseColor='black'
						label="Reason for joining"
						data={this.state.reason}
						value={this.state.ddlSelectedValue}
						onChangeText={(value,index,data)=>this.setSelectedStateValue(value)}
					/>

					<Dropdown
						containerStyle={{width:300,backgroundColor:'rgba(255,255,255,0.3)',borderBottomColor: 'transparent',borderRadius:25,height:60,paddingHorizontal:18,marginVertical:7}}
						baseColor='black'
						label="Contribution"
						data={this.state.contribution}
						value={this.state.ddlSelectedValue1}
						onChangeText={(value,index,data)=>this.setSelectedStateValue1(value)}
					/>
					
					<TouchableOpacity style={styles.button} onPress={this.userRegister}>
						<Text style={styles.buttonText}>Signup</Text>
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
	drop: {
		width:'100%'

	},
	inputbox: {
		width:280,
		height:45,
		fontFamily:"Avenir Next",
		 borderStyle:'solid',
   
    borderBottomWidth: 1,
		paddingHorizontal:18,
		marginVertical:7,
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
	},
	headerText: {
	    width:300,
		height:45,
		backgroundColor:'rgba(255,255,255,0.3)',
		borderRadius:85,
		paddingHorizontal:18,
		marginVertical:5,
		fontSize:16,
		color: 'black'
  	},
  	menuContent: {
	    color: "#000",
	    fontWeight: "bold",
	    padding: 2,
	    fontSize: 20
  }
});