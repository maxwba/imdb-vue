import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    moviesList: [],
    fetchingMovies: false
  },
  getters: {
    moviesList(state) {
      return state.moviesList;
    },
    fetchingMovies(state) {
      return state.fetchingMovies;
    }
  },
  mutations: {
    setMoviesList(state, payload) {
      state.moviesList = payload || [];
    },
    setFetchingMovies(state, payload) {
      state.fetchingMovies = payload;
    }
  }, // Funcoes atomicas que mudam o state
  actions: {
    async fetchMoviesList({ commit }, payload) {
      commit("setFetchingMovies", true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=d526ad92&s=${payload}`
      );
      commit("setMoviesList", response.data.Search);
      commit("setFetchingMovies", false);
    }
  }
});

export default store;
