import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput
} from 'react-native';

import PasswordForm from '../components/PasswordForm';
import {Actions} from 'react-native-router-flux';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default class ForgotPassword extends React.Component{
	constructor(props){
		super(props)
		this.state={
			locale:'',
			fallbacks:false,
			translations:{},
			username:'',
			password:'',
			repeatpass:''


		}
		this.Login=this.Login.bind(this);
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
					Actions.Login({data:this.state.locale})
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

	Login(){
		Actions.Login({data:this.state.locale})
	}

	componentDidMount(){
	this.setState({ 
	locale :this.props.data,
	fallbacks :true,
	translations : {
	  en: 
	  { 
	  	Reset:'Reset', 
	  	Password:'Password',
	  	UserName:'UserName',
	  	"New Password":'New Password',
	  	"Confirm Password":'Confirm Password',
	  	Submit:'Submit',
	  	Back:'Back',
	  	to:'to',
	  	Login:'Login'
	  },
	  
	  ru: 
	  { 
	  	Password:'пароль',
	  	UserName:'UserName',
	  	Login:'Авторизоваться',
	  	Reset:'Сброс',
	  	"New Password":'Новый пароль',
	  	"Confirm Password":'Подтвердите Пароль',
	  	Submit:'Отправить',
	  	Back:'назад',
	  	to:'в'
	  },
	  
	  sp: 
	  {
	  	Password:'Contraseña',
	  	UserName:'Nombre de usuario',
	  	Login:'Iniciar sesión',
	  	Reset:'Reiniciar',
	  	"New Password":'Nueva contraseña',
	  	"Confirm Password":'Confirmar contraseña',
	  	Submit:'Enviar',
	  	Back:'Espalda',
	  	to:'a'
	  },
	  fr: 
	  {
	  	Password:'Mot de passe',
	  	UserName:"Nom d'utilisateur",
	  	Login:"S'identifier",
	  	Reset:'Réinitialiser',
	  	"New Password":'nouveau mot de passe',
	  	"Confirm Password":'Confirmez le mot de passe',
	  	Submit:'Soumettre',
	  	Back:'Arrière',
	  	to:'à'
	  }
	}
	})

}
	render() {
		 i18n.locale = this.state.locale;
		 i18n.translations=this.state.translations;
		 i18n.fallbacks=this.state.fallbacks;
		return(
			<View style={styles.login}>
				<Text style={styles.welcome}>{i18n.t('Reset')} {i18n.t('Password')}{"\n\n"}</Text>
				<View style={styles.form}>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('UserName')}
					placeholderTextColor='black' ref="username" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {username => this.setState({username})}/>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('New Password')}
					secureTextEntry={true} placeholderTextColor='black' ref="password" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {password => this.setState({password})}/>
					<TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('Confirm Password')}
					secureTextEntry={true} placeholderTextColor='black' ref="repeatpass" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {repeatpass => this.setState({repeatpass})}/>
					<TouchableOpacity style={styles.button} onPress={this.forgotPassword}>
						<Text style={styles.buttonText}>{i18n.t('Submit')}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.signup}>
					<TouchableOpacity onPress={this.Login}>
						<Text style={{fontSize:18,textDecorationLine: 'underline',fontFamily:"Avenir Next"}}>{i18n.t('Back')} {i18n.t('to')} {i18n.t('Login')}</Text>
					</TouchableOpacity>
				</View>
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