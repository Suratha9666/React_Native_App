``
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import {Actions} from 'react-native-router-flux';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


export default class RadioButtons extends Component {
	constructor(props){
	super(props)
	this.state={
	  value:null,
	  locale:'',
	  fallbacks:false,
	  translations:{}
	}
	this.change=this.change.bind(this);
  }

  change (){
  	Actions.Login({data:this.state.value});
  }

  componentDidMount(){
	this.setState({ 
	locale :this.props.data,
	fallbacks :true,
	translations : {
	  en: 
	  { 
	  	Confirm:'Confirm',
	  	English:'English',
	  	Russian:'Russian',
	  	Spanish:'Spanish',
	  	French:'French'
	  },
	  ru:
	  {
	  	Confirm:'Подтверждение',
	  	English:'английский',
	  	Russian:'русский',
	  	Spanish:'испанский',
	  	French:'французский язык'
	  },
	  sp:
	  {
	  	Confirm:'Confirmar',
	  	English:'Inglés',
	  	Russian:'Ruso',
	  	Spanish:'Español',
	  	French:'Francés'
	  },
	  fr:
	  {
	  	Confirm:'Confirmer',
	  	English:'Anglais',
	  	Russian:'russe',
	  	Spanish:'Espagnol',
	  	French:'Français'
	  }
	  }
	})

}
  
   //change = () =>{
   //i18n.locale = this.state.value;
   //i18n.fallbacks = true;
    
  //}

	render() {
		const { options } = this.props;
		const { value } = this.state;

		 i18n.locale = this.state.value;
		 i18n.translations=this.state.translations;
	 	i18n.fallbacks=this.state.fallbacks;

		return (
			<View style={styles.top}>
				{options.map(item => {
					return (
					<View key={item.key} style={styles.buttonContainer}>
						<Text style={styles.info}>{i18n.t(item.text)}</Text>
						<TouchableOpacity
							style={styles.circle}
							onPress={() => {
								this.setState({
									value: item.key,
								});
							}}
						>
							{value === item.key && <View style={styles.checkedCircle} />}
						</TouchableOpacity>
					</View>

					);
				})}
				<TouchableOpacity style={styles.button} onPress={this.change}>
					<Text style={styles.buttonText}>{i18n.t('Confirm')}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	top: {
		marginTop:80
	},

	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30,
		
	},

	circle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#ACACAC',
		alignItems: 'center',
		justifyContent: 'center',
	},
  
	checkedCircle: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#794F9B',
	},
	info: {
		fontSize:22,
    	fontWeight:'600'
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
	}
		
});
