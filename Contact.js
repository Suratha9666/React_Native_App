import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default class Contact extends React.Component{
	constructor(props){
		super(props)
		this.state={
		    locale:'',
		    fallbacks:false,
		    translations:{}
		}
		this.Menu=this.Menu.bind(this);
		this.Login=this.Login.bind(this);
	}
	Login(){
		Actions.Login({data:this.props.data})
	}
	Menu(){
		Actions.Menu({data:this.props.data})
	}

	componentDidMount(){
    this.setState({ 
    locale :this.props.data,
    fallbacks :true,
    translations : {
    	en: 
	  { 
	  	CONTACT:'CONTACT',
	  	asgardia:'asgardia',
	  	space:'space',
	  	US:'US',
	  	General:'General',
	  	Queries:'Queries',
	  	citizens:'citizens',
	  	Support:'Support',
	  	support:'support',
	  	Press:'Press',
	  	Inquiries:'Inquiries',
	  	media:'media',
	  	Editorial:'Editorial',
	  	editorial:'editorial',
	  	Team:'Team'
	  },
	  ru:
	  {
	  	CONTACT:'CONTACT',
	  	asgardia:'asgardia',
	  	space:'пространство',
	  	US:'НАС',
	  	General:'Общее',
	  	Queries:'Запросы',
	  	citizens:'граждане',
	  	Support:'Служба поддержки',
	  	support:'служба поддержки',
	  	Press:'Нажмите',
	  	Inquiries:'расспросы',
	  	media:'СМИ',
	  	Editorial:'редакционный',
	  	editorial:'редакционный',
	  	Team:'команда'
	  
	  },
	  sp:
	  {
	  	CONTACT:'CONTACTO',
	  	asgardia:'asgardia',
	  	space:'espacio',
	  	US:'NOSOTROS',
	  	General:'General',
	  	Queries:'Consultas',
	  	citizens:'Ciudadanos',
	  	Support:'Apoyo',
	  	support:'apoyo',
	  	Press:'prensa',
	  	Inquiries:'Inquiries',
	  	media:'Consultas',
	  	Editorial:'Editorial',
	  	editorial:'editorial',
	  	Team:'Equipo'
	  },
	  fr:
	  {
	  	CONTACT:'CONTACT',
	  	asgardia:'asgardia',
	  	space:'espace',
	  	US:'NOUS',
	  	General:'Général',
	  	Queries:'Requêtes',
	  	citizens:'citoyens',
	  	Support:'Soutien',
	  	support:'soutien',
	  	Press:'presse',
	  	Inquiries:'Demandes',
	  	media:'médias',
	  	Editorial:'Éditorial',
	  	editorial:'éditorial',
	  	Team:'Équipe'
	  	
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
			<TouchableOpacity onPress={this.Menu}>
            <Text style={{fontSize:40, marginLeft:15,marginTop:10,fontWeight:'700',fontFamily:"Avenir Next"}}>←</Text>
        </TouchableOpacity>
				<Text style={styles.welcome}>{i18n.t('CONTACT')} {i18n.t('US')}{"\n"}</Text>
				<Text style={styles.head}>{i18n.t('General')} {i18n.t('Queries')}:</Text>
				<Text style={styles.email}>{i18n.t('citizens')}@{i18n.t('asgardia')}.{i18n.t('space')}{"\n\n"}</Text>
				<Text style={styles.head}>{i18n.t('Support')}:</Text>
				<Text style={styles.email}>{i18n.t('support')}@{i18n.t('asgardia')}.{i18n.t('space')}{"\n\n"}</Text>
				<Text style={styles.head}>{i18n.t('Press')} {i18n.t('Inquiries')}:</Text>
				<Text style={styles.email}>{i18n.t('media')}@{i18n.t('asgardia')}.{i18n.t('space')}{"\n\n"}</Text>
				<Text style={styles.head}>{i18n.t('Editorial')} {i18n.t('Team')}:</Text>
				<Text style={styles.email}>{i18n.t('editorial')}@{i18n.t('asgardia')}.{i18n.t('space')}{"\n\n"}</Text>
				<View style={styles.down}>
					
					<TouchableOpacity onPress={this.Login}>
						<Image
							source={require('../../assets/logout.png')}
			        		style={styles.image1}
			            />
			        </TouchableOpacity>
			    </View>
			</View>

		)
	}
}

const styles = StyleSheet.create ({
	welcome: {
		fontSize:25,
		fontWeight:'700',
		textAlign:'center',
		fontFamily:"Avenir Next",
		marginTop:10
	},
	head: {
		fontSize:21,
		fontFamily:"Avenir Next",
		fontWeight:'600',
		textAlign:'center'
	},
	email: {
		fontSize:20,
		fontFamily:"Avenir Next",
		fontWeight:'500',
		textAlign:'center'
	},
	image1: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 60, 
      height: 60, 
      borderRadius: 40/2,
      marginLeft:320
    },
    down: {
      flexDirection: "row"
    }

});