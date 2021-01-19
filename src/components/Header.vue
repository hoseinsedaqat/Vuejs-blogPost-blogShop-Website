<template>
  <div>
    <div id="header">
      <ul>
        <router-link to="/Home" class="tag">Home</router-link>
        <router-link to="/Blog" class="tag">Blog</router-link>
        <router-link to="/Shop" class="tag">BlogShop</router-link>
        <router-link to="/Cart" class="tag"
          ><i class="fa fa-shopping-cart mr-1"></i> Cart</router-link
        >
        <b-nav-item-dropdown
          right
          html="<a style='color:white;'><i class='fas fa-user-alt mr-1 tag' style='color: white'></i> Hosein</a>"
        >
          <b-dropdown-item to="/Message"
            ><i class="far fa-envelope-open mr-1"></i> Message</b-dropdown-item
          >
          <b-dropdown-item to="/Setting"
            ><i class="fas fa-cog mr-1"></i> Setting</b-dropdown-item
          >
          <b-dropdown-item to="/"
            ><i class="fa fa-sign-out mr-1"></i> Log Out</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </ul>
      <h3>Blog Post</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  background: #333;
  color: #fff;
  padding: 1.5rem;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul .tag {
  margin-right: 1.5rem;
  color: #fff;
  text-decoration: none;
}

.tag:hover {
  color: lightseagreen;
}

@media (max-width: 678px) {
  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
