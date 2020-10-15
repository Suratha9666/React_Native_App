import React, { Component } from 'react'
//import React from 'react';
import {
  AppRegistry, StyleSheet, Text,
  View, TextInput, ScrollView, Image, FlatList, Button, TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';




export default class App extends Component {

  constructor(props) {

    super()
    this.state = {
      dataSource: [],
       locale:'',
      fallbacks:false,
      translations:{}
    }
    this.Myvideos=this.Myvideos.bind(this);
    this.Login=this.Login.bind(this);
    this.Buy=this.Buy.bind(this);
  }

  Myvideos(){
    Actions.MyVideos({data:this.props.data})
  }

  Login(){
    Actions.Login({data:this.props.data})
  }
  Buy(){
    Actions.Buy1({data:this.props.data})
  }

  renderItem = ({ item }) => {

    i18n.locale = this.state.locale;
    i18n.translations=this.state.translations;
    i18n.fallbacks=this.state.fallbacks;
    return (
   
      <View>
        <View>
          <Text style={{fontWeight:'700',fontFamily:"Avenir Next",fontSize:20}}>{i18n.t(item.heading)}</Text>
          <Text style={{marginTop:20,fontFamily:"Avenir Next",fontSize:18}}>{i18n.t('The above course has been bought')}. {i18n.t('It is available under My Videos in the menu')}.</Text>
        </View>
      </View>


    )

  }

  componentDidMount() {
    const url = "http://192.168.64.2/confirmation.php"

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.courses
          
        })


      })
      .catch((error) => {
        console.log(error)
      });

      this.setState({ 
    locale :this.props.data,
    fallbacks :true,
    translations : {
    en: 
    { 
      "PAYMENT CONFIRMATION":'PAYMENT CONFIRMATION',
      "Buy Another Course":'Buy Another Course',
      Videos:'Videos',
      "The above course has been bought":'The above course has been bought',
      "It is available under My Videos in the menu":'It is available under My Videos in the menu',
      ASTRONOMY:'ASTRONOMY',
      KINEMATICS:'KINEMATICS',
      "RELATIVITY AND ASTROPHYSICS":'RELATIVITY AND ASTROPHYSICS',
      "SPATIAL DATA VISUALIZATION":'SPATIAL DATA VISUALIZATION'
  
    },
    ru:
    {
    "PAYMENT CONFIRMATION":'ПОДТВЕРЖДЕНИЕ ОБ ОПЛАТЕ',
      "Buy Another Course":'Купить другой курс',
      Videos:'Ролики',
      "The above course has been bought":'Вышеуказанный курс был куплен',
      "It is available under My Videos in the menu":'Он доступен в разделе «Мои видео» в меню',
      ASTRONOMY:'АСТРОНОМИЯ',
      KINEMATICS:'КИНЕМАТИКА',
      "RELATIVITY AND ASTROPHYSICS":'ОТНОСИТЕЛЬНОСТЬ И АСТРОФИЗИКА',
      "SPATIAL DATA VISUALIZATION":'ВИЗУАЛИЗАЦИЯ ПРОСТРАНСТВЕННЫХ ДАННЫХ'
    },
    sp:
    {
    "PAYMENT CONFIRMATION":'CONFIRMACIÓN DE PAGO',
      "Buy Another Course":'Compre otro curso',
      Videos:'Videos',
      "The above course has been bought":'El curso anterior ha sido comprado',
      "It is available under My Videos in the menu":'Está disponible en Mis videos en el menú',
      ASTRONOMY:'ASTRONOMÍA',
      KINEMATICS:'CINEMÁTICA',
      "RELATIVITY AND ASTROPHYSICS":'RELATIVIDAD Y ASTROFÍSICA',
      "SPATIAL DATA VISUALIZATION":'VISUALIZACIÓN DE DATOS ESPACIALES'
    },
    fr:
    {
     "PAYMENT CONFIRMATION":'CONFIRMATION DE PAIEMENT',
      "Buy Another Course":'Acheter un autre cours',
      Videos:'Vidéos',
      "The above course has been bought":'Le cours ci-dessus a été acheté',
      "It is available under My Videos in the menu":'Il est disponible sous Mes vidéos dans le menu',
      ASTRONOMY:'ASTRONOMIE',
      KINEMATICS:'CINÉMATIQUE',
      "RELATIVITY AND ASTROPHYSICS":'RELATIVITÉ ET ASTROPHYSIQUE',
      "SPATIAL DATA VISUALIZATION":'VISUALISATION DES DONNÉES SPATIALES'
    }
   }
   })


  }

  render() {
    i18n.locale = this.state.locale;
    i18n.translations=this.state.translations;
    i18n.fallbacks=this.state.fallbacks;
    return (
      <View style={styles.container}>
        
        <View style={styles.listContainer}>
          
          <Text style={styles.health}>{i18n.t('PAYMENT CONFIRMATION')}</Text>

          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          

         </View>

          <TouchableOpacity onPress={this.Buy} >
                    <Text style={{fontSize:20,textAlign:'center',fontWeight:'700',marginTop:60, marginLeft:10,fontFamily:"Avenir Next",}}>{i18n.t('Buy Another Course')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.Myvideos}>
                    <Text style={{fontSize:20,textAlign:'center',fontWeight:'700',marginTop:30,fontFamily:"Avenir Next",}}>{i18n.t('Videos')}{"\n"}</Text>
                </TouchableOpacity>
                          <TouchableOpacity onPress={this.Login}>
            <Image
              source={require('../../assets/logout.png')}
                  style={styles.image1}
                  />
              </TouchableOpacity>



      </View>

    );
  }
}


const styles = StyleSheet.create({
  tabs: {
    width:350,
    height:95,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:18,
    marginVertical:10,
    paddingVertical:35,
    fontSize:16,
    color: 'black',
    marginLeft:32,
    textAlign:'center',
    fontSize:18,
    fontWeight:'700'
  },
    health:{
    fontWeight:'bold', 
    textAlign:'center', 
    fontFamily:"Avenir Next",
    justifyContent:'center',
    fontSize: 22, 
    marginTop:40, 
    marginBottom:25,
    color:'black'
  },
  image1: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: 60, 
      height: 60, 
      borderRadius: 40/2,
      marginLeft:280,
      marginTop:100
    },
  container: {

    width : "100%",
    justifyContent: "center",
    alignItems: "center",
   
    flexShrink:1


  },
  header: {
    flexDirection: 'row',
    backgroundColor: "#021f4b",
    width: "100%",
    height: 150
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40 / 2,
    marginLeft: 70,
    marginTop: 55
  },
  asg: {
    color: "#CFB53B",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    width: 160,
    marginLeft: 50,
    marginTop: 78
  },

  listContainer: {
    alignItems: "center",
    width: "80%",
    justifyContent: "center"

  },

  listRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: 350,

    margin: 15
    // alignItems: "left",
    // justifyContent: "center"

  },

  displayTexts1: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    width: "30%",
    marginTop:50
  },


  displayTexts2: {
    color: "#BCBCBC",
    textAlign: "left",
    fontSize: 16,
    width: 300,
    marginLeft:10,
    marginTop:10
  },

  footer: {
    backgroundColor: "#021f4b",
    width: 500,
    height: 70
  },

  buttonText: {
    fontSize:16,
    fontWeight:'800',
    color:'black',
    textAlign: 'center'

  },
  button: {
    backgroundColor:'rgba(255,255,255,0.15)',
    width:150,
    height:45,
    borderRadius:25,
    marginVertical:10,
    paddingVertical:12,
    marginLeft:1

  }
});

