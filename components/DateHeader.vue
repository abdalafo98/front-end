<template>
  <tr class="weekdays">
    <th>&nbsp;</th>
    <th ref="header" :key="day" v-for="(day, index) in 7" scope="col">
      {{ addDays(startDate, index).split(" ")[0] }}

      <br />
      {{ addDays(startDate, index).split(" ")[1] }}

      {{ addDays(startDate, index).split(" ")[2] }}
    </th>
  </tr>
</template>

<script>
export default {
  name: "DateHeader",
  methods: {
    addDays(date, num) {
      const newD = new Date(date);
      newD.setDate(newD.getDate() + num);
      this.$emit("add-days");
      return newD.toString();
    },
  },
  props: {
    startDate: String,
    numberOFday: Number,
  },
};
</script>

<style></style>
