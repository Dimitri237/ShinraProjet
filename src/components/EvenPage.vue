<template>
    <div class="stock">
      <h2>Liste des Boissons</h2>
      <div v-for="(category, categoryName) in categorizedProducts" :key="categoryName">
        <h3>{{ categoryName }}</h3>
        <ul>
          <li v-for="product in category" :key="product.reference">
            {{ product.name }} - {{ product.quantity }} - {{ product.price }} MAD
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
    computed: {
      categorizedProducts() {
        return this.products.reduce((acc, product) => {
          const category = product.category || "Autres";
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(product);
          return acc;
        }, {});
      },
    },
  };
  </script>
  
  <style scoped>
  .stock {
    width: 100%;
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
  }
  
  h3 {
    margin-top: 20px;
  }
  </style>