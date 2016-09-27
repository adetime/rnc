import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  onPressItem() {
    const { id, title } = this.props.library;
    console.log('clicou em');
    console.log(title);
    // este método foi definido dentro da action (index.js)
    this.props.selectlibrary(id);
  }


  renderDescription() {
    const { library, viewDescription } = this.props;
    const { title } = library;
      //console.log({ title, expanded });
      if (viewDescription) {
        return (
          <CardSection>
            <Text style={styles.descriptionStyle}>
              {library.description}
            </Text>
          </CardSection>
        );
      } else {
        console.log('else');
        return;
      }
  }


  // onPress={() => this.props.selectlibrary(id)}
  render() {
    console.log('renderizou');
    const { titleStyle } = styles;
    // Identificador e título da biblioteca que será renderizada
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.onPressItem()}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 18
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  }
};

const mapStateToProps = (state, ownProps) => {
  // Compara o id da biblioteca selecionada armazenado no estado
  // com o id da biblioteca que será renderizada agora (ownProps.library.id)

  // ownProps aqui fora do componente é igual a this.props dentro do componente
  console.log('estado');
  console.log({ state })
  const { id, expanded } = state.selectedlibraryId;
  const viewDescription = id === ownProps.library.id && expanded === true;
  return { viewDescription };
};

export default connect(mapStateToProps, actions)(ListItem);
// o primeiro argumento (mapStateToProps) mapeia o estado para as propriedades
// o segundo argumento (actions) faz um bind (vincula) os Actions
// Creators ao componente ListItem
// Também passa todas as actions para como Props para o ListItem
