<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card>
      <v-card-title>Cart</v-card-title>
      <v-card-text>
        <!-- Display the cart items as a string -->
        {{ cartItemsAsString }}
      </v-card-text>
      <v-card-actions>
        <v-btn @click="closeCartModal">Close</v-btn>
        <v-btn color="primary" @click="shareOnWhatsApp"
          >Order on WhatsApp</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      cartItems: [
        'Item 1: Rs 100',
        'Item 2: Rs 75',
        'Item 3: Rs 25',
        'Total:  Rs 200',
        // Add your dummy cart items here
      ],
    };
  },
  computed: {
    cartItemsAsString() {
      // Convert the cart items array to a string
      return this.cartItems.join('\n');
    },
  },
  methods: {
    openCartModal() {
      this.dialog = true;
    },
    closeCartModal() {
      this.dialog = false;
    },
    shareOnWhatsApp() {
      // Implement your logic to share cart details on WhatsApp
      const whatsappURL = `https://api.whatsapp.com/send?phone=919742631520&text=${encodeURIComponent(
        this.cartItemsAsString
      )}`;
      window.open(whatsappURL, '_blank');
    },
  },
};
</script>
