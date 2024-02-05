<template>
  <div class="cool-cover-container">
    <v-row v-if="!loading">
      <v-col v-for="item in apiData.data" :key="item.id" cols="12" md="6" lg="4">
        <v-card class="cool-cover-card" @mouseover="hoverCard(item.id)" @mouseleave="leaveCard(item.id)">
          <v-img :src="item.thumbnail" class="cool-cover-image" @error="handleImageError"></v-img>
          <v-card-title class="cool-custom-card-title">{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.uploadedAt }}</v-card-subtitle>
          <v-card-text>{{ item.intro }}</v-card-text>
          <v-card-text>{{ item.description }}</v-card-text>
          <v-btn icon class="cool-open-url-btn" @click="openUrl(item.url)">
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <div class="cool-progress-container">
    <v-progress-circular indeterminate size="64" color="red"></v-progress-circular>
  </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.cool-cover-container {
  padding: 20px;
}

.cool-cover-card {
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.cool-custom-card-title {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: bold;
}

.cool-cover-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

.cool-open-url-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ffffff;
}

.cool-cover-card:hover {
  transform: scale(1.05);
}
.cool-progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height based on your design */
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiData: { data: [] },
      loading: true, // Add loading state
      hoveredCard: null,
    };
  },
  methods: {
    getData() {
      axios.get('/api/newsinfo')
        .then(response => {
          this.apiData = response.data;
          this.loading = false; // Set loading to false after data is fetched
        })
        .catch(error => {
          console.error('Error fetching data from API:', error);
          this.loading = false; // Set loading to false on error
        });
    },
    openUrl(url) {
      window.open(url, '_blank');
    },
    hoverCard(id) {
      this.hoveredCard = id;
    },
    leaveCard(id) {
      this.hoveredCard = null;
    },
    handleImageError(event) {
      console.error('Image failed to load:', event.target.src);
    },
  },
  created() {
    this.getData();
  },
};
</script>
