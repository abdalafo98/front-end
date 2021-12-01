export default {
  async getData(filter, startDate) {
    const result = await axios.get(
      `http://localhost:5000/weeklyAppointments/${filter}/'${moment(
        startDate
      ).format("YYYY-MM-DD")}'`
    );
    //'2021-11-20'
    this.list = result.data.Users;
    console.log(this.list);
  },
};
