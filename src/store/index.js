import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    moviesList: [],
    fetchingMovies: false,
    movieSearchQuery: "",
    currentMovie: {}, // New state
    movieDetailsVisible: false
  },
  getters: {
    moviesList(state) {
      return state.moviesList;
    },
    fetchingMovies(state) {
      return state.fetchingMovies;
    },
    movieSearchQuery(state) {
      return state.movieSearchQuery;
    },
    currentMovie(state) {
      return state.currentMovie; // New state
    },
    movieDetailsVisible(state) {
      return state.movieDetailsVisible;
    }
  },
  mutations: {
    setMoviesList(state, payload) {
      state.moviesList = payload || [];
    },
    setFetchingMovies(state, payload) {
      state.fetchingMovies = payload;
    },
    setMovieSearchQuery(state, payload) {
      state.movieSearchQuery = payload;
    },
    setCurrentMovie(state, payload) {
      state.currentMovie = payload; // New state
    },
    setMovieDetailsVisible(state, payload) {
      state.movieDetailsVisible = payload;
    }
  },
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
