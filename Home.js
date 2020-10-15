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
  this.Menu=this.Menu.bind(this);
  this.Login=this.Login.bind(this);
  this.EditProfile=this.EditProfile.bind(this);
  }
	
  Login(){
        Actions.Login({data:this.props.data})
    }
	
	EditProfile(){
		Actions.EditProfile({data:this.props.data})
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
        Welcome: 'Welcome',
        to:'to',
        Asgardia:'Asgardia',
        asgardia:'asgardia',
        is:'is',
        a:'a',
        free:'free',
        and:'and',
        unified:'unified',
        space:'space',
        nation:'nation',
        The:'The',
        objectives:'objectives',
        of:'of',
        the:'the',
        are:'are',
        To:'To',
        ensure:'ensure',
        peace:'peace',
        equal:'equal',
        opportunities:'opportunities',
        for:'for',
        all:'all',
        Asgardians:'Asgardians',
        currently:'currently',
        residing:'residing',
        on:'on',
        Earth:'Earth',
        regardless:'regardless',
        their:'their',
        citizenship:'citizenship',
        protection:'protection',
        entire:'entire',
        humankind:'humankind',
        For:'For',
        more:'more',
        information:'information',
        about:'about',
        visit:'visit',
        We:'We',
        not:'not',
        best:'best',
        future:'future',
        One:'One',
        humanity:'humanity',
        unity:'unity',
        in:'in',
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

      },
      
      ru: 
      { 
        Welcome: 'желанный',
        to:'в',
        Asgardia:'Asgardia',
        asgardia:'asgardia',
        is:'является',
        a:'a',
        free:'свободно',
        and:'и',
        unified:'унифицированы',
        space:'пространство',
        nation:'нация',
        The:'The',
        objectives:'цели',
        of:'из',
        the:'the',
        are:'являются',
        To:'к',
        ensure:'обеспечивать',
        peace:'мир',
        equal:'равный',
        opportunities:'возможности',
        for:'для',
        all:'все',
        Asgardians:'Asgardians',
        currently:'В настоящее время',
        residing:'проживающих',
        on:'на',
        Earth:'земной шар',
        regardless:'несмотря на',
        their:'их',
        citizenship:'гражданство',
        protection:'защита',
        entire:'все',
        humankind:'человечество',
        For:'Для',
        more:'Больше',
        information:'Информация',
        about:'около',
        visit:'посещение',
        We:'Мы',
        not:'не',
        best:'Лучший',
        future:'будущее',
        One:'Один',
        humanity:'человечество',
        unity:'единство',
        in:'в',
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
        asgardia:'asgardia',
        is:'es',
        a:'uno',
        free:'gratis',
        and:'y',
        unified:'unificado',
        space:'espacio',
        nation:'nación',
        The:'El',
        objectives:'objetivos',
        of:'de',
        the:'el',
        are:'son',
        To:'A',
        ensure:'asegurar',
        peace:'paz',
        equal:'igual',
        opportunities:'oportunidades',
        for:'para',
        all:'todas',
        Asgardians:'Asgardianos',
        currently:'actualmente',
        residing:'residente',
        on:'en',
        Earth:'Tierra',
        regardless:'independientemente',
        their:'su',
        citizenship:'ciudadanía',
        protection:'proteccion',
        entire:'todo',
        humankind:'humanidad',
        For:'por',
        more:'más',
        information:'información',
        about:'acerca de',
        visit:'visitar',
        We:'Nosotros',
        not:'no',
        best:'mejor',
        future:'futuro',
        One:'Uno',
        humanity:'humanidad',
        unity:'unidad',
        in:'en',
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
        asgardia:'asgardia',
        is:'est',
        a:'un',
        free:'libre',
        and:'et',
        unified:'unifié',
        space:'espace',
        nation:'nation',
        The:'Le',
        objectives:'objectifs',
        of:'de',
        the:'le',
        are:'sont',
        To:'À',
        ensure:'assurer',
        peace:'paix',
        equal:'égal',
        opportunities:'Opportunités',
        for:'pour',
        all:'tout',
        Asgardians:'Asgardiens',
        currently:'actuellement',
        residing:'résidant',
        on:'sur',
        Earth:'Terre',
        regardless:'indépendamment',
        their:'leur',
        citizenship:'citoyenneté',
        protection:'protection',
        entire:'tout',
        humankind:'humanité',
        For:'Pour',
        more:'plus',
        information:'information',
        about:'à propos',
        visit:'visite',
        We:'nous',
        not:'ne pas',
        best:'meilleur',
        future:'futur',
        One:'Un',
        humanity:'humanité',
        unity:'unité',
        in:'dans',
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
	




  render() {

		i18n.locale = this.state.locale;
    i18n.translations=this.state.translations;
    i18n.fallbacks=this.state.fallbacks;
		return(
			<View>
				<View style={{flexDirection:"row"}}>
						<TouchableOpacity onPress={this.Menu}>
              <Text style={{fontSize:40, marginLeft:25,marginTop:10,fontWeight:'800'}}>☰ </Text>
            </TouchableOpacity>
		        <TouchableOpacity onPress={this.EditProfile}>
  						<Image
  							source={require('../../assets/prof.png')}
  		            		style={styles.image2}
  		            	/>
		        </TouchableOpacity>
		    </View>
            	<Text style={{fontSize:30,fontWeight:'700', textAlign:'center',marginTop:15,fontFamily:"Avenir Next",
}}>ASGARDIA</Text>
            	<Text style={{fontSize:25,fontWeight:'600', textAlign:'center',marginTop:15,fontFamily:"Avenir Next",
}}>{i18n.t('We')} {i18n.t('are')} {i18n.t('not')} {i18n.t('the')} {i18n.t('best')}, {i18n.t('We')} {i18n.t('are')} {i18n.t('the')} {i18n.t('future')}.{i18n.t('One')} {i18n.t('humanity')} - {i18n.t('One')} {i18n.t('unity')}.</Text>
				<Text style={{fontSize:18,fontWeight:'500', width:350,marginLeft:30,marginTop:15,textAlign:'center',fontFamily:"Avenir Next",
}}>{i18n.t('Asgardia')} {i18n.t('is')} {i18n.t('a')} {i18n.t('free')} {i18n.t('and')} {i18n.t('unified')} {i18n.t('space')} {i18n.t('nation')}. 
				{i18n.t('The')} {i18n.t('objectives')} {i18n.t('of')} {i18n.t('the')} {i18n.t('nation')} {i18n.t('are')}:{"\n\n"}      
				1){i18n.t('To')} {i18n.t('ensure')} {i18n.t('peace')} {i18n.t('is')} {i18n.t('space')}.{"\n"}
				2){i18n.t('To')} {i18n.t('ensure')} {i18n.t('equal')} {i18n.t('opportunities')} {i18n.t('in')} {i18n.t('space')} {i18n.t('for')} {i18n.t('all')} {i18n.t('Asgardians')} {i18n.t('currently')} {i18n.t('residing')} {i18n.t('on')} {i18n.t('Earth')}, {i18n.t('regardless')} {i18n.t('of')} {i18n.t('their')} {i18n.t('Earth')} {i18n.t('citizenship')}.{"\n"}
				3){i18n.t('To')} {i18n.t('ensure')} {i18n.t('the')} {i18n.t('protection')} {i18n.t('of')} {i18n.t('entire')} {i18n.t('humankind')}.{"\n"}
				
				</Text>
				<Text style={{fontSize:18,fontWeight:'700', textAlign:'center',marginTop:15,fontFamily:"Avenir Next",
}}>{i18n.t('For')} {i18n.t('more')} {i18n.t('information')} {i18n.t('about')} {i18n.t('Asgardia')}, {i18n.t('visit')}</Text>
				<TouchableOpacity onPress={ ()=>{ Linking.openURL('https://asgardia.space/en/')}}>
				<Text style={{fontSize:19,fontWeight:'700', textAlign:'center', textDecorationLine: 'underline'}}>{i18n.t('asgardia')}.{i18n.t('space')}{"\n"}
				</Text></TouchableOpacity>
				
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
	login: {
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop:80
	},
	image: {
      width: 80, 
      height: 80, 
      borderRadius: 40/2,
      marginLeft:40,
      marginTop:20,
    },
    image2: {
      width: 70, 
      height: 70, 
      borderRadius: 40/2,
      marginTop:10,
      marginLeft:230,
      flexDirection: 'row', 
      justifyContent:'flex-end', 
      alignItems: 'flex-end'
    },
    image1: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 80, 
      height: 80, 
      borderRadius: 40/2,
      marginLeft:170
    },
    down: {
      flexDirection: "row"
    }
});