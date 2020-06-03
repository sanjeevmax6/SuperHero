 import React from 'react'
 import { Text, View } from 'react-native';
 import {globalStyles} from '../assets/styles/global'
 import { render } from 'react-dom';

 export default class About extends React.Component{

     constructor(props){
         super(props);
         this.state = {
             isLoading: true,
             superheroBio: null,
             superheropowerStats: null,
             superheroWork: null,
         }
     }

      componentDidMount () {
          return fetch('{NavigationPreloadManager.getParam('name')}')
          .then( (response) => response.json() )
          .then( (responseJson) => {
              this.setState({
                  isLoading:false,
                  // nameSources: [...this.state.nameSources, responseJson.name],
                  nameSource341: responseJson.name,
                  imageSource341: responseJson.image.url,
                  source341: responseJson,
              })
          })
          .catch((error) => {
              console.log(error)

          });
      }

     render(){
        
     return(
     <View>
         <Text style ={globalStyles.about} >
            {NavigationPreloadManager.getParam('name')}
         </Text>
     </View>
     );
 }
 }