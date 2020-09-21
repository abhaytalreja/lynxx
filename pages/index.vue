<template>
  <v-layout column justify-center align-center>
    <v-container fluid>
      Welcome to Lynxx Image Gallery
      <v-btn
        color="favorite"
        class="ma-2 white--text mb-4"
        nuxt
        href="/favorites"
      >
        View Favorites
        <v-icon right>mdi-heart</v-icon>
      </v-btn>
      <ImageList />
    </v-container>
  </v-layout>
</template>
