<template>
  <div class="home"></div>
</template>

<script>
import { getLogin } from "../api/api";
export default {
  data() {
    return {
      input: "15191895640",
      pwd: "123456",
    };
  },
  created() {
    this.submit();
  },
  methods: {
    submit() {
      let params = {};
      params.account = this.input;
      params.pwd = this.pwd;
      getLogin(params).then((res) => {
        console.log(res);
        // sessionStorage.setItem("user", JSON.stringify(res.data));
        // this.$router.push("/");
      });
    },
  },
};
</script>
