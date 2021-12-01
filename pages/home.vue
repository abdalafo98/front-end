<template>
  <div>
    <input type="date" v-model="startDate" />
    <input type="date" v-model="endDate" />
    <input type="text" @keypress.enter="$fetch" v-model="num" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      startDate: "",
      endDate: "",
      num: "",
    };
  },
  async fetch() {
    this.getData();
  },
  updated() {
    console.log(this.datas);
  },
  created() {},
  methods: {
    async getData() {
      console.log(this.num);
      const data = axios.get(`http://localhost:5000/appointments/${this.num}`);
      const result = await data;
      this.datas = result;
      console.log("result", this.datas);
    },
  },
  computed: {},
};
</script>

<style></style>
