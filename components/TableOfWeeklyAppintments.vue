<template>
  <TableRow :number="number" :list="list" :startDate="startDate" />
</template>

<script>
export default {
  name: "TableOfWeeklyAppintments",
  props: {
    number: Number,
    startDate: String,
    list: Array,
  },
};
</script>

<style></style>
