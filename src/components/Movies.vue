<template>
  <div>
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item active>TV Shows and Movies</b-nav-item>
        </b-nav>
      </b-card-header>
      <!-- Search -->
      <b-row class="m-2">
        <b-col sm="5">
          <b-form-input
            type="search"
            @change="fetchMovies"
            v-model="movieSearchQuery"
            id="input-small"
            size="sm"
            placeholder="Type a movie and hit enter"
          ></b-form-input>
        </b-col>
      </b-row>
        <!-- Blank state -->
        <div v-if="moviesList.length === 0 && !fetchinMovies" class="content">
          <b-card
            class="m-4"
            title="Movie title"
            img-src="blankState.svg"
            img-alt="Movie name"
            img-top
            tag="article"
            style="max-width: 20rem;"
          ></b-card>
        </div>
        <!-- Loading -->
        <div v-else-if="fetchinMovies && moviesList.length === 0" class="content">
          <b-card class="m-4" img-top tag="article" style="max-width: 20rem;">
            <b-spinner label="Loading..."></b-spinner>
          </b-card>
        </div>
        <!-- Movies List -->
        <div v-else class="content">
          <MovieCard v-for="movie in moviesList" :key="movie.id" :movie="movie" />
        </div>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

import MovieCard from "./MovieCard";

export default {
  name: "Movies",
  data() {
    // State
    return {
      movieSearchQuery: "",
      moviesList: [],
      fetchinMovies: false
    };
  },
  // Components
  components: {
    MovieCard: MovieCard
  },
  methods: {
    async fetchMovies() {
      this.fetchinMovies = true;
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=d526ad92&s=${this.movieSearchQuery}`
      );
      this.moviesList = response.data.Search;
      console.log(response);
      this.fetchinMovies = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    display: flex;
    flex-wrap: wrap;
  }
</style>
