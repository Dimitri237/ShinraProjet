<template>
  <div class="stock-manager">
      <h1 class="title">Panneau de Contrôle</h1>

    <div class="search-box">
      <input class="seach" type="text" v-model="searchQuery" placeholder="Rechercher un produit..." />
      <button class="button btn-ajouter" @click="toggleForm">
      {{
        showForm ? "Annuler" : isEditing ? "Modifier un Produit" : "Ajouter un Produit"
      }}
    </button>
    </div>

   

    <div class="form-container" v-if="showForm">
      <div class="form_cont">
        <h2>{{ isEditing ? "Modifier le Produit" : "Ajouter un Produit" }}</h2>
        <form @submit.prevent="isEditing ? updateProduct() : addProduct()">
          <div>
              <input v-model="newProduct.name" placeholder="Désignation" required />
              <!-- <span v-if="errors.name" class="error">{{ errors.name }}</span>-->
          </div>
          <div>
              <input v-model="newProduct.reference" placeholder="Référence" required />
          </div>
          <div>
              <input
                v-model="newProduct.quantity"
                type="number"
                placeholder="Quantité"
                required
              />
          </div>
          <div>
              <input
                v-model="newProduct.price"
                type="number"
                placeholder="Prix Unitaire"
                required
              />
          </div>
          <div>
              <input
                v-model="newProduct.importDate"
                type="date"
                placeholder="Date d'Importation"
                required
              />
          </div>
          <div>
              <input
                v-model="newProduct.expirationDate"
                type="date"
                placeholder="Date d'Expiration"
                required
              />
          </div>
          <div class="btn_sect" style="display: flex; margin-top: 20px; justify-content: space-around; width: 100%">
            <button type="submit" class="button btn-ajouter">
              {{ isEditing ? "Mettre à Jour" : "Ajouter le Produit" }}
            </button>
            <button
              @click="close"
              style="background-color: red"
              type="submit"
              class="button btn-ajouter"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Désignation du Produit</th>
            <th>Quantité</th>
            <th>Référence</th>
            <th>Prix Unitaire</th>
            <th>Date d'Importation</th>
            <th>Date d'Expiration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.reference">
            <td>{{ product.name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.reference }}</td>
            <td>{{ product.price }} MAD</td>
            <td>{{ product.importDate }}</td>
            <td>{{ product.expirationDate }}</td>
            <td>
              <button class="button btn-modifier" @click="editProduct(product)">
                Modifier
              </button>
              <button class="button btn-supprimer" @click="deleteProduct(product)">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="notification" class="notification">{{ notification }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      showForm: false,
      isEditing: false,
      notification: "",
      newProduct: {
        name: "",
        quantity: "",
        reference: "",
        price: "",
        importDate: "",
        expirationDate: "",
      },
      products: [],
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) return this.products;
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    toggleForm() {
      this.showForm = true;
      if (!this.showForm) {
        this.resetForm(); // Réinitialise le formulaire si on le masque
      }
    },
    close() {
      this.showForm = false;
    },
    addProduct() {
      this.products.push({ ...this.newProduct });
      this.notification = "Produit ajouté avec succès !";
      this.resetForm();
      this.showForm = false;
    },
    editProduct(product) {
      this.newProduct = { ...product };
      this.isEditing = true;
      this.showForm = true;
    },
    updateProduct() {
      const index = this.products.findIndex(
        (p) => p.reference === this.newProduct.reference
      );
      if (index !== -1) {
        this.products.splice(index, 1, { ...this.newProduct });
        this.notification = "Produit mis à jour avec succès !";
        this.resetForm();
        this.showForm = false;
        this.isEditing = false;
      }
    },
    deleteProduct(product) {
      this.products = this.products.filter((p) => p.reference !== product.reference);
      this.notification = "Produit supprimé avec succès !";
    },
    resetForm() {
      this.newProduct = {
        name: "",
        quantity: "",
        reference: "",
        price: "",
        importDate: "",
        expirationDate: "",
      };
      this.isEditing = false; // Réinitialise le mode d'édition
    },
  },
};
</script>

<style scoped>
.stock-manager {
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  background-color: #ff4757;
  color: white;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 10px 0;
}

.search-box {
  margin: 20px 0;
  width: 98%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.form-container {
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  height: 100vh;
}
.form_cont {
  background-color: white;
  width: 30%;
  margin: auto;
  margin-top: 10% !important;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin: 10px 0;
}
.btn_sect button{
  width: 40%;
}

.btn-ajouter {
  background-color: #28a745;
  font-weight: bold;
  font-size: 17px;
  color: white;
  height: 40px;
  width: 30%;
  
}
.seach{
  width: 60%;
  height: 40px;
  outline: none;
  padding-left: 10px;
  border: none;
}

.btn-modifier {
  background-color: #3498db;
  color: white;
}

.btn-supprimer {
  background-color: #e74c3c;
  color: white;
}
.notification {
  margin: 10px 0;
  padding: 10px;
  background-color: #e0ffe0;
  color: #28a745;
  border: 1px solid #28a745;
  border-radius: 5px;
  width: 80%;
  text-align: center;
}

.container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 30%;
    margin: auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin-top: 20vh;

}

.inp_group {
    margin-top: 30px;
}

h3 {
    text-align: left;
    width: 90%;
    margin: auto;
    color: #17151691;
}

.form-container h2 {
    width: 100%;
    text-align: center;
    background-color: #ff4757;
    padding: 10px 0;
    color: white;

}

.form-container form {
    width: 100%;
    margin: 0;
    padding: 10px 0;


}

.form-container input {
    width: 90%;
    margin: 5px 0;
    height: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid #0606068a;
}
</style>
