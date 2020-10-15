import React, {Component} from 'react';

import { StyleSheet } from 'react-native';

import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Buy from './pages/Buy';
import HealthCourses from './pages/HealthCourses';
import EducationCourses from './pages/EducationCourses';
import Buy1 from './pages/Buy1';
import EditProfile from './pages/EditProfile';

import MyVideos from './pages/MyVideos';
import Confirmation from './pages/Confirmation';
import Confirmation1 from './pages/Confirmation1';
import Languages from './pages/Languages';



export default class Routes extends Component<{}> {
    render() {
        return (
            <Router getSceneStyle={()=>styles.sceneStyle} navigationBarStyle={{ backgroundColor: '#243365' }}>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="Login" component={Login} title="Login" sceneStyle={styles.sceneStyle} initial={true}/>
                    <Scene key="Signup" component={Signup} title="Signup" sceneStyle={styles.sceneStyle}/>
                    <Scene key="ForgotPassword" component={ForgotPassword} title="ForgotPassword" sceneStyle={styles.sceneStyle}/>
                     <Scene key="Home" component={Home} title="Home" sceneStyle={styles.sceneStyle}/>
                     <Scene key="Menu" component={Menu} title="Menu" sceneStyle={styles.sceneStyle}/>
                     <Scene key="Contact" component={Contact} title="Contact" sceneStyle={styles.sceneStyle}/>
                     <Scene key="Buy" component={Buy} title="Buy" sceneStyle={styles.sceneStyle}/>
                     <Scene key="Buy1" component={Buy1} title="Buy1" sceneStyle={styles.sceneStyle}/>
                     <Scene key="HealthCourses" component={HealthCourses} title="HealthCourses" sceneStyle={styles.sceneStyle}/>
                     <Scene key="EducationCourses" component={EducationCourses} title="EducationCourses" sceneStyle={styles.sceneStyle}/>
            
                      <Scene key="MyVideos" component={MyVideos} title="My Videos" sceneStyle={styles.sceneStyle} />
                      <Scene key="Confirmation" component={Confirmation} title="Confirmation" sceneStyle={styles.sceneStyle} />
                       <Scene key="Confirmation1" component={Confirmation1} title="Confirmation1" sceneStyle={styles.sceneStyle} />

                      <Scene key="EditProfile" component={EditProfile} title="EditProfile" sceneStyle={styles.sceneStyle} />
                      <Scene key="Languages" component={Languages} title="Languages" sceneStyle={styles.sceneStyle} />
                    
                </Stack>
            </Router>
        )
    }
}

const styles = StyleSheet.create ({
    sceneStyle: {
        
    }
})