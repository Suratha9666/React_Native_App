import React from 'react';
import {
	StyleSheet,
	Text,
  TextInput,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

import SignupForm from '../components/SignupForm';
import {Actions} from 'react-native-router-flux';

import { Dropdown } from 'react-native-material-dropdown';


import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default class Signup extends React.Component{
  Login(){
    Actions.Login({data:this.state.locale})
  }
	constructor(props){
		super(props)
		this.state={
			locale:'',
      fallbacks:false,
      translations:{},
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
    this.Login=this.Login.bind(this);
    this.getReasons = this.getReasons.bind(this);
    this.getContributions = this.getContributions.bind(this);
	}
	goBacK(){
		Actions.pop();
	}

componentDidMount(){
this.getReasons();
this.getContributions();
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
  	Login:'Login',
    "Confirm Password":'Confirm Password',
    "Account Registration":'Account Registration',
    Email:'Email',
    FirstName:'FirstName',
    LastName:'LastName',
    "Reason for joining":'Reason for joining',
    Contribution:'Contribution',
    "Already have an account":'Already have an account',
    "Sign in":'Sign in',
    "support the concept of space nation":'support the concept of space nation'

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
  	Login:'Авторизоваться',
    "Confirm Password":'Подтвердите Пароль',
    "Account Registration":'Регистрация аккаунта',
    Email:'Эл. адрес',
    FirstName:'Имя',
    LastName:'Фамилия',
    "Reason for joining":'Причина присоединения',
    Contribution:'Вклад',
    "Already have an account":'Уже есть аккаунт',
    "Sign in":'войти в систему',
    "support the concept of space nation":'поддержать концепцию космической нации'
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
  	Login:'Iniciar sesión',
    "Confirm Password":'Confirmar contraseña',
    "Account Registration":'Registro de cuenta',
    Email:'Email',
    FirstName:'Nombre de pila',
    LastName:'Apellido',
    "Reason for joining":'Motivo para unirse',
    Contribution:'Contribución',
    "Already have an account":'Ya tienes una cuenta',
    "Sign in":'Registrarse',
    "support the concept of space nation":'apoyar el concepto de nación espacial'

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
  	Login:"S'identifier",
    "Confirm Password":'Confirmez le mot de passe',
    "Account Registration":'Enregistrement du Compte',
    Email:'Email',
    FirstName:'Prénom',
    LastName:'Nom de famille',
    "Reason for joining":"Raison de l'adhésion",
    Contribution:'Contribution',
    "Already have an account":'Vous avez déjà un compte',
    "Sign in":'se connecter',
    "support the concept of space nation":'soutenir le concept de nation spatiale'
  }
}
})

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
          Actions.Login({data:this.state.locale})
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
		 i18n.locale = this.state.locale;
     i18n.translations=this.state.translations;
     i18n.fallbacks=this.state.fallbacks;

		return(
			<View style={styles.login}>
				<Text style={styles.welcome}>{"\n"}{i18n.t('Account Registration')}</Text>
				<View style={styles.form}>

          <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('UserName')} 
          placeholderTextColor='black' autoCapitalize = 'none' ref="user" selectTextOnFocus={true} onChangeText = {username => this.setState({username})}/>
          <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('Email')} 
          placeholderTextColor='black' autoCapitalize = 'none' ref="email" selectTextOnFocus={true} onChangeText = {email => this.setState({email})}/>
          <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('FirstName')}  
          placeholderTextColor='black' autoCapitalize = 'none' ref="fname" selectTextOnFocus={true} onChangeText = {firstname => this.setState({firstname})}/>
          <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('LastName')} 
          placeholderTextColor='black' autoCapitalize = 'none' ref="lname" selectTextOnFocus={true} onChangeText = {lastname => this.setState({lastname})}/>
          <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('Password')} 
          secureTextEntry={true} placeholderTextColor='black' ref="pass" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {password => this.setState({password})}/>
          <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('Confirm Password')} 
          secureTextEntry={true} placeholderTextColor='black' autoCapitalize = 'none' ref= "cnf" selectTextOnFocus={true} onChangeText = {repeatpass => this.setState({repeatpass})}/>

          
          
          <Dropdown
            containerStyle={{width:300,backgroundColor:'rgba(255,255,255,0.3)',borderBottomColor: 'transparent',borderRadius:25,height:60,paddingHorizontal:18,marginVertical:7,fontFamily:"Avenir Next",}}
            baseColor='black'
            label={i18n.t('Reason for joining')} 
            data={this.state.reason}
            value={this.state.ddlSelectedValue}
            onChangeText={(value,index,data)=>this.setSelectedStateValue(value)}
          />

          <Dropdown
            containerStyle={{width:300,backgroundColor:'rgba(255,255,255,0.3)',borderBottomColor: 'transparent',borderRadius:25,height:60,paddingHorizontal:18,marginVertical:7}}
            baseColor='black'
            label={i18n.t('Contribution')} 
            data={this.state.contribution}
            value={this.state.ddlSelectedValue1}
            onChangeText={(value,index,data)=>this.setSelectedStateValue1(value)}
          />
          
          <TouchableOpacity style={styles.button} onPress={this.userRegister}>
            <Text style={styles.buttonText}>{i18n.t('Signup')} </Text>
          </TouchableOpacity>
        </View> 
				<View style={styles.signup}>
					<Text style={{fontSize:19,fontFamily:"Avenir Next"}}>{i18n.t('Already have an account')}? </Text>
					<TouchableOpacity onPress={this.goBacK}>
						<Text style={styles.signupbutton}>{i18n.t('Sign in')}</Text>
					</TouchableOpacity>
				</View>
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
  },
	welcome: {
		fontSize:22,
		marginTop:10,
		fontFamily:"Avenir Next",
		fontWeight:'700',
	},
	login: {
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop:40
	},
	signup: {
		flexGrow:1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical:8,
		flexDirection:'row'
		
	},
	signupbutton: {
		fontSize:19,
		fontFamily:"Avenir Next",
		fontWeight:'700',
		color:'black'
	}

});