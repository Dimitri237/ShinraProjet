<template>
  <div class="container">
    <div class="side_barre">
      <nav>
        <ul>
          <li>
            <button
              class="butt"
              :class="{ selected: currentPage === 'home' }"
              style="display: flex; text-decoration: none"
              @click="showPage('home')"
            >
              <h3 :style="{ color: currentPage === 'home' ? 'red' : 'white' }">
                <i class="fas fa-home"></i>
                Accueil
              </h3>
            </button>
          </li>
          <li>
            <button
              class="butt"
              :class="{ selected: currentPage === 'fournisseur' }"
              style="display: flex; text-decoration: none"
              @click="showPage('fournisseur')"
            >
              <h3 :style="{ color: currentPage === 'fournisseur' ? 'red' : 'white' }">
                <i class="fas fa-file-alt"></i>
                Fournisseur
              </h3>
            </button>
          </li>

          <li>
            <button
              class="butt"
              :class="{ selected: currentPage === 'factures' }"
              style="display: flex; text-decoration: none"
              @click="showPage('factures')"
            >
              <h3 :style="{ color: currentPage === 'factures' ? 'red' : 'white' }">
                <i class="fa fa-users"></i>
                Factures
              </h3>
            </button>
          </li>

          <li>
            <button
              class="butt"
              :class="{ selected: currentPage === 'commandes' }"
              style="display: flex; text-decoration: none"
              @click="showPage('commandes')"
            >
              <h3 :style="{ color: currentPage === 'commandes' ? 'red' : 'white' }">
                <i class="fas fa-bullhorn"></i>
                Commandes
              </h3>
            </button>
          </li>
          <li>
            <button
              class="butt"
              :class="{ selected: currentPage === 'stocks' }"
              style="display: flex; text-decoration: none"
              @click="showPage('stocks')"
            >
              <h3 :style="{ color: currentPage === 'stocks' ? 'red' : 'white' }">
                <i class="fas fa-envelope"></i>
                Stocks
              </h3>
            </button>
          </li>

          <li>
            <button
              class="butt"
              :class="{ selected: currentPage === 'comptes' }"
              style="display: flex; text-decoration: none"
              @click="showPage('comptes')"
            >
              <h3 :style="{ color: currentPage === 'comptes' ? 'red' : 'white' }">
                <i class="fas fa-star"></i>
                Comptes
              </h3>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div class="extra">
      <div class="page" v-if="currentPage === 'home'">0</div>

      <div class="page" v-if="currentPage === 'commandes'">10</div>
      <div class="page" v-if="currentPage === 'fournisseur'">1</div>
      <div class="page" v-if="currentPage === 'comptes'">2</div>
      <div class="page" v-if="currentPage === 'process'">3</div>
      <div class="page" v-if="currentPage === 'factures'">4</div>
      <div class="page" v-if="currentPage === 'profil'">5</div>
      <div class="page" v-if="currentPage === 'stocks'">6</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentPage: "home",
    };
  },
  mounted() {},
  methods: {
    showPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.extra {
  width: 75%;
  height: 95vh;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.608);
}
.side_barre {
  width: 22%;
  height: 95vh;
  background-color: rgb(0, 0, 0);
}
.side_barre li {
  list-style: none;
  width: 70%;
  margin: 0;
}
.side_barre ul {
  margin-top: 130px;
}
.side_barre button {
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
  border: none;
  font-size: 15px;
  background-color: transparent;
}
.side_barre button i {
  margin-right: 15px;
}
</style>
