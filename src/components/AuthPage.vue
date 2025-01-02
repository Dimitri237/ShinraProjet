<template>
    <div class="container">
        <h2>CONNEXION</h2>
        <form @submit.prevent="login" action="">
            <div class="inp_group">
                <h3 for="">Username/Email</h3>
                <input type="text" name="" id="">
            </div>
            <div class="inp_group">
                <h3 for="">Password</h3>
                <input type="text" name="" id="">
            </div>
            <button @click="setTimeout" class="btn" type="submit" :disabled="loading">
                <span class="loading-indicator" v-if="loading"></span>
                <span style="font-size: 20px;" v-else>Connexion</span>
            </button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        login() {
            this.loading = true;

            // this.$router.push('/HelloWorld');
            setTimeout(() => {
                this.$router.push('/HelloWorld');
            }, 4000);
        },

    },
};
</script>
<style scoped>
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

.container h2 {
    width: 100%;
    text-align: center;
    background-color: #ff4757;
    padding: 10px 0;
    color: white;

}

.container form {
    width: 100%;
    margin: 0;
    padding: 10px 0;


}

.inp_group input {
    width: 90%;
    height: 27px;
    border: none;
    outline: none;
    border-bottom: 1px solid #ff4757;
}

.btn {
    margin: 35px;
    border: none;
    font-size: 15px;
    color: #ff4757;
    background-color: white;
    font-weight: bold;
    padding: 10px 20px;
}

.loading-indicator::after {
    content: "";
    display: inline-block;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 3px solid #ff4757;
    border-top-color: white;
    border-bottom-color: white;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.loading-indicator {
    display: flex;
    justify-content: center;
    height: 100px;
}
</style>