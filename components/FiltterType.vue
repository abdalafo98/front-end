<template>
  <div class="filter">
    <FilterRadioButton
      nameData="Doctors"
      @filter-data="filtterValue('doctors')"
      checked="checked"
    />
    <FilterRadioButton nameData="Room" @filter-data="filtterValue('rooms')" />
    <FilterRadioButton
      nameData="Procedure"
      @filter-data="filtterValue('procedures')"
    />
    <FilterRadioButton
      nameData="Assistants"
      @filter-data="filtterValue('assistants')"
    />
  </div>
</template>

<script>
export default {
  name: "FiltterType",
  methods: {
    filtterValue(value) {
      console.log(value);
      this.$emit("fillter-value", value);
    },
  },
};
</script>

<style></style>
