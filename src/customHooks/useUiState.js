import { useState } from 'react';

export default function useUiState(initUiState) {
  const [uiState, setUiState] = useState(initUiState);

  const handleKeyPressForUi = e => {
    const { name, value } = e.target;

    if (value === '' && e.key === 'Tab') {
      e.preventDefault();
      return;
    }

    if ((value !== '' && e.key === 'Enter') || e.key === 'Tab') {
      switch (name) {
        case 'from':
          setUiState({ ...uiState, classOfTo: 'active' });
          break;
        case 'to':
          setUiState({ ...uiState, classOfItem: 'active' });
          break;
        case 'firstName':
        case 'lastName':
        case 'phone':
          setUiState({ ...uiState, classOfSubmit: 'active', classOfNext: 'none' });
          break;
        default:
          break;
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
      classOfForm: 'none',
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
