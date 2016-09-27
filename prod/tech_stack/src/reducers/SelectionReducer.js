
const initialState = {
  id: null,
  expanded: false
};

// Este reducer modifica realmente o estado a depender da ação
// Ele esta pronto também para a inicialização da App,
// fornecendo estado nulo (null = nenhuma biblioteca foi selecioana)
export default (state = initialState, action) => {
  switch (action.type) {
    case 'select_library':
      // Retorna um objeto TOTALMENTE NOVO.
      // Como uma regra do redux, um reducer não tentar modificar o estado
      // Ele cria um novo estado
      console.log('!state.expanded');
      console.log(!state.expanded);
      if (action.payload === state.id) {
        return { id: action.payload, expanded: !state.expanded };
      } else {
        return { id: action.payload, expanded: true };
      }   

    default:
      // Retorno o estado corrente, que no começo é null
      return state;
  }
};


// criar um case 'deselect_library' que retorna action. payload
// só que o action.payload no action é action.payload: null
