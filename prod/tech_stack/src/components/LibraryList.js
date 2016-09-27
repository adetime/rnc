import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {
  // ListView permite ganho de performance com listas grandes
  // Apenas os itens visíveis (enquadrados na tela) são renderizados
  // Só é preciso configurar os dados para o ListView
  // apenas uma Única Vez.
  componentWillMount() {
    // Configuração dos dados do ListView antes da renderização do Componente:

    // Criação do objeto e do teste de mudança da linha
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // Mapeamento dos dados:
    // this.props foi recebido do Provider atráves do connect helper
    // que fez a licação entre o estado da App e as props da
    // LibraryList (ver explicação no fim do arquivo)
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  // O ListView precisa saber como renderizar uma única linha
  // Por isso, na sua chamada configuramos renderRow={this.renderRow}
  // para que ele use esse método:
  renderRow(library) {
    // Cada item da lista rebederá a sua biblioteca como propriedade
    // Ou seja, esse médoto é chamada para cada uma das Bibliotecas da lista
    // Isso acontece porque executamos renderRow={this.renderRow} no ListView.
    // Então, o ListView quebra o objeto e passa cada pedaço (aqui chamado de
    // library) para o médodo this.renderRow, que recebe library como sua props.
    return <ListItem library={library} />;
    // A definição de como o ListItem faz isso está dentro do próprio ListItem
  }

  render() {
    // O ListView precisa da fonte de dados e de como uma única linha é renderizada
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// Pega o estado global (estado da aplicação) que está na store do redux
// e mapeia ele de uma forma que consegue retirar algumas propriedades
// do objeto estado e fornece elas como propriedades para o componente
// LibraryList
const mapStateToProps = state => {
  // O que é retornado aqui, transforma-se automaticamente em props para
  // a LibraryList
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
// connect serve para a LibraryList pedir ao Provider
// o estado dela para ela saber como se renderizar
// -------- como funciona ---
// O connect ao ser invocado retorna uma outra função...
// Imediatamente, essa outra função retornada pelo
// connect é chamada recendo a LibraryList como argumento
// para mudar a sua props
