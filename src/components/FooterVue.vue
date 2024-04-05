<template>
  <div class="container-fluid footer-wrapp">
      <footer>
        <div class="footer-box">
          <p class="m-0">© Ivan GmbH {{ currentData }} </p>
          <FunkVue />
        </div>
      </footer>
    </div>
</template>

<script>
import FunkVue from "./FunkVue.vue";
export default {
    name:"FooterVue",
    components: {
    FunkVue    
  },
 data() {
    return {};
  },

  computed: {
    currentData() {
      var now = new Date();
      // var now = new Date(2024, 3, 3);
      // return now.getFullYear();
      return `${
        now.getFullYear() +
        " " +
        now.getDate() +
        " " +
        now.toLocaleString("default", { month: "long" }) +
        " " +
        now.getHours() +
        ":" +
        now.getMinutes()
      }`;
    },
  },
  methods: {
    // greet: function (months, month) {
    //     for (let i = 0; i < month.length; i++) {
    //       if (months == month.length) {
    //         return month[0];
    //       }
    //     }
    //   }
  },

}
</script>

<style>
@import "@/assets/styles/styles.scss";
.footer-wrapp {
  background-color: rgb(248 249 250);
}

.footer-box {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>