<script setup>
const env = useRuntimeConfig();
const randomBTNstate = ref(false);
const gotoRandomID = async () => {
  const { data } = useFetch(
    `${env.public.API_URL}/api/${env.public.version}/random`
  );
  navigateTo(`/anime/${data.value.id[0]}`);
};





</script>
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary="">
      <v-list>
        <v-list-item>
          <NuxtImg
            src="https://dotstream.fun/logo.png"
            style="display: flex;"
            alt="dotstream"
            quality="80"
            width="140px"
          />
        </v-list-item>
        <ClientOnly>
          <SearchBar />
        </ClientOnly>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item title="Home" to="/" append-icon="mdi-home" />
        <v-list-item
          title="Search Anime"
          to="/search"
          append-icon="mdi-magnify"
        />
        <v-list-item
          title="Bookmarker"
          to="/bookmarks"
          append-icon="mdi-heart-pulse-box-multiple"
        />
        <v-list-item
          title="Randomizer"
          append-icon="mdi-shuffle"
          :disabled="randomBTNstate"
          @click="gotoRandomID"
        />
      </v-list>
      <v-divider />
      <v-list>
        <v-list-subheader>More</v-list-subheader>
        <v-list-item title="About us" to="/about">
</v-list-item>
</v-list>
    </v-navigation-drawer>

    <v-app-bar absolute="">
      <v-col>
        <NuxtLink to="/">
          <NuxtImg
            src="https://dotstream.fun/logo.png"
            style="display: flex;"
            alt="dotstream"
            quality="80"
            width="140px"
          />
        </NuxtLink>
      </v-col>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <slot />
      <ClientOnly>
        <AppCookieBanner />
      </ClientOnly>
    </v-main>
    <v-footer app height="auto" dense absolute>
      <p>with love ;3 © Copyright {{ new Date().getFullYear() }}</p>
      <v-spacer />
</v-footer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>
<style scoped></style>
