// Actions Creators (funções que retornam ações - dispatch(action))

// Criador de ação selectlibrary
export const selectlibrary = (libraryId) => {
  // Ação selectlibrary
  return {
    type: 'select_library',
    payload: libraryId
  };
};
