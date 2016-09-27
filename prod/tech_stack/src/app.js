import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
    );
};
// --------- O quê foi feito:
// Criou uma Store a partir dos reducers
// Passou essa Store para o Provider gerenciar
// Como o provider só pode ter uma única Child,
// todo conteúdo foi envelopado dentro de uma View
//
// O Provider adiciona a comunicação entre o react e o redux

export default App;
