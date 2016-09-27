import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  // Define as propriedades do estado inicial
  state = { email: '', password: '', error: '', loading: false };

  // Método de ajuda para ação do botão
  onPressButton() {
    // Descontroi as propriedades do estado
    const { email, password } = this.state;

    // Sempre que o usuário inicia um tentativa de login apaga qualquer
    // mensagem de erro
    // E esconde o botão de login e mostra o Spinner
    this.setState({ error: '', loading: true });

    // Tenta autenticar o usuário
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }
  // Tenta primeiro Log in como o usuário já existente
  // Depois tenta Log in como novo usuário
  // Se nada funcionar, indica erro.
  // O uso de .bind(this) em ambos os casos serve para callback
  // que será respondida apenas quando o firebase responder a chamada.
  // Na prática, é como se uma cópia do método fosse realizada.

  // Método para falha no login
  onLoginFail() {
    // Atualiza o estado (obrigando o formulário
    // a automaticamente renderizar)
    this.setState({ error: 'Authentication Failed!', loading: false });
    // ATENÇÃO: falta uma forma melhor de informar qual foi o erro específico
  }

  // Método para sucesso no login
  onLoginSuccess() {
    // Atualiza o estado (obrigando o formulário
    // a automaticamente renderizar)
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  // Método para escolher ser mostra o botão ou o Spinner
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onPressButton.bind(this)}>
        Log in
      </Button>
    );
  }

  // Método obrigatório de renderização da classe LoginForm
  render() {
    return (
      <Card>

        <CardSection>
          <Input
            autoCapitalize='none'
            label="Email"
            placeholder="Digite seu Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email, error: '' })}
          />

        </CardSection>
          <Input
            secureTextEntry
            label="Senha"
            placeholder="Digite sua senha"
            value={this.state.password}
            onChangeText={password => this.setState({ password, error: '' })}
          />
        <CardSection />

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
// Se não setar a propriedade value do Input ( que usa TextInput), quando o estado dele
// for alterado por setState ele será automaticamente renderizado
// e ficará SEM o texto digitado
// secureTextEntry define quando o input deve ficar PROTEGIDO. Se essa propriedade
// não for passada o TextInput entenderá que secureTextEntry = false

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
export default LoginForm;
