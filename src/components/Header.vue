<template>
  <div>
    <div id="header">
      <ul>
        <router-link
          v-for="(header, index) in headerData"
          :key="(header, index)"
          :to="`${header.toDirection}`"
          class="tag"
          >{{ header.text }}</router-link
        >
        <b-nav-item-dropdown
          right
          html="<a style='color:white;'><i class='fas fa-user-alt mr-1 tag' style='color: white'></i> Hosein</a>"
        >
          <b-dropdown-item
            v-for="(drop, index) in dropDownItems"
            :key="(drop, index)"
            :to="`${drop.dropDirection}`"
            ><i :class="drop.dropClass"></i> {{ drop.dropText }}</b-dropdown-item
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
  data() {
    return {
      headerData: [
        { toDirection: "/Home", text: "Home" },
        { toDirection: "/Blog", text: "Blog" },
        { toDirection: "/Shop", text: "BlogShop" },
        { toDirection: "/Cart", text: "Cart" },
      ],
      dropDownItems: [
        {
          dropDirection: "/Setting",
          dropClass: "far fa-envelope-open mr-1",
          dropText: "Setting",
        },
        {
          dropDirection: "/Message",
          dropClass: "fas fa-cog mr-1",
          dropText: "Message",
        },
        {
          dropDirection: "/",
          dropClass: "fa fa-sign-out mr-1",
          dropText: "Log Out",
        },
      ],
    };
  },
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
