import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
// Recebe as propriedades descontruidas
// OBS: A children foi passada na chamada direta

  // Descontrói a constante styles
  const { buttonStyle, textStyle } = styles;

  // Usa TouchableOpacity pra mudar opacidade quando o botão é clicado
  // {onPress} é o método que é chamado quando o botão é clicado
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};
// flex: 1 é para o botão ocupar todo o espaço reservado

export { Button };
