import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Linking,
	TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';



export default class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
		    locale:'',
		    fallbacks:false,
		    translations:{}
		}
		this.Home=this.Home.bind(this);
		this.Login=this.Login.bind(this);
		this.Contact=this.Contact.bind(this);
		this.HealthCourses=this.HealthCourses.bind(this);
		this.EducationCourses=this.EducationCourses.bind(this);
		this.MyVideos=this.MyVideos.bind(this);
	}
	Login(){
		Actions.Login({data:this.props.data})
	}
	Contact(){
		Actions.Contact({data:this.state.locale})
	}
	Home (){
		Actions.Home({data:this.props.data})
	}
	HealthCourses (){
		Actions.HealthCourses({data:this.state.locale})
	}
	EducationCourses (){
		Actions.EducationCourses({data:this.state.locale})
	}
	MyVideos (){
		Actions.MyVideos({data:this.state.locale})
	}

	componentDidMount(){
    this.setState({ 
    locale :this.props.data,
    fallbacks :true,
    translations : {
    	en: 
	  { 
	  	MENU:'MENU',
	  	HEALTH:'HEALTH',
	  	COURSES:'COURSES',
	  	EDUCATION:'EDUCATION',
	  	CONTACT:'CONTACT',
	  	MY:'MY',
	  	VIDEOS:'VIDEOS'
	  },
	  ru:
	  {
	  	MENU:'МЕНЮ',
	  	HEALTH:'ЗДОРОВЬЕ',
	  	COURSES:'КУРСЫ',
	  	EDUCATION:'ОБРАЗОВАНИЕ',
	  	CONTACT:'CONTACT',
	  	MY:'МОИ',
	  	VIDEOS:'РОЛИКИ'
	  },
	  sp:
	  {
	  	MENU:'MENÚ',
	  	HEALTH:'SALUD',
	  	COURSES:'CURSOS',
	  	EDUCATION:'EDUCACIÓN',
	  	CONTACT:'CONTACTO',
	  	MY:'MI',
	  	VIDEOS:'VIDEOS'
	  },
	  fr:
	  {
	  	MENU:'MENU',
	  	HEALTH:'SANTÉ',
	  	COURSES:'COURS',
	  	EDUCATION:'ÉDUCATION',
	  	CONTACT:'CONTACT',
	  	MY:'MON',
	  	VIDEOS:'VIDÉOS'
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
				<View style={{alignItems:'center'}}>
				<TouchableOpacity onPress={this.Home}>
            <Text style={{fontSize:40, marginLeft:315,marginTop:10,fontWeight:'800'}}>←</Text>
        </TouchableOpacity>

					<Text style={styles.welcome}>{i18n.t('MENU')} {"\n"}</Text>

	            	<TouchableOpacity style={styles.tabs2} onPress={this.HealthCourses}><Text style={styles.tabs}>{i18n.t('HEALTH')} {i18n.t('COURSES')}</Text></TouchableOpacity>
	            	<TouchableOpacity style={styles.tabs1} onPress={this.EducationCourses}><Text style={styles.tabs}>{i18n.t('EDUCATION')} {i18n.t('COURSES')}</Text></TouchableOpacity>
	            	<TouchableOpacity style={styles.tabs1} onPress={this.Contact}><Text style={styles.tabs}>{i18n.t('CONTACT')}</Text></TouchableOpacity>
	            	<TouchableOpacity style={styles.tabs1} onPress={this.MyVideos}><Text style={styles.tabs}>{i18n.t('MY')} {i18n.t('VIDEOS')}</Text></TouchableOpacity>
	            </View>
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
	tabs: {
		width:320,
		height:75,
		paddingHorizontal:18,
		marginVertical:10,
		paddingVertical:25,
		fontFamily:"Avenir Next",
		fontSize:16,
		color: 'black',
		textAlign:'center',
		justifyContent:'center',
		alignItems:'center',
		fontSize:18,
		fontWeight:'700'
	},
	tabs2:{
		borderStyle:'solid',
        borderBottomWidth: 1,
        
	},
	tabs1:{
		borderStyle:'solid',
        borderBottomWidth: 1
	},
	image1: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 60, 
      height: 60, 
      borderRadius: 40/2,
      marginLeft:320,
      marginTop:30
    },
    welcome: {
		fontSize:22,
		fontWeight:'700',
		fontFamily:"Avenir Next",
		marginTop:10,
		textAlign:'center'
	},
	down: {
      flexDirection: "row"
    }
});