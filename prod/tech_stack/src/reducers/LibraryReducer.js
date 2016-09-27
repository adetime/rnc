// Os dados são armazenados no próprio app. Essa não é uma boa escolha.
// Mas, o foco aqui é aprender sobre reducers.
// Por isso evitou-se chamadas a bancos de dados online.
import data from './LibraryList.json';

// Independete do tipo de ação, este reducer retorna apenas a Lista de Bibliotecas
// (LibraryList) que está armazenada em data
// Esse é o propósito deste reducer
// Isso porque o estado inicial ou qualquer outro estado da lista de Bibliotecas,
// NÃO muda. Nesse caso específico, o estado é sempre o mesmo.
// Então, o LibraryReducer está pronto para fornecer o estado inicial da App
// ou qualquer estado durante a execução da App
export default () => data;
