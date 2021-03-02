<template>
  
  
    },
    timeOutforcart() {
      document.querySelector(".add").style.display = "block";
      setTimeout(() => {
        document.querySelector(".add").style.display = "none";
      }, 3000);
    },
  },
};
</script>

<style scoped>
.add {
  background: green;
  color: #fff;
  padding: 0.6rem;
  border-radius: 6px;
  width: 350px;
  display: none;
}
</style>
