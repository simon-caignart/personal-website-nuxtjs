export const state = () => ({
  theme: {}
});

export const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme;
    localStorage.theme = theme;
  }
};

export const actions = {
  autoTheme({ commit }) {
    let userPrefersDark = false;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      userPrefersDark = true;
    }

    if (userPrefersDark) commit("SET_THEME", "dark");
    else commit("SET_THEME", "light");
  },
  // This simply flips whatever was most recently committed to storage.
  flipTheme({ commit }) {

    switch (localStorage.theme) {
      case "light":
        commit("SET_THEME", "dark");
        break;

      default:
        commit("SET_THEME", "light");
        break;
    }
  }
};

export const getters = {
  getTheme: state => {
    return state.theme;
  }
};
