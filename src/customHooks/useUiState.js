import { useState } from 'react';

export default function useUiState(initUiState) {
  const [uiState, setUiState] = useState(initUiState);

  const handleKeyPressForUi = e => {
    const { name, value } = e.target;
    if (value !== '' && e.key === 'Enter') {
      switch (name) {
        case 'from':
          setUiState({ ...uiState, classOfTo: '' });
          return;
        case 'to':
          setUiState({ ...uiState, classOfItem: '' });
          return;
        case 'firstName' || 'lastName' || 'phone':
          setUiState({ ...uiState, classOfSubmit: '', classOfNext: 'none' });
          return;
        default:
          return;
      }
    }
  };

  const handleSelectionChangeForUi = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'item':
        setUiState({ ...uiState, classOfDate: '' });
        return;
      case 'dateOption':
        setUiState({
          ...uiState,
          classOfName: '',
          classOfCustomizedDate: value === 'none-works' ? '' : 'none',
        });
        return;
      default:
        return;
      }
  };

  return {
    uiState,
    handleKeyPressForUi,
    handleSelectionChangeForUi,
  };
}
