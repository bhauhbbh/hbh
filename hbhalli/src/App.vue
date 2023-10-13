<script>
import { RouterLink, RouterView } from 'vue-router';
import CartModal from './components/CartModal.vue';

export default {
  components: {
    CartModal,
  },
  methods: {
    openCartModal() {
      this.$refs.cartModal.openCartModal();
    },
  },
};
</script>

<template>
  <v-app>
    <v-app-bar class="bg-green-accent-4" :elevation="0">
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <!-- <v-avatar
              class="me-3"
              image="https://cdn.vuetifyjs.com/docs/images/logos/v.png"
              rounded="0"
            /> -->
            <v-button>
              <RouterLink to="/"
                ><span class="text-white font-weight-black"
                  >HBhalli</span
                ></RouterLink
              >
            </v-button>
            <v-spacer></v-spacer>
            <v-icon icon="mdi-cart text-white" size="large" />
            <!-- Cart modal button -->
            <v-btn @click="openCartModal">Open Cart </v-btn>

            <!-- Include the cart modal component -->
            <cart-modal ref="cartModal"></cart-modal>
          </div>
        </v-app-bar-title>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer>
      <v-container
        class="text-overline d-flex align-center justify-space-between"
      >
        <div>
          Copyright &copy; 2016-{{ new Date().getFullYear() }} Vuetify, LLC
        </div>

        <v-icon icon="$vuetify" size="x-large" />
      </v-container>
    </v-footer>
  </v-app>
</template>
