// @flow

// Import libaries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles; // pega o objeto estilo para o texto e o view
  return (
    // seta a propriedade estilo do view
    // seta a propriedade estilo do texto
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};
// o nome Header é função que deve ter o mesmo nome do seu arquivo

// Cria um outro objeto apenas para o estilo de visualização
const styles = {
  // Propriedade 1 deste estilo
  // justifyContent = alinhamento vertical com
  // 'flex-end' = inferior, 'flex-start' = topo (padrão)
  // alignItems = alinhamento horizontal com
  // 'flex-end' = direita, 'flex-start' = esquerda (padrão)

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  // Propriedade 2 deste estilo
  textStyle: {
    fontSize: 20
  }

};


// Make the component avaliable to olher parts of the app
export default Header;
