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
            @change="fetchMoviesList(movieSearchQuery)"
            :value="movieSearchQuery"
            @input="setMovieSearchQuery"
            id="input-small"
            size="sm"
            placeholder="Type a name and hit enter"
          ></b-form-input>
        </b-col>
      </b-row>
      <!-- Blank state -->
      <div v-if="moviesList.length === 0 && !fetchingMovies" class="content">
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
      <div v-else-if="fetchingMovies && moviesList.length === 0" class="content">
        <b-card class="m-4" img-top tag="article" style="max-width: 20rem;">
          <b-spinner label="Loading..."></b-spinner>
        </b-card>
      </div>
      <!-- Movies List -->
      <div v-else class="content">
        <MovieCard
          v-for="movie in moviesList"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </b-card>
    <b-modal
      :visible="movieDetailsVisible"
      id="modal-center"
      hide-footer
      :title="currentMovie.Title"
      @hidden="setMovieDetailsVisible(false)"
    >
      <b-container>
        <MovieDetails :movie="currentMovie" />
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions, mapMutations } from "vuex";

import { BContainer } from "bootstrap-vue";

import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

export default {
  name: "Movies",
  data() {
    // State
    return {
    };
  },
  // Components
  components: {
    MovieCard: MovieCard,
    MovieDetails: MovieDetails
  },
  computed: {
    ...mapGetters(["moviesList", "fetchingMovies", "movieSearchQuery", "currentMovie", "movieDetailsVisible"])
  },
  methods: {
    ...mapActions(["fetchMoviesList"]),
    ...mapMutations(["setMovieSearchQuery", "setCurrentMovie", "setMovieDetailsVisible"]),
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
