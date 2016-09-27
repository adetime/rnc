import React from 'react';
import { View } from 'react-native';

// o proposito desse componente é apenas fornecer um ótimo padrao
// de estilo
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
// {props.children} = renderiza qualquer component passado direto
// como uma propriedade do tipo children (props.children)
};

const styles = {
  // propriedades:
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10

  }
};

export default Card;
