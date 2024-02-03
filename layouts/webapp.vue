<script setup>
import GuestCount from '~/components/OnlineUsers.vue'; 
// x


</script>
<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>
    <v-bottom-navigation :elevation="8" grow   active
      color="#e5383b">
      <v-btn to="/pwa" value="home">
        <v-icon>mdi-ghost</v-icon>
      </v-btn>
 
   
      <v-btn to="/pwa/bookmarks" value="bookmark">
        <v-icon>mdi-heart-pulse</v-icon>
      </v-btn>
     <v-btn to="/pwa/search" value="search">
        <v-icon>mdi-map-search  </v-icon>
      </v-btn>
      <v-btn to="/pwa/more" value="about">
        <v-icon>mdi-eye-plus-outline</v-icon>
        <GuestCount />
      </v-btn>
      

    </v-bottom-navigation>
  </v-app>
</template>
