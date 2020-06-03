import React, {useState} from 'react'
import { Text, View, ActivityIndicator, Image, TouchableOpacity, ScrollView} from 'react-native';
import {globalStyles} from '../assets/styles/global'
import { render } from 'react-dom';
import { FlatList } from 'react-native-gesture-handler';

export default class Home extends React.Component{

     

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            source341: null,
            nameSource341: null,
            nameSources: null,
            imageSource341: null,
            source342: null,
            nameSource342: null,
            imageSource342: null,
            source343: null,
            nameSource343: null,
            imageSource343: null,
            source344: null,
            nameSource344: null,
            imageSource344: null,
            source345: null,
            nameSource345: null,
            imageSource345: null,
            source346: null,
            nameSource346: null,
            imageSource346: null,
        }
    }
    componentDidMount () {
        return fetch('https://www.superheroapi.com/api.php/2577742862473379/341')
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
        return fetch('https://www.superheroapi.com/api.php/2577742862473379/342')
        .then( (response) => response.json() )
        .then( (responseJson) => {
            this.setState({
                isLoading:false,
        
                nameSource342: responseJson.name,
                imageSource342: responseJson.image.url,
                source342: responseJson,
            })
        })
        .catch((error) => {
            console.log(error)

        });
        return fetch('https://www.superheroapi.com/api.php/2577742862473379/343')
        .then( (response) => response.json() )
        .then( (responseJson) => {
            this.setState({
                isLoading:false,
        
                nameSource343: responseJson.name,
                imageSource343: responseJson.image.url,
                source343: responseJson,
            })
        })
        .catch((error) => {
            console.log(error)

        });
        return fetch('https://www.superheroapi.com/api.php/2577742862473379/344')
        .then( (response) => response.json() )
        .then( (responseJson) => {
            this.setState({
                isLoading:false,
        
                nameSource344: responseJson.name,
                imageSource344: responseJson.image.url,
                source344: responseJson,
            })
        })
        .catch((error) => {
            console.log(error)

        });
        return fetch('https://www.superheroapi.com/api.php/2577742862473379/345')
        .then( (response) => response.json() )
        .then( (responseJson) => {
            this.setState({
                isLoading:false,
        
                nameSource345: responseJson.name,
                imageSource345: responseJson.image.url,
                source345: responseJson,
            })
        })
        .catch((error) => {
            console.log(error)

        });
        return fetch('https://www.superheroapi.com/api.php/2577742862473379/346')
        .then( (response) => response.json() )
        .then( (responseJson) => {
            this.setState({
                isLoading:false,
        
                nameSource346: responseJson.name,
                imageSource346: responseJson.image.url,
                source346: responseJson,
            })
        })
        .catch((error) => {
            console.log(error)

        });
        
    }
    
    render() {
        if(this.state.isLoading){
    return(
    <View>
        <ActivityIndicator />
    
    </View>
    )
    }
    else{
        let superheroName341 =  this.state.nameSource341;
        let superHeroImage341 = this.state.imageSource;
        let superheroName342 =  this.state.nameSource341;
        let superHeroImage342 = this.state.imageSource;
        let superheroName343 =  this.state.nameSource341;
        let superHeroImage343 = this.state.imageSource;
        let superheroName344 =  this.state.nameSource341;
        let superHeroImage344 = this.state.imageSource;
        let superheroName345 =  this.state.nameSource341;
        let superHeroImage345 = this.state.imageSource;
        let superheroName346 =  this.state.nameSource341;
        let superHeroImage346 = this.state.imageSource;
        let superHeroSource341 = this.state.source341;
        let superHeroSource342 = this.state.source342;
        let superHeroSource343 = this.state.source343;
        let superHeroSource344 = this.state.source344;
        let superHeroSource345 = this.state.source345;
        let superHeroSource346 = this.state.source346;
        
        return(
        <View style ={globalStyles.container}>
            <ScrollView>
        <TouchableOpacity // onPress = {() => navigation.navigate('about', superHeroSource341)} 
        style ={globalStyles.card1}>
        <Image  style ={globalStyles.image} source={{
            uri: superHeroImage341 }}/>
            <Text>{superheroName341}</Text>
       
        </TouchableOpacity>
        <TouchableOpacity  // onPress = {() => navigation.navigate('about', superHeroSource342)}
        style ={globalStyles.card1}>
        <Image  style ={globalStyles.image} source={{
            uri: superHeroImage342 }}/>
            <Text>{superheroName342}</Text>
       
        </TouchableOpacity>
        <TouchableOpacity  // onPress = {() => navigation.navigate('about', superHeroSource343)}
        style ={globalStyles.card1}>
        <Image  style ={globalStyles.image} source={{
            uri: superHeroImage343 }}/>
            <Text>{superheroName343}</Text>
       
        </TouchableOpacity>
        <TouchableOpacity  // onPress = {() => navigation.navigate('about', superHeroSource344)}
        style ={globalStyles.card1}>
        <Image  style ={globalStyles.image} source={{
            uri: superHeroImage344 }}/>
            <Text>{superheroName344}</Text>
       
        </TouchableOpacity>
        <TouchableOpacity  // onPress = {() => navigation.navigate('about', superHeroSource345)}
        style ={globalStyles.card1}>
        <Image  style ={globalStyles.image} source={{
            uri: superHeroImage345 }}/>
            <Text>{superheroName345}</Text>
       
        </TouchableOpacity>
        <TouchableOpacity  // onPress = {() => navigation.navigate('about', superHeroSource346)}
        style ={globalStyles.card1}>
        <Image  style ={globalStyles.image} source={{
            uri: superHeroImage346 }}/>
            <Text>{superheroName346}</Text>
       
        </TouchableOpacity>
        </ScrollView>
        
        </View>
        );

    }
    }
}

