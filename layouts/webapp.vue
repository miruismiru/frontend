<script setup>
import GuestCount from '~/components/OnlineUsers.vue'; 
// x


</script>
<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>
    <v-bottom-navigation :elevation="8" grow>
      <v-btn to="/pwa" value="home">
        <v-icon>mdi-home</v-icon>
        Home
      </v-btn>
 
      <!-- <v-btn to="/pwa/search" value="search">
        <v-icon>mdi-magnify</v-icon>
        Search
      </v-btn> -->
      <v-btn to="/pwa/bookmarks" value="bookmark">
        <v-icon>mdi-book</v-icon>
        Bookmarker
      </v-btn>
      <v-btn to="" value="aboxut">

<v-icon>mdi-eye-plus-outline</v-icon>
<GuestCount />
</v-btn>
      <v-btn to="/pwa/more" value="about">
        <v-icon>mdi-menu</v-icon>
        More 
      </v-btn>
      

    </v-bottom-navigation>
  </v-app>
</template>
