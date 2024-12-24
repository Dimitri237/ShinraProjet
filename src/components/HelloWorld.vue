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
              <i
                :style="{ color: currentPage === 'home' ? 'red' : 'white' }"
                class="fas fa-home"
              ></i>
              <h3 :style="{ color: currentPage === 'home' ? 'red' : 'white' }">
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
              <i
                :style="{ color: currentPage === 'fournisseur' ? 'red' : 'white' }"
                class="fas fa-file-alt"
              ></i>
              <h3 :style="{ color: currentPage === 'fournisseur' ? 'red' : 'white' }">
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
              <i
                :style="{ color: currentPage === 'factures' ? 'red' : 'white' }"
                class="fa fa-users"
              ></i>
              <h3 :style="{ color: currentPage === 'factures' ? 'red' : 'white' }">
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
              <i
                :style="{ color: currentPage === 'commandes' ? 'red' : 'white' }"
                class="fas fa-bullhorn"
              ></i>
              <h3 :style="{ color: currentPage === 'commandes' ? 'red' : 'white' }">
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
              <i
                :style="{ color: currentPage === 'stocks' ? 'red' : 'white' }"
                class="fas fa-envelope"
              ></i>
              <h3 :style="{ color: currentPage === 'stocks' ? 'red' : 'white' }">
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
              <i
                :style="{ color: currentPage === 'comptes' ? 'red' : 'white' }"
                class="fas fa-star"
              ></i>
              <h3 :style="{ color: currentPage === 'comptes' ? 'red' : 'white' }">
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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.side_barre {
  width: 22%;
  height: 95vh;
  background-color: black;
}
.side_barre li {
  list-style: none;
}
.side_barre ul {
  padding-top: 150px;
}
.side_barre button {
  list-style: none;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 15px;
}
</style>
