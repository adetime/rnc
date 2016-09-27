import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// O componente Linking serve para trabalhar com urls


// Só aprensenta os dados para o usuárenderizado
// Usar um componente do tipo Functional
const AlbumDetail = ({ album }) => {
  // O props foi desconstruído para {album} para evitar o tempo todo acessar
  // props.album.blablabla

  // Cada propriedade específica é recebida do album e armazenada nas constantes
  // locais title, artist e thumbnail_image:
  const { title, artist, thumbnail_image, image, url } = album;

  // Da mesma  forma os estilos. Como temos estilos em vários lugares,
  // vamos desconstruir styles:
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ url: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ url: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Comprar Agora
        </Button>
      </CardSection>

    </Card>
  );
};
// ------------- Passando COMPONENTS como PROPS
// Como o Card não é self-contained e NÃO recebe propriedades
// com nomes específicos.
// Mas, o Card recebe diretamente componentes para serem renderizados
// dentro dele. Estes componentes se tornam suas CHILDREN.
// Embora não tenham nomes específicos, os componentes
// que são recebidos diretamente são acessados por {props.children} no Card.
// Logo, o Card se torna RESPONSÁVEL por renderizar os componentes recibidos
// diretamente.
// A mesma coisa acontece com o CardSection!!!
// Então, quando o CardSection acessar {props.children} recebe o componente
// Text que deve ser renderizado como uma RESPONSABILIDADE sua.
// O mesmo acontece com o Card:
// Quando o Card acessar {props.children} recebe o componente
// CardSection que deve ser renderizado como uma RESPONSABILIDADE sua.
// O mesmo procedimento foi usado no componente Button de duas formas:
// 1) Para que CardSection tenha a RESPONSABILIDADE de renderizar o Button
// 2) Para que Button tenha a RESPONSABILIDADE de renderizar Comprar Agora

// ----------------- Imagens no React-Native
// É preciso criar um estilo específico para o tamanho das Imagens
// pois o react-native não movimenta os elementos dentro de um componente para
// permitir a visualização da imagem se isso não for especificado MANUALMENTE
// Ele até renderiza a imagem, mas em um tamanho tão pequeno que não dá para
// visualizar
const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
// flex: 1 e width: null para a largura da imagem pegar todo o espaço
export default AlbumDetail;
