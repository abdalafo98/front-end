<template>
  <div>
    <h2>Calender</h2>

    <h2>A basic HTML table</h2>
<Filterr/>
<ToutalNumberOfCards :numberOfCards="15"/>
<Card color="pink"/>
    <table style="width: 100%">

      <tr>
        <th></th>
        <th :key="day" v-for="day in days">
          {{ day }}
        </th>
      </tr>
      <tr>
        <th :key="doctor" v-for="doctor in data"></th>
        <td>{{ doctor.days }}</td>
        <td></td>
      </tr>
      <tr>
        <th>Susan</th>
        <td>23 km</td>
        <td>18 km</td>
        <td>19 km</td>
        <td>15 km</td>
      </tr>
    </table>
    <p>To undestand the example better, we have added borders to the table.</p>
  </div>
</template>

<script>
import Filterr from "../components/Filterr"
import Card from "../components/Card.vue"
import ToutalNumberOfCards from "../components/ToutalNumberOfCards.vue"
export default {
  components:{Filterr,Card,ToutalNumberOfCards},
  data() {
    return {
      days: ["SAT", "SUN", "MON", "TUS", "WED", "THU", "FRI"],
      data: [],
    };
  },
  async created() {
    const response = await fetch(
      "https://619355dcd3ae6d0017da84c7.mockapi.io/doctors"
    );
    const data = await response.json();
    this.data = data;
    console.log(data);
  },
  methods: {
    async getData() {},
  },

  
};
</script>

<style>
table,
th,
td {
  border: 1px solid rgb(36, 110, 252);
}
</style>
