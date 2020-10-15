import React, { Component } from 'react'
//import React from 'react';
import {
  AppRegistry, StyleSheet, Text,
  View, TextInput, ScrollView, Image, FlatList, Button, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default class App extends Component {

  constructor(props) {

    super(props)
    this.state = {
      dataSource: [],
      locale:'',
      fallbacks:false,
      translations:{}
    }
    this.Menu=this.Menu.bind(this);
    this.Buy=this.Buy.bind(this);
  }

  Menu() {
    Actions.Menu({data:this.props.data})
  }

  Buy() {
    Actions.Buy({data:this.props.data})
  }

  renderItem = ({ item }) => {
    i18n.locale = this.state.locale;
    i18n.translations=this.state.translations;
    i18n.fallbacks=this.state.fallbacks;
    return (

      <View style={styles.tabs1}>
        <Text style={styles.displayTexts1}>
          {i18n.t(item.health_course_name)}
        </Text>
      </View>
    )

  }

  componentDidMount() {
    const url = "http://192.168.64.2/health_db.php"

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
      HEALTH:'HEALTH',
      COURSES:'COURSES',
      Buy:'Buy',
      "Health and Fitness":'Health and Fitness',
      "Swimming Techniques for Beginners":'Swimming Techniques for Beginners',
      "Yoga and Physiology":'Yoga and Physiology',
      "Breath is Life":'Breath is Life',
      "Power of Healthy Eating":'Power of Healthy Eating'
    },
    ru:
    {
      HEALTH:'ЗДОРОВЬЕ',
      COURSES:'КУРСЫ',
      Buy:'купить',
      "Health and Fitness":'Здоровье и Фитнесс',
      "Swimming Techniques for Beginners":'Техника плавания для начинающих',
      "Yoga and Physiology":'Йога и Физиология',
      "Breath is Life":'Дыхание - это жизнь',
      "Power of Healthy Eating":'Сила здорового питания'
  
    },
    sp:
    {
      HEALTH:'SALUD',
      COURSES:'CURSOS',
      Buy:'Comprar',
      "Health and Fitness":'Salud y Belleza',
      "Swimming Techniques for Beginners":'Técnicas de natación para principiantes',
      "Yoga and Physiology":'Yoga y fisiologia',
      "Breath is Life":'El aliento es vida',
      "Power of Healthy Eating":'Poder de una alimentación saludable'
    },
    fr:
    {
      HEALTH:'SANTÉ',
      COURSES:'COURS',
      Buy:'Acheter',
      "Health and Fitness":'Santé et remise en forme',
      "Swimming Techniques for Beginners":'Techniques de natation pour débutants',
      "Yoga and Physiology":'Yoga et physiologie',
      "Breath is Life":'Le souffle est la vie',
      "Power of Healthy Eating":"Puissance d'une alimentation saine"
  
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
         <TouchableOpacity onPress={this.Menu}>
            <Text style={{fontSize:40, marginLeft:15,marginTop:10,fontWeight:'700',fontFamily:"Avenir Next"}}>←</Text>
        </TouchableOpacity>


          <Text style={styles.health}>{i18n.t('HEALTH')} {i18n.t('COURSES')}</Text>

          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

        </View>

        <TouchableOpacity style={styles.button} onPress={this.Buy}>
          <Text style={styles.buttonText}>{i18n.t('Buy')}</Text>
        </TouchableOpacity>
        
        




      </View>

    );
  }
}


const styles = StyleSheet.create({
  tabs: {
    width: 350,
    height: 95,
    fontFamily:"Avenir Next",
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 18,
    marginVertical: 10,
    paddingVertical: 35,
    fontSize: 16,
    color: 'black',
    marginLeft: 32,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700'
  },
  tabs1:{
    width:320,
    marginLeft:40,
    paddingVertical:5,
    alignItems:"center",
    borderStyle:'solid',
    borderBottomWidth: 1
  },
  health: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:"Avenir Next",
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 10,
    color: 'black'
  },
  container: {
    flex: 1,
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: 'row',
    backgroundColor: "#021f4b",
    width: "100%",
    height: 150
  },
  image: {
    width: 80,
    height: 80,
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
    flex: 1,
    width: "100%"
  },

  listRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: 350,
    // alignItems: "left",
    // justifyContent: "center"

  },

  displayTexts1: {
    color: "black",
    fontFamily:"Avenir Next",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    width: 350,
    marginTop: 30,
    marginLeft: 30,
    backgroundColor:'rgba(255,255,255,0.3)',
    paddingVertical:5
  },


  displayTexts2: {
    color: "#BCBCBC",
    textAlign: "left",
    fontSize: 16,
    width: 400,
    marginLeft: 10,
    marginTop: 10
  },

  footer: {
    backgroundColor: "#021f4b",
    width: 500,
    height: 70
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center'

  },
  button: {
    backgroundColor:'#585858',
    width: 150,
    height: 45,
    borderRadius: 25,
    marginVertical: 100,
    paddingVertical: 12,
    marginTop: 10,
  }
});
