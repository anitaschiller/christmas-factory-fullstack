function themeReducer(theme, action) {
  const themes = {
    christmas: {
      title: 'christmas',
      primaryColor: 'red',
      secondaryColor: 'yellow',
      symbol: '✩',
    },
    valentine: {
      title: "valentine's day",
      primaryColor: 'hotpink',
      secondaryColor: 'salmon',
      symbol: '♡',
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
