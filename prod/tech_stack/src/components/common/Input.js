import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry, autoCapitalize }) => {
  // descontrução do objeto styles
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>

      <TextInput
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
// Recebe secureTextEntry = {true} quando deseja esconder a texto digitado
// Usa autoCorrect = {false} para evitar autocorreção no email ou senha
// Curiosidade: o TextInput tem que sempre receber dimensões senão o
// react-native cria ele com altura e largura zero

// objeto de estilos
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1

  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'

  }
};
// flex: 1 em labelStyle e flex: 2 em inputStyle definem a proporção 1/3 e 2/3
// visto que ambos estão dentro do View do containerStyle
// Por sua vez o flex: 1 do containerStyle define 1/1 como só tem ele, o que
// faz com que o View ocupe todo o espaço

export { Input };
