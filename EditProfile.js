import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    AsyncStorage,
    TouchableOpacity,
    Image,
    Button

} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import {Actions} from 'react-native-router-flux';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


export default class EditProfile extends React.Component {
   Home (){
        Actions.Home({data:this.state.locale})
   }
    Menu(){
        Actions.Menu({data:this.state.locale})
    }

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            reason:'',
            contribution:'',
            reasons:[],
            contributions:[],
            locale:'',
            fallbacks:false,
            translations:{}
        }
        this.getReasons = this.getReasons.bind(this);
        this.getContributions = this.getContributions.bind(this);
        this.Home=this.Home.bind(this);
        this.Menu=this.Menu.bind(this);
    }


    componentDidMount() {
        this.getProfileData();
        this.getReasons();
        this.getContributions();

        this.setState({ 
locale :this.props.data,
fallbacks :true,
translations : {
  en: 
  { 
   
    UserName:'UserName',
    Login:'Login',
    "Confirm Password":'Confirm Password',
    "Account Registration":'Account Registration',
    Email:'Email',
    FirstName:'FirstName',
    LastName:'LastName',
    "Reason for joining":'Reason for joining',
    Contribution:'Contribution',
    "Edit Profile":'Edit Profile',
    "Update Profile":'Update Profile'

  },
  
  ru: 
  { 
    
    UserName:'UserName',
    Login:'Авторизоваться',
    "Confirm Password":'Подтвердите Пароль',
    "Account Registration":'Регистрация аккаунта',
    Email:'Эл. адрес',
    FirstName:'Имя',
    LastName:'Фамилия',
    "Reason for joining":'Причина присоединения',
    Contribution:'Вклад',
    "Edit Profile":'Редактировать профиль',
    "Update Profile":'Обновить профиль'
    
  },
  
  sp: 
  {
    
    UserName:'Nombre de usuario',
    Login:'Iniciar sesión',
    "Confirm Password":'Confirmar contraseña',
    "Account Registration":'Registro de cuenta',
    Email:'Email',
    FirstName:'Nombre de pila',
    LastName:'Apellido',
    "Reason for joining":'Motivo para unirse',
    Contribution:'Contribución',
    "Edit Profile":'Editar perfil',
    "Update Profile":'Actualización del perfil'
  

  },
  fr: 
  {
 
    UserName:"Nom d'utilisateur",
    Login:"S'identifier",
    "Confirm Password":'Confirmez le mot de passe',
    "Account Registration":'Enregistrement du Compte',
    Email:'Email',
    FirstName:'Prénom',
    LastName:'Nom de famille',
    "Reason for joining":"Raison de l'adhésion",
    Contribution:'Contribution',
    "Edit Profile":'Editer le profil',
    "Update Profile":'Mettre à jour le profil'
  
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
            reasons:temp
        });
    })
    .catch(error => {
        console.error(error);
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
            contributions:temp
        });
    })
    .catch(error => {
        console.error(error);
    });
   }

   setSelectedStateValue = (ddlValue) =>{
        this.setState({
            reason:ddlValue
        });
    }

    setSelectedStateValue1 = (ddlValue) =>{
        this.setState({
            contribution:ddlValue
        });
    }



    getProfileData() {
      /*  var userName = "";

        AsyncStorage.multiGet(['username']).then((data) => {
            userName = data[0][1];*/

            var url = "http://192.168.64.2/ProfileDisplay.php";
            fetch(url, {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    //username: userName
                })
            })
                .then(response => response.json())
                .then(responseJson => {
                    //alert(JSON.stringify(responseJson));
                    this.setState({
                        userId: responseJson["userid"],
                        username: responseJson["username"],
                        email: responseJson["email"],
                        firstname: responseJson["firstname"],
                        lastname: responseJson["lastname"],
                        reason: responseJson["reason"],
                        contribution: responseJson["contribution"]

                    });
                })
                .catch(error => {
                    console.error(error);
                });

  //      });

    }


    updateProfile = () => {
        const {username} = this.state;
        const {email} = this.state;
        const {firstname} = this.state;
        const {lastname} = this.state;
        const {reason} = this.state;
        const {contribution} = this.state;

        fetch('http://192.168.64.2/ProfileUpdate.php',{
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
                reason:reason,
                contribution:contribution
            })

        })
        .then((response) => response.json())
        .then((responseJson) => {
             alert(responseJson);
        /*    if(responseJson=='Profile Updated Successfully'){
                let user = this.refs["user"];
                let email = this.refs["email"];
                let fname = this.refs["fname"];
                let lname = this.refs["lname"];


                user.clear();
                email.clear();
                fname.clear();
                lname.clear();


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

        return (
            <View>

         <TouchableOpacity onPress={this.Home}>
            <Text style={{fontSize:40, marginLeft:15,marginTop:10,fontWeight:'700',fontFamily:"Avenir Next"}}>←</Text>
        </TouchableOpacity>

                <View style={styles.form}>  

                    
                    <Text style={styles.welcome}>{i18n.t('Edit Profile')}{"\n"} </Text>
                    
                    <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('UserName')} 
                        placeholderTextColor='black' autoCapitalize='none' ref="user"
                        selectTextOnFocus={true}
                        value={this.state.username} editable={false}
                        onChangeText={username => this.setState({ username })} />

                    <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('Email')} 
                        placeholderTextColor='black' autoCapitalize='none' ref="email" selectTextOnFocus={true}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />

                    <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('FirstName')}  
                        placeholderTextColor='black' autoCapitalize='none' ref="fname" selectTextOnFocus={true}
                        value={this.state.firstname}
                        onChangeText={firstname => this.setState({ firstname })} />

                    <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('LastName')} 
                        placeholderTextColor='black' autoCapitalize='none' ref="lname" selectTextOnFocus={true}
                        value={this.state.lastname}
                        onChangeText={lastname => this.setState({ lastname })} />

                     <Dropdown
                        containerStyle={{width:330,backgroundColor:'rgba(255,255,255,0.3)',borderBottomColor: 'transparent',borderRadius:25,height:60,paddingHorizontal:18,marginVertical:8}}
                        baseColor='black'
                        label={i18n.t('Reason for joining')} 
                        value={this.state.reason}
                        data={this.state.reasons}
                        onChangeText={(value,index,data)=>this.setSelectedStateValue(value)}
                    />

                    <Dropdown
                        containerStyle={{width:330,backgroundColor:'rgba(255,255,255,0.3)',borderBottomColor: 'black',borderRadius:25,height:60,paddingHorizontal:18,marginVertical:7}}
                        baseColor='black'
                        label={i18n.t('Contribution')} 
                        value={this.state.contribution}
                        data={this.state.contributions}
                        onChangeText={(value,index,data)=>this.setSelectedStateValue1(value)}
                    />

             


                    <TouchableOpacity style={styles.button} onPress={this.updateProfile}>
                        <Text style={styles.buttonText}>{i18n.t('Update Profile')}</Text>
                    </TouchableOpacity>
                </View>

                
                
            </View>

       


        )
    }
}

const styles = StyleSheet.create({
    form: {
        justifyContent: "center",
        alignItems: "center"
    },
    inputbox: {
        width: 300,
        height: 45,
        borderStyle:'solid',
        borderBottomWidth: 1,
        fontFamily:"Avenir Next",
        paddingHorizontal: 18,
        marginVertical: 8,
        fontSize: 16,
        color: 'black'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '800',
        color: 'white',
        textAlign: 'center'

    },
    button: {
        backgroundColor:'#585858',
        width:150,
        height: 45,
        borderRadius: 25,
        marginVertical: 18,
        paddingVertical: 12
    },
    dropDown: {
        width: 300,
        height: 45,
        fontFamily:"Avenir Next",
        backgroundColor: 'rgba(255,255,255,0.3)',
        color: 'black',
        textAlign: 'center',

    },
    welcome: {
        fontSize:22,
        fontWeight:'700',
        fontFamily:"Avenir Next",
        marginTop:10,
        textAlign:'center'
    }
});