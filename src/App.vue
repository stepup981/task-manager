<template>
  <nav>
    <router-link to="/">Main Page</router-link> |
    <router-link to="/task">Task list</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/styles/normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
:root {
  --primary-color: #5d5c61;
  --primary-color-gray: #848482;
  --primary-color-sky: #7395ae;
  --primary-color-blue: #557a95;
  --primary-color-orange: #b1a296;
}

body {
  background-color: var(--primary-color-sky);
}

#app {
  color: var(--primary-color);
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

nav {
  text-align: center;
  padding: 30px;

  a {
    font-weight: 700;
    color: var(--primary-color);

    &.router-link-exact-active {
      color: var(--primary-color-orange);
    }
  }
}
</style>
