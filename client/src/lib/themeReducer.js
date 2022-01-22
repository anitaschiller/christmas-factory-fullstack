function themeReducer(theme, action) {
  const themes = {
    christmas: {
      title: 'christmas',
      primaryBg: '#021f13',
      secondaryBg: '#620202',
      primaryColor: '#f8b229',
      secondaryColor: '#146b3a',
      buttonBg: '#ea4630',
      warning: '#ea4630',
      favSymbolEmpty: '✩',
      favSymbolFilled: '⭐',
      headlineSymbol: '🎄',
      errorMessageSymbol: '🎅🏽',
      errorMessage:
        'Ho ho ho! Please check if all fields are correctly filled.',
    },
    valentine: {
      title: "valentine's day",
      primaryBg: '#474165',
      secondaryBg: '#97354e',
      primaryColor: 'papayawhip',
      secondaryColor: '#bd3f6e',
      buttonBg: '#ea4630',
      warning: '#ea4630',
      favSymbolEmpty: '♡',
      favSymbolFilled: '♥',
      headlineSymbol: '💝',
      errorMessageSymbol: '💌',
      errorMessage:
        'My Love, could you please check if all fields are correctly filled?',
    },
  };

  switch (action.type) {
    case 'CHANGE_THEME': {
      return themes[action.value];
    }
    default: {
      throw Error('Unknown action!');
    }
  }
}

export default themeReducer;
