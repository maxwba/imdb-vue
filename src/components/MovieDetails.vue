<template>
    <b-container fluid v-if="fetchinMovieDetail" class="d-flex align-content-center">
      <b-card class="m-4" img-top tag="article" style="max-width: 20rem;">
        <b-spinner label="Loading..."></b-spinner>
      </b-card>
    </b-container>
    <b-container fluid v-else class="d-flex flex-column justify-content-center">
      <b-img :src="movieInfo.Poster" fluid alt="Responsive image"></b-img>
      <p class="lead mt-3"><strong>Release:</strong> {{movieInfo.Released}}</p>
      <p class="lead mt-1"><strong>Genre:</strong> {{movieInfo.Genre}}</p>
      <p class="lead mt-1"><strong>IMDB Rating:</strong> {{movieInfo.imdbRating}}</p>
      <p class="lead mt-1"><strong>Plot:</strong> {{movieInfo.Plot}}</p>        

    </b-container>
    
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",
  data() {
    return {
      fetchinMovieDetail: false,
      movieInfo: {}
    };
  },
  props: ["movie"],
  async mounted() {
    this.fetchinMovieDetail = true;
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=d526ad92&i=${this.movie.imdbID}`
    );
    this.movieInfo = response.data;
    this.fetchinMovieDetail = false;
  },
  methods: {}
};
</script>

<style>
</style>