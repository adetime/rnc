/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// https://rallycoding.herokuapp.com/api/music_albums
//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);
// Só pode ter um único componente por arquivo
// Só pode ter um único retorn, por isso usa o view
//<Header></Header> componentes vazios são auto-fechados
// <View style={{ flex: 1 }}> serve para todo o conteúdo ficar visível no
// dispositivo. Isso permite que o componente ScrollView funcione em todo o
// conteúdo

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
// 'albums' aqui deve ter o mesmo nome da pasta do projeto
// () => App é uma função que retorna o primeiro componente
// que será renderizado na aplicação
//
// É preciso registrar pelo menos 1 componente para cada app
// Apenas um único componente pode ser o Root ("classe mãe") e usar AppRegistry
