<template>
  <div class="home"></div>
</template>

<script>
import { getLogin } from "../api/index";
export default {
  data() {
    return {
      input: "admin",
      pwd: "admin123",
    };
  },
  created() {
    this.submit();
  },
  methods: {
    submit() {
      let params = {};
      params.username = this.input;
      params.password = this.pwd;
      getLogin(params).then((res) => {
        console.log(res);
        // sessionStorage.setItem("user", JSON.stringify(res.data));
        // this.$router.push("/");
      });
    },
  },
};
</script>
