import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // Inicializa o estado do componente AlbumList com a propriedade albums vazia
  state = { albums: [] };
  // Método de ciclo de vida (Lifecycle) que é executado Automaticamente
  // antes do componente ser renderizado
  componentWillMount() {
    // Solicita os dados
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      // passa os dados recebidos para o método que altera o estado de AlbumList
      // Lembrar que essa é uma solicitação assíncrona
      // Pode demorar muito, especialmente em celulares. Por isso trabalha-se
      // com estados, pois o react renderiza um componente
      // quando o estado muda (this.setState)
  }

  // Método para ajudar a renderizar os albums através de um mapeamento
  renderAlbums() {
    return this.state.albums.map(myalbum =>
       <AlbumDetail key={myalbum.title} album={myalbum} />
     );
    // cada elemento do array albums é mapeado através do método map
    // neste caso, serão 5 chamadas
    // Por questões de eficiência na renderização, o react exige que
    // cada item tenha uma chave única (key).
    // Como os dados não possuem um indicador próprio do tipo chave única
    // Usa-se o título do album para passar essa proprieade
    // Propriedades são passadas das classes mãe para filhas:
    // Por isso que AlbumDetail recebe as propriedades key e album de AlbumList
    // Ou seja, cada AlbumDetail receberá os dados de um único album (myalbum)
    // através da proprieade 'album'
    // É assim que a classe Mãe (AlbumList) comunica-se via proprieades (props)
    // com a classe Filha (AlbumDetail)
  }

  // Método de renderização (obrigatório)
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
// Usou classe porque este componente é alimentado dinamicamente.
// Quando é algo estático que só tem uma simples entrada
// usa-se um componente do tipo function (const)
// referencia para uma função de javascript dentro de um JSX precisa usar {}
// Exemplo: <View>{this.renderAlbums()}</View>

// ------------- Tornar conteúdo "Scrolldável"
// Passo 1: localizar o componente que precisa de Scroll
// Passo 2: substituir <View> por <ScrollView>
// Passo 3: ATENÇÃO => O ScrollView não rolará a tela toda, mesmo tendo muito
// mais conteúdo abaixo. É que o react por padrão corta a visualização do que
// fica fora do tamanho do dispositivo:
// SOLUÇÃO: usar o estilo {flex: 1} no componente que contém o
// AlbumList (que é o conteúdo que queremos que seja "Scrolldável")

export default AlbumList;
