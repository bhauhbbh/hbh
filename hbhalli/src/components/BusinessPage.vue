<template>
  <div>
    <v-carousel
      cycle
      height="350"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-main>
      <v-sheet class="mx-auto" max-width="auto">
        <v-slide-group show-arrows>
          <v-slide-group-item
            v-for="(pageName, index) in pageNames"
            :key="index"
            v-slot="{ isSelected, toggle }"
          >
            <v-btn
              class="ma-2"
              rounded
              :color="isSelected ? 'primary' : undefined"
              @click="goToPage(index + 1)"
            >
              {{ pageName }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
      <!-- Router view for displaying pages -->
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      pageNames: [
        'Trends',
        'Rents',
        'Services',
        // Add more page names here as needed
      ],
    };
  },
  methods: {
    goToPage(n) {
      // Use Vue Router to navigate to the corresponding page
      this.$router.push({ name: 'page', params: { pageNumber: n } });
    },
    // goToPage(pageNames) {
    // Use Vue Router to navigate to the corresponding page
    // this.$router.push({ name: 'page', params: { pageNames } });
    // },
  },
};
</script>

<style></style>
