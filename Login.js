import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	AsyncStorage
} from 'react-native';

import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:'',
			locale:'',
			fallbacks:false,
			translations:{}


		}
		this.ForgotPassword=this.ForgotPassword.bind(this);
		this.Signup=this.Signup.bind(this);
		this.Languages=this.Languages.bind(this);
	}

	Home

	Signup(){
		Actions.Signup({data:this.props.data})
	}
	ForgotPassword (){
		Actions.ForgotPassword({data:this.props.data})
	}
	Languages (){
		Actions.Languages({data:this.props.data})
	}


componentDidMount(){
this.setState({ 
locale :this.props.data,
fallbacks :true,
translations : {
  en: 
  { 
  	Welcome: 'Welcome',
  	to:'to',
  	Asgardia:'Asgardia',



  	Forgot:'Forgot', 
  	Password:'Password',
  	Dont:'Dont',
  	have:'have',
  	an:'an',
  	account:'account',
  	yet:'yet',
  	Signup:'Signup',
  	Change:'Change',
  	Language:'Language',
  	UserName:'UserName',
  	Login:'Login'
  },
  
  ru: 
  { 
  	Welcome: 'желанный',
  	to:'в',
  	Asgardia:'Asgardia',
  	Forgot:'Забыли',
  	Password:'пароль',
  	Dont:'не',
  	have:'иметь',
  	an:'an',
  	account:'учетная запись',
  	yet:'все же',
  	Signup:'Зарегистрироваться',
  	Change:'+ Изменить',
  	Language:'язык',
  	UserName:'UserName',
  	Login:'Авторизоваться'
  },
  
  sp: 
  {
  	Welcome:'Bienvenido',
  	to:'a',
  	Asgardia:'Asgardia',
  	Forgot:'Olvidó',
  	Password:'Contraseña',
  	Dont:"No",
  	have:'tener',
  	an:'un',
  	account:'cuenta',
  	yet:'todavía',
  	Signup:'Regístrate',
  	Change:'Cambio',
  	Language:'Idioma',
  	UserName:'Nombre de usuario',
  	Login:'Iniciar sesión'
  },
  fr: 
  {
  	Welcome:'Bienvenue',
  	to:'à',
  	Asgardia:'Asgardia',
  	Forgot:'Oublié',
  	Password:'Mot de passe',
  	Dont:'Ne le fais pas',
  	have:'avoir',
  	an:'une',
  	account:'Compte',
  	yet:'encore',
  	Signup:'Sinscrire',
  	Change:'Changement',
  	Language:'Langue',
  	UserName:"Nom d'utilisateur",
  	Login:"S'identifier"
  }
}
})

}

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
					Actions.Home({data:this.props.data});
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
		 i18n.locale = this.state.locale;
		 i18n.translations=this.state.translations;
		 i18n.fallbacks=this.state.fallbacks;
   		 
		return(
			<View style={styles.login}>
				<Text style={styles.welcome}>{i18n.t('Welcome')} {i18n.t('to')} {i18n.t('Asgardia')}{"\n\n"}</Text>
		
				<Image
					source={require('../../assets/login.jpeg')}
            		style={styles.image}
            	/>
				<View style={styles.form}>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('UserName')} 
					placeholderTextColor='black' ref="name" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {username => this.setState({username})}/>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('Password')}
					secureTextEntry={true} placeholderTextColor='black' ref="pass" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {password => this.setState({password})}/>
					<TouchableOpacity style={styles.button} onPress={this.verifyLogin}>
						<Text style={styles.buttonText}>{i18n.t('Login')} </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.signup}>
					<TouchableOpacity onPress={this.ForgotPassword}>
						<Text style={{fontSize:18,textDecorationLine: 'underline',fontFamily:"Avenir Next",}}>{i18n.t('Forgot')} {i18n.t('Password')}?</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.signup}>
					<Text style={{fontSize:19,fontFamily:"Avenir Next"}}>{i18n.t('Dont')} {i18n.t('have')} {i18n.t('an')} {i18n.t('account')} {i18n.t('yet')}? </Text>
					<TouchableOpacity onPress={this.Signup}>
						<Text style={styles.signupbutton}>{i18n.t('Signup')}</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.button1} onPress={this.Languages}>
					<Text style={styles.buttonText}>{i18n.t('Change')} {i18n.t('Language')}</Text>
				</TouchableOpacity>
			</View>

		)
	}
}


const styles = StyleSheet.create ({
	welcome: {
		fontSize:22,
		fontFamily:"Avenir Next",
		fontWeight:'700',
	},
	image: {
      width: 80, 
      height: 80, 
      borderRadius: 40/2, 
      alignItems: "center",
      zIndex:-1,
    },
	login: {
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop:100
	},
	signup: {
		flexGrow:1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical:15,
		flexDirection:'row'
		
	},
	signupbutton: {
		fontSize:19,
		fontFamily:"Avenir Next",
		fontWeight:'700',
		color:'black'
	},
	button1: {
		backgroundColor:'#585858',
		width:180,
		height:45,
		borderRadius:25,
		marginVertical:10,
		paddingVertical:12,
		marginTop:15,
		color: 'white',
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize:16,
		fontWeight:'800',
		color:'white',
		textAlign: 'center'

	},
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