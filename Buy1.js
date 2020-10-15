import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	TouchableOpacity,
	Picker
} from 'react-native';

import Form from '../components/BuyForm2';
import {Actions} from 'react-native-router-flux';

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default class Login extends React.Component{
	constructor(props) {

    super(props)
    this.state = {
      dataSource: [],
      locale:'',
      fallbacks:false,
      translations:{},
      cardname:'',
      cardnum:'',
      expdate:'',
      cvv:'',
      PickerValue:'',
    }
    this.EducationCourses=this.EducationCourses.bind(this);
  }

	EducationCourses (){
		Actions.EducationCourses({data:this.props.data})
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
          Actions.Confirmation1({data:this.state.locale})
        }
        else{
          Actions.Confirmation1({data:this.state.locale})
        }
      })
      .catch((error)=>{
        console.error(error);
      })
  }

	componentDidMount(){
    this.setState({ 
    locale :this.props.data,
    fallbacks :true,
    translations : {
    en: 
	  { 
	  	"Payment Page":'Payment Page',
	  	CardholderName:'CardholderName',
	  	"Card number":'Card number',
	  	"Exp date MM/YY":'Exp date MM/YY',
	  	CVV:'CVV',
	  	Astronomy:'Astronomy',
	  	Kinematics:'Kinematics',
	  	"Relativity and Astrophysics":'Relativity and Astrophysics',
      	"Spatial data Visualization":'Spatial data Visualization',
      	 Buy:'Buy',
      	 Selected:'Selected'
	  },
	  ru:
	  {
	   	"Payment Page":'Страница оплаты',
	  	CardholderName:'Имя владельца карты',
	  	"Card number":'Номер карты',
	  	"Exp date MM/YY":'Дата экспозиции ММ / ГГ',
	  	CVV:'CVV',
		Astronomy:'астрономия',
	  	Kinematics:'кинематика',
	  	"Relativity and Astrophysics":'Относительность и Астрофизика',
      	"Spatial data Visualization":'Визуализация пространственных данных',
      	Buy:'купить',
      	Selected:'выбранный'
	  },
	  sp:
	  {
	    "Payment Page":'Página de pago',
	  	CardholderName:'Nombre del titular de la tarjeta',
	  	"Card number":'Número de tarjeta',
	  	"Exp date MM/YY":'Fecha de exp. MM / AA',
	  	CVV:'CVV',
	 	Astronomy:'Astronomía',
	  	Kinematics:'Cinemática',
	  	"Relativity and Astrophysics":'Relatividad y Astrofísica',
      	"Spatial data Visualization":'Visualización de datos espaciales',
      	 Buy:'Comprar',
      	 Selected:'Seleccionado'
	  },
	  fr:
	  {
	    "Payment Page":'Page de paiement',
	  	CardholderName:'Nom du titulaire',
	  	"Card number":'Numéro de carte',
	  	"Exp date MM/YY":'Date exp MM / YY',
	  	CVV:'CVV',
		Astronomy:'Astronomie',
	  	Kinematics:'Cinématique',
	  	"Relativity and Astrophysics":'Relativité et astrophysique',
      	"Spatial data Visualization":'Visualisation des données spatiales',
      	 Buy:'Acheter',
      	 Selected:'Choisi'
	  }
	 }
	 })
}
	render() {
		  i18n.locale = this.state.locale;
      i18n.translations=this.state.translations;
      i18n.fallbacks=this.state.fallbacks;
		return(
						<View>
			<TouchableOpacity onPress={this.EducationCourses}>
            <Text style={{fontSize:40, marginLeft:15,marginTop:10,fontWeight:'700',fontFamily:"Avenir Next"}}>←</Text>
        </TouchableOpacity>


			<View style={styles.login}>
				<Text style={styles.welcome}>{i18n.t('Payment Page')}{"\n"}</Text>
				 <View style={styles.form}>
			      <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('CardholderName')} 
			        placeholderTextColor='black' ref="cardname" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {cardname => this.setState({cardname})}/>
			        <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('Card number')}
			        placeholderTextColor='black' ref="cardnumber" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {cardnum => this.setState({cardnum})}/>
			        <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('Exp date MM/YY')} 
			        placeholderTextColor='black' ref="expdate" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {expdate=> this.setState({expdate})}/>
			        <TextInput style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder={i18n.t('CVV')}
			        placeholderTextColor='black' ref="cvv" autoCapitalize = 'none' selectTextOnFocus={true} onChangeText = {cvv => this.setState({cvv})}/>
			        <TouchableOpacity style={styles.inputbox1}>
			        <Text style={styles.inputbox2}> {i18n.t('Selected')} {this.state.PickerValue}</Text>
			        </TouchableOpacity>
			         <Picker
			         style ={{position:'absolute',bottom:0,left:0,right:0,top:350}}
			         selectedValue = {this.state.itemValue}
			         onValueChange ={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
			         >
			        
			         <Picker.Item label={i18n.t('Astronomy')} value="Astronomy" />
			         <Picker.Item label={i18n.t('Kinematics')} value="Kinematics" />
			         <Picker.Item label={i18n.t('Relativity and Astrophysics')} value="Relativity and Astrophysics" />
			         <Picker.Item label={i18n.t('Spatial data Visualization')} value="Spatial Data Visualization" />
			         </Picker>
			        <TouchableOpacity style={styles.button} onPress={this.verifybuy}>
			          <Text style={styles.buttonText}>{i18n.t('Buy')}</Text>
			        </TouchableOpacity>
			      </View>
				
			</View>
			</View>

		)
	}
}

const styles = StyleSheet.create ({
	welcome: {
		fontSize:22,
		fontWeight:'800',
		fontFamily:"Avenir Next",
		textAlign:'center'
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
		fontWeight:'800',
		color:'black'
	},
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