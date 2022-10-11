<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Home'}">
          <img class="logo" src="./assets/build-a-bot-logo.png" />Build-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Build'}">
            Build
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Browse'}">
            Browse
          </router-link>
        </li>
        <li class="nav-item cart">
          <router-link class="nav-link" :to="{name: 'Cart'}">
            Cart
          </router-link>
          <div class="cart-badge">{{cart.length}}</div>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <aside>
      <router-view name="sidebar" />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    }
  }
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    margin: 10px auto 0;
  }
  aside {
    width: 100px;
    min-height: 300px;
    padding: 30px;
    background-color: #aaa;
  }
main {
  padding: 30px;
  background-color: #fff;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
  margin-right: 5px;
}
.nav-link {
  color: inherit;
  text-decoration: none;
}
.router-link-active {
  color: white;
}

.cart {
  position: relative;
  margin-left: auto;
  border-right: 0;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -12px;
  display: inline-block;
  width: 15px;
  padding: 3px;
  background-color: mediumseagreen;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
}
</style>
