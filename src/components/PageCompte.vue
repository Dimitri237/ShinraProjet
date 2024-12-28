<template>
    <div class="stock-manager">
      <header>
        <h1>Panneau de Contrôle</h1>
      </header>
  
      <div class="search-box">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Rechercher un produit..."
        />
      </div>
  
      <button class="button btn-ajouter" @click="toggleForm">
        {{ showForm ? 'Annuler' : (isEditing ? 'Modifier un Produit' : 'Ajouter un utilisateur') }}
      </button>
  
      <div class="form-container" v-if="showForm">
        <div class="form_cont">
          <h2>{{ isEditing ? 'Modifier le Produit' : 'Ajouter un Produit' }}</h2>
        <form @submit.prevent="isEditing ? updateProduct() : addProduct()">
          <div>
            <p class="graph">
          <input v-model="newProduct.name" placeholder="Nom" required />
         <!-- <span v-if="errors.name" class="error">{{ errors.name }}</span>-->
            </p>
          </div>
          <div>
            <p class="graph">
              <input
                v-model="newProduct.prenom"
                type="text"
                placeholder="Prénom"
                required
              />
            </p>
          </div>
          <div>
            <p class="graph">
              <input v-model="newProduct.age" type="number" placeholder="Age" required />
            </p>
          </div>
          <div>
            <p class="graph">
              <input
                v-model="newProduct.adresse"
                type="text"
                placeholder="Addresse"
                required
              />
            </p>
          </div>
          <div>
            <p class="graph">
          <input v-model="newProduct.inscriptionDate" type="date" placeholder="Date d'inscription" required />
            </p>
          </div>
          <div>
            <p class="graph">
          <input v-model="newProduct.adrressmail" type="text" placeholder="Addresse mail" required />
          </p>
          </div>
          <div style="display: flex; justify-content: space-around; width: 100%">
            <button type="submit" class="button btn-ajouter">
              {{ isEditing ? "Mettre à Jour" : "Ajouter un utilisateur" }}
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
              <th>Nom</th>
              <th>Prénom</th>
              <th>Age</th>
              <th>Adresse</th>
              <th>Date d'inscription</th>
              <th>Adresse mail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.reference">
              <td>{{ product.nom }}</td>
              <td>{{ product.prenom }}</td>
              <td>{{ product.adresse }}</td>
              <td>{{ product.age }} MAD</td>
              <td>{{ product.inscriptionDate }}</td>
              <td>{{ product.adrressmail }}</td>
              <td>
                <button class="button btn-modifier" @click="editProduct(product)">Modifier</button>
                <button class="button btn-supprimer" @click="deleteProduct(product)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="notification" class="notification">{{ notification }}</div>
    </div>
  </template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      searchQuery: "",
      showForm: false,
      isEditing: false,
      notification: "",
      newProduct: {
        name: "",
        quantity: 0,
        reference: "",
        price: 0.0,
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
        quantity: 0,
        reference: "",
        price: 0.0,
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
  background-color: rgb(243, 235, 235);
  width: 30%;
  margin: auto;
  margin-top: 10% !important;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.form-container input {
  margin: 5px;
  padding: 10px;
  width: 200px; /* Ajuste la largeur selon tes besoins */
}

/* test classe graph*/
.graph {
  color: #28a745;
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
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
}

.btn-ajouter {
  background-color: #28a745;
  font-weight: bold;
  font-size: 17px;
  color: white;
  height: 40px;
  width: 30%;
  border-radius: 10px;
  
}
.seach{
  width: 60%;
  height: 40px;
  outline: none;
  border-radius: 10px;
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
</style>
