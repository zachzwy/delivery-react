import { useState } from 'react';

export default function useUiState(initUiState) {
  const [uiState, setUiState] = useState(initUiState);

  const handleKeyPressForUi = e => {
    const { name, value } = e.target;
    if (value !== '' && e.key === 'Enter') {
      switch (name) {
        case 'from':
          setUiState({ ...uiState, classOfTo: 'active' });
          return;
        case 'to':
          setUiState({ ...uiState, classOfItem: 'active' });
          return;
        case 'firstName' || 'lastName' || 'phone':
          setUiState({ ...uiState, classOfSubmit: 'active', classOfNext: 'none' });
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
        setUiState({ ...uiState, classOfDate: 'active' });
        return;
      case 'dateOption':
        setUiState({
          ...uiState,
          classOfName: 'active',
          classOfCustomizedDate: value === 'none-works' ? 'active' : 'none',
        });
        return;
      default:
        return;
      }
  };

  const handleClickSubmit = e => {
    setUiState({
      classOfFrom: 'none',
      classOfTo: 'none',
      classOfItem: 'none',
      classOfDate: 'none',
      classOfCustomizedDate: 'none',
      classOfName: 'none',
      classOfSubmit: 'none',
      classOfNext: 'none',
      classOfProgress: 'none',
      classOfAfterSubmit: 'active',
    });
  }

  return {
    uiState,
    handleKeyPressForUi,
    handleSelectionChangeForUi,
    handleClickSubmit,
  };
}
