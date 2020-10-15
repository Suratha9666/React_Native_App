import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import RadioButton from './RadioButton';
import {Actions} from 'react-native-router-flux';

const options = [
	{
		key: 'en',
		text: 'English',
	},
	{
		key: 'ru',
		text: 'Russian',
	},
	{
		key: 'sp',
		text: 'Spanish',
	},
	{
		key: 'fr',
		text: 'French',
	},
];


export default class App extends React.Component {

	constructor(props){
		super(props)
		this.state={
			locale:'',
			fallbacks:false,
			translations:{}
		}
		this.Login=this.Login.bind(this);
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
	  	"Choose your language":'Choose your language',
	  },
	  ru:
	  {
	  	"Choose your language":'Выберите ваш язык',
	  },
	  sp:
	  {
	  	"Choose your language":'Elige tu idioma',
	  },
	  fr:
	  {
	  	"Choose your language":'Choisissez votre langue',
	  }
	  }
	})

}
  render() {
  	 i18n.locale = this.state.locale;
	 i18n.translations=this.state.translations;
	 i18n.fallbacks=this.state.fallbacks;
    return (
    <View>
		 <TouchableOpacity onPress={this.Login}>
	        <Text style={{fontSize:40,marginLeft:18,marginTop:10,fontWeight:'700',fontFamily:"Avenir Next"}}>←</Text>
	    </TouchableOpacity>
	      <View style={styles.container}>
		  	<Text style={styles.welcome}>{i18n.t('Choose your language')}</Text>
	        <RadioButton options={options} />
	      </View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
		fontSize:22,
		fontFamily:"Avenir Next",
		fontWeight:'700',
		marginTop:40,

	}
});
