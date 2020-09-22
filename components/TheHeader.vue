<template>
  <div>
    <v-btn
      v-if="$route.path != '/'"
      color="blue-grey"
      class="ma-2 white--text mb-4"
      nuxt
      href="/"
    >
      Go back home
      <v-icon right>mdi-home</v-icon>
    </v-btn>
    <v-btn
      v-if="$route.path != '/favorites'"
      color="favorite"
      class="ma-2 white--text mb-4"
      nuxt
      href="/favorites"
    >
      View Favorites
      <v-icon right>mdi-heart</v-icon>
    </v-btn>
    <v-btn
      v-if="$route.path != '/error'"
      color="error"
      class="ma-2 white--text mb-4"
      nuxt
      href="/error"
    >
      Check Error Page
      <v-icon right>mdi-information</v-icon>
    </v-btn>
  </div>
</template>
