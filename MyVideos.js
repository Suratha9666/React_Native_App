import React, { Component } from 'react'
import {
  AppRegistry, StyleSheet, Text, Dimensions,
  View, TextInput, ScrollView, Image, FlatList, Button, TouchableOpacity
} from 'react-native';
import { Audio, Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

import {Actions} from 'react-native-router-flux';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


const {width, height } = Dimensions.get('window');


export default class App extends Component {
  constructor(props) {

    super()
    this.state = {
      dataSource: [],
      locale:'',
      fallbacks:false,
      translations:{}
    }
    this.Menu=this.Menu.bind(this);
  }
   
  Menu(){
    Actions.Menu({data:this.props.data})
  }
   renderItem = ({ item }) => {
      i18n.locale = this.state.locale;
    i18n.translations=this.state.translations;
    i18n.fallbacks=this.state.fallbacks;
    if(item.Video=='Workout'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./Workout.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
    if(item.Video=='Swimming'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./Swimming.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
      if(item.Video=='Astronomy'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./Astronomy.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
        if(item.Video=='Kinematics'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./Kinematics.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
        if(item.Video=='Yoga and Physiology'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./Yoga.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
        if(item.Video=='Breathe is life'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./Breathing.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
        if(item.Video=='Power of healthy eating'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./HealthyEating.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
        if(item.Video=='Relativity and Astrophysics'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./Astrophysics.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
        if(item.Video=='Spatial Data Visualization'){
    return (
       <View>
        <View>
          <Text style={styles.displayTexts1}>
            {i18n.t(item.heading)}
          </Text>
       </View>
  
      <Video
      source={require('./Spatial.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay = {false}
      isLooping = {false}
      useNativeControls
      style={ styles.video }
      />
      
      </View>

    )
  }
  }

  
  

  componentDidMount() {
    const url = "http://192.168.64.2/video.php"

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.courses
          
          
        })

      .then((data)=>{
        self.setState({Video:data.uri})
      } )


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
     ASTRONOMY:'ASTRONOMY',
      KINEMATICS:'KINEMATICS',
      "RELATIVITY AND ASTROPHYSICS":'RELATIVITY AND ASTROPHYSICS',
      "SPATIAL DATA VISUALIZATION":'SPATIAL DATA VISUALIZATION',
       WORKOUT:'WORKOUT',
      SWIMMING:'SWIMMING',
      "YOGA AND PHYSIOLOGY":'  YOGA AND PHYSIOLOGY',
      "BREATHE IS LIFE":'BREATHE IS LIFE',
      "POWER OF HEALTHY EATING":'POWER OF HEALTHY EATING'
  
    },
    ru:
    {
    
      ASTRONOMY:'АСТРОНОМИЯ',
      KINEMATICS:'КИНЕМАТИКА',
      "RELATIVITY AND ASTROPHYSICS":'ОТНОСИТЕЛЬНОСТЬ И АСТРОФИЗИКА',
      "SPATIAL DATA VISUALIZATION":'ВИЗУАЛИЗАЦИЯ ПРОСТРАНСТВЕННЫХ ДАННЫХ',
       WORKOUT:'РАЗРАБАТЫВАТЬ',
      SWIMMING:'БАССЕЙН',
      "YOGA AND PHYSIOLOGY":'Йога и физиология',
      "BREATHE IS LIFE":'Дыхание - это жизнь',
      "POWER OF HEALTHY EATING":'Сила здорового питания'
    },
    sp:
    {
  
      ASTRONOMY:'ASTRONOMÍA',
      KINEMATICS:'CINEMÁTICA',
      "RELATIVITY AND ASTROPHYSICS":'RELATIVIDAD Y ASTROFÍSICA',
      "SPATIAL DATA VISUALIZATION":'VISUALIZACIÓN DE DATOS ESPACIALES',
       WORKOUT:'RUTINA DE EJERCICIO',
      SWIMMING:'NADANDO',
      "YOGA AND PHYSIOLOGY":'Yoga y fisiología',
      "BREATHE IS LIFE":'RESPIRAR ES VIDA',
      "POWER OF HEALTHY EATING":'PODER DE COMER SALUDABLE'
    },
    fr:
    {

      ASTRONOMY:'ASTRONOMIE',
      KINEMATICS:'CINÉMATIQUE',
      "RELATIVITY AND ASTROPHYSICS":'RELATIVITÉ ET ASTROPHYSIQUE',
      "SPATIAL DATA VISUALIZATION":'VISUALISATION DES DONNÉES SPATIALES',
        WORKOUT:'FAIRE DES EXERCICES',
      SWIMMING:'NAGER',
      "YOGA AND PHYSIOLOGY":'YOGA ET PHYSIOLOGIE',
      "BREATHE IS LIFE":'RESPIRER EST LA VIE',
      "POWER OF HEALTHY EATING":"LA PUISSANCE D'UNE ALIMENTATION SAINE"
    }
   }
   })



  }
  
  render() {
    return (

      <View>
      <View>
      <TouchableOpacity onPress={this.Menu}>
            <Text style={{fontSize:40, marginLeft:15,fontWeight:'700'}}>←</Text>
        </TouchableOpacity>

          </View>

      <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          </View>
          


          
       
      );
  }
}
  


const styles = StyleSheet.create({
  video:{
    marginLeft:7,
    width: 400,
    height: height/ 3
  },
  displayTexts1: {
    textAlign: "center",
    fontFamily:"Avenir Next",
    fontWeight: "bold",
    fontSize: 16,
    width: "88%",
    marginTop:20,
    marginLeft:25,
    marginBottom:5
  },
  container1:{
    justifyContent: 'center'
  }
  
});
