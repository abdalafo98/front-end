<template>
  <table id="calendar">
    <DateHeader :startDate="startDate" />

    <tr :key="index" v-for="(items, index) in list">
      <th>&nbsp; {{ items.name }}</th>
      <td :key="index" v-for="(count, index) in number" class="day">
        <!-- event -->
        <CardEvent
          v-if="items.weekDays[index].appointments.length == 1"
          :userName="
            items.weekDays[index].appointments[0].appointment_patient_id
          "
          :appointmentTimeFrom="
            items.weekDays[index].appointments[0].appointment_start_time
          "
          :appointmentTimeTo="
            items.weekDays[index].appointments[0].appointment_end_time
          "
        />

        <div v-else-if="items.weekDays[index].appointments.length > 1">
          {{ items.weekDays[index].appointments.length }}
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    number: Number,
    list: Array,
    startDate: String,
  },
};
</script>

<style></style>
