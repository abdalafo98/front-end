<template>
  <div class="filterr">

    <div class="filterr" :key="a" v-for="a in arr">

      <input class="radio" type="radio" :name="a" :value="a" />
      <p>{{ a }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filterr",
  data() {
    return {
      arr: Array,
    };
  },
  created() {
    this.arr = ["Doctors", "Rooms", "Procedure", "Assistont"];
  },
  props: {},
};
</script>

<style>
.filterr {
  display: flex;
  flex-direction: row;
  width: 50%;
 
}
.radio{
    height: 30px;
    width: 25px;
    margin-top:10px;
    margin-right: 10px;
    
}
</style>
