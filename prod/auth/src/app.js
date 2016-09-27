import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  // Estado inicial do usuário (ainda não sabemos)
  state = { loggedIn: null };

  // Método chamado imediatamente antes da App ser renderizada
  componentWillMount() {
    // Inicializa a App no firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyD0HA2PSFsHA8NqoGAvlBkbRLlgPVvInNg',
      authDomain: 'auth-ca338.firebaseapp.com',
      databaseURL: 'https://auth-ca338.firebaseio.com',
      storageBucket: 'auth-ca338.appspot.com',
      messagingSenderId: '539958264785'
    });

    // Verifica no firebase se o usuário está logado
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // seta o estado da App (obrigando o método render ser chamado)
        // nessa app vai mostrar a tela de log out
        this.setState({ loggedIn: true });
      } else {
      // seta o estado da App (obrigando o método render ser chamado)
      // mostrar tela de login
        this.setState({ loggedIn: false });
      }
    });
  }

  // Escolhe o conteúdo que será renderizado
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner size={"large"} />;
    }
  }

  // Método obrigatório de Renderização da App
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;
