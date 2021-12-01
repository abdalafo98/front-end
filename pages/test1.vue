<template>
  <div id="allTheNav">
    <nav id="navigator" class="navbar" :class="{ navbaropen: opened }"></nav>
    <div id="side-menu" class="side-nav" :class="{ sidenavopen: opened }">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    <div id="main" :class="{ mainopen: opened }">
      <span class="open-slide">
        <a href="#" @click="opened = !opened">
          <div>
            <div class="bar" :class="{ topopen: opened }"></div>
            <div class="bar" :class="{ midopen: opened }"></div>
            <div class="bar" :class="{ botopen: opened }"></div>
          </div>
        </a>
      </span>
      <div class="header">
        <div class="header-items">
          <div class="icon-bar">
            <div class="dropdown">
              <div class="dropdown-content">
                <a href="#">item 1</a>
                <a href="#">item 2</a>
                <a href="#">item 3</a>
              </div>
              <a href="#"
                ><i class="icon"></i
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="30"
                  height="30"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"
                    fill="#0B5EFC"
                  /></svg
              ></a>
            </div>
            <h4 class="username">Username</h4>
            <a href="#"
              ><i class="icon"></i
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 28 28"
              >
                <g fill="none">
                  <path
                    d="M14 3a8.501 8.501 0 0 1 8.497 8.246l.004.255v4.612l1.414 3.644c.038.098.064.201.077.305l.01.158a1.28 1.28 0 0 1-1.15 1.273l-.13.007l-5.22.001a3.502 3.502 0 0 1-6.998.192l-.006-.194l-5.223.001a1.28 1.28 0 0 1-1.235-1.62l.042-.124l1.416-3.644v-4.61A8.501 8.501 0 0 1 14 3zm1.996 18.65L16 21.5l-4.002.002a2.001 2.001 0 0 0 3.998.15zM14 4.5a7.001 7.001 0 0 0-6.997 6.76l-.004.241v4.752a.75.75 0 0 1-.023.184l-.028.088L5.596 20H22.4l-1.348-3.474a.748.748 0 0 1-.045-.18L21 16.254v-4.752A7.001 7.001 0 0 0 14 4.5z"
                    fill="#0B5EFC"
                  />
                </g></svg
            ></a>
          </div>
        </div>
      </div>
      <div class="calendar-wrapper">
        <div id="calendar-container">
          <div id="calendar1" class="first-container" styles>
            <div class="calendar-header">
              <div class="left"></div>
              <div class="filter">
                <label class="container"
                  >Doctor
                  <input type="radio" checked="checked" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="container"
                  >Room
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="container"
                  >Procedure
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="container"
                  >Assistant
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="right">
                <div class="button-group">
                  <div class="buttons">
                    <button class="button1">Weekly</button>
                    <button class="button2">Daily</button>
                    <button class="button3">Time Interval</button>
                    <button class="button4">Monthly</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="calendar-view">
          <div class="middle">
            <div class="son">
              <div class="arrow1">
                <a href="#"
                  ><i class="arrow-icon"></i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="30"
                    height="35"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 6h2v12h-2zm-2 5H7.414l4.293-4.293l-1.414-1.414L3.586 12l6.707 6.707l1.414-1.414L7.414 13H16z"
                      fill="#949191"
                    /></svg
                ></a>
              </div>
              <h2 class="week-from-to">WEEK</h2>
              <div class="arrow2">
                <a href="#"
                  ><i class="arrow-icon-2"></i
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    width="30"
                    height="30"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g transform="rotate(180 12 12)">
                      <path
                        d="M18 6h2v12h-2zm-2 5H7.414l4.293-4.293l-1.414-1.414L3.586 12l6.707 6.707l1.414-1.414L7.414 13H16z"
                        fill="#949191"
                      />
                    </g></svg
                ></a>
              </div>
            </div>
          </div>
          <table id="calendar">
            <!--  days -->
            <tr class="weekdays">
              <th>&nbsp;</th>
              <th scope="col">
                Sun <br />
                Nov 12
              </th>
              <th scope="col">
                Mon <br />
                Nov 13
              </th>
              <th scope="col">
                Tue <br />
                Nov 14
              </th>
              <th scope="col">
                Wed <br />
                Nov 15
              </th>
              <th scope="col">
                Thu <br />
                Nov 16
              </th>
              <th scope="col">
                Fri <br />
                Nov 17
              </th>
              <th scope="col">
                Sat <br />
                Nov 18
              </th>
            </tr>
            <tr :key="app.id" class="days" v-for="app in list">
              <th>&nbsp;{{ app.dr - name }}</th>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day">
                <div class="event">
                  <div class="event-desc">
                    Career development @ Community College room #402
                  </div>
                  <div class="event-time">2:00pm to 5:00pm</div>
                </div>
              </td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
            </tr>
            <!--  row -->
            <tr class="days">
              <th>&nbsp;</th>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day">
                <div class="event">
                  <div class="event-desc">
                    Career development @ Community College room #402
                  </div>
                  <div class="event-time">2:00pm to 5:00pm</div>
                </div>
              </td>
              <td class="day">
                <div class="event">
                  <div class="event-desc">
                    Career development @ Community College room #402
                  </div>
                  <div class="event-time">2:00pm to 5:00pm</div>
                </div>
              </td>
              <td class="day"></td>
              <td class="day"></td>
            </tr>
            <!--  row -->
            <tr>
              <th>&nbsp;</th>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
            </tr>
            <!--  row -->
            <tr>
              <th>&nbsp;</th>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day">
                <div class="event">
                  <div class="event-desc">
                    Career development @ Community College room #402
                  </div>
                  <div class="event-time">2:00pm to 5:00pm</div>
                </div>
              </td>
              <td class="day"></td>
              <td class="day"></td>
            </tr>
            <!--  row -->
            <tr>
              <th>&nbsp;</th>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
            </tr>
            <!--  row -->
            <tr>
              <th>&nbsp;</th>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
              <td class="day"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async fetch() {
    await this.getData();
  },
  data() {
    return {
      newValue: "",
      list: [],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opened: false,
    };
  },

  methods: {
    async getData() {
      const result = await axios.get(
        `hhttp://localhost:5000/weeklyAppointments/doctors/2021-11-20`
      );
      this.list = result.data.doctors;
    },
    onClick(index) {
      //console.log(index);
      return index, this.$refs.tableHeader[1].innerHTML;
      //   console.log(this.$refs.header[1].innerText);
    },
  },
  watch: {},
  computed: {
    normalizedList() {
      return (message1) => {
        let index = Number(message1);
        return index;
        //return this.$refs.header[1].innerHTML;
        // console.log(this.$refs.header[message].innerHTML);
      };
    },
  },
};
</script>

<style>
body {
  font-family: "Arial", Serif;
  background-color: #f5f5f5;
  overflow-x: hidden;
}
.open-slide {
  float: left;
}
.side-nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}
.sidenavopen {
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
}
.side-nav a {
  padding: 10px 10px 10px 30px;
  text-decoration: none;
  font-size: 22px;
  color: #ccc;
  display: block;
  transition: 0.3s;
}
.side-nav a:hover {
  color: #fff;
}
.side-nav .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
}
#main {
  transition: margin-left 0.5s;
  overflow: hidden;
}
.mainopen {
  transition: margin-left 0.3s;
  overflow: hidden;
  margin-left: 20%;
}
nav {
  transition: margin-left -10.7s;
}
.bar {
  display: block;
  height: 5px;
  width: 35px;
  background: #000;
  margin: 5px auto;
}
.midopen {
  width: 0;
}
.bar {
  transition: all 0.3s ease;
}
.topopen {
  transform: translateY(10px) rotateZ(45deg);
}
.botopen {
  transform: translateY(-10px) rotateZ(-45deg);
}
.header {
  padding: 25px;
}
.header-items {
  margin-right: 2.5%;
  margin-left: 2.5%;
}
.calendar-wrapper {
  padding: 6%;
}
.calendar-header {
  display: flex;
  justify-content: center;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 13px;
  -ms-user-select: none;
  user-select: none;
  float: left;
  margin-left: 20px;
  font-family: sans-serif;
  margin-bottom: 40px;
  margin-right: 0px;
}
.container input {
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.container:hover input ~ .checkmark {
  background-color: #ffffff;
}
.container input:checked ~ .checkmark {
  background-color: #0b5efc;
  box-shadow: 0px 0px 15px 2px rgb(170 167 167 / 25%);
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.center {
  padding-top: 25px;
  display: block;
  text-align: center;
  font-size: 20px;
  font-family: sans-serif;
}
.son {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
.button-group {
  position: relative;
  display: inline-flex;
  float: right;
}
.buttons {
  display: flex;
  font-size: 13px;
}
.button1 {
  background-color: #fff;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button1:focus {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button1:hover {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  border: none;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}
.button2 {
  background-color: #fff;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 25px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
}
.button2:focus {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 25px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button2:hover {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 25px;
  border: none;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}
.button3 {
  background-color: #fff;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 10px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
}
.button3:focus {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 10px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button3:hover {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 10px;
  border: none;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}
.button4 {
  background-color: #fff;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
}
.button4:focus {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.button4:hover {
  background-color: #eceef8;
  border-radius: 5px;
  line-height: 20px;
  padding: 5px 20px;
  border: none;
  color: #0b5efc !important;
  margin-right: 5px;
  font-family: sans-serif;
  border: 1px solid #0b5efc;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
}
.filter {
  color: #949191;
  display: flex;
}
.left {
  font-family: sans-serif;
  font-size: 10px;
  color: #949191;
  margin-bottom: 20px;
}
.right {
  width: 60%;
}
.middle {
  text-align: center;
  font-family: sans-serif;
  letter-spacing: 1.8px;
}
#calendar {
  width: 100%;
  grid-template-columns: repeat(7, 12.2%);
  box-shadow: 1px 25px 20px 0px rgb(170 167 167 / 25%);
}
#calendar tr,
#calendar tbody {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  background-color: #fff;
}
caption {
  text-align: center;
  grid-column: 1 / -1;
  font-size: 130%;
  padding: 10px 0;
  color: #949191;
  font-family: sans-serif;
  letter-spacing: 2px;
}
#calendar a {
  color: #949191;
  text-decoration: none;
}
#calendar td,
#calendar th {
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ebe9f1;
}
#calendar .weekdays {
  background: #ffffff;
  border: 1px solid #ebe9f1;
}
#calendar .weekdays th {
  text-align: center;
  border: none !important;
  padding: 10px 6px;
  color: #949191;
  background-color: #fff;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: bold;
  padding: 3px;
}
#calendar td {
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
#calendar .days li:hover {
  background: #d3d3d3;
}
#calendar .event {
  flex: 0 0 auto;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
  line-height: 14px;
  background: #eceef8;
  border: 1px solid #0b5efc;
  color: #0b5efc;
  text-decoration: none;
  margin-top: 40px;
}
#calendar .event-desc {
  color: #949191;
  margin: 3px 0 7px 0;
  text-decoration: none;
  font-size: 80%;
  font-family: sans-serif;
  text-align: left;
}
#calendar .other-month {
  background: #f5f5f5;
  color: #949191;
}

@media (max-width: 768px) {
  #calendar .weekdays,
  #calendar .other-month {
    display: none;
  }
  #calendar li {
    height: auto !important;
    border: 1px solid #ededed;
    width: 100%;
    padding: 10px;
    margin-bottom: -1px;
  }
  #calendar,
  #calendar tr,
  #calendar tbody {
    grid-template-columns: 1fr;
  }
  #calendar tr {
    grid-column: 1 / 2;
  }
  #calendar .date {
    align-self: flex-start;
  }
}
.icon-bar {
  width: 100%;
  background-color: #fff;
  overflow: auto;
  box-shadow: 0px 0px 15px 4px rgb(170 167 167 / 25%);
}
.icon-bar a {
  float: right;
  width: 6%;
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  color: white;
  font-size: 25px;
  color: #949191;
  text-decoration: none;
}
.icon2 {
  font-style: inherit;
}
.icon2:hover {
  background-color: #fff;
}
.icon-bar a:hover {
  background-color: #eceef8;
}
.right-bar a:hover {
  background-color: #eceef8;
}
.active {
  background-color: #eceef8;
}
.dropdown-content a:hover {
  background-color: #eceef8;
}
.dropdown:hover .dropdown-content {
  display: inline-grid;
  top: 90px;
  right: 62px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 0px 9px 3px rgb(170 167 167 / 25%);
  z-index: 1;
  right: 78px;
}
.dropdown-content a {
  color: #949191;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  right: 0;
  font-size: 12px;
  font-family: sans-serif;
  width: auto;
}
.arrows {
  float: right;
  margin-left: -20px;
}
.arrows2 {
  float: left;
  margin-left: -20px;
}
#calendar .event2 {
  flex: 0 0 auto;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
  line-height: 14px;
  background: #f8ecf5;
  border: 1px solid #fc0bc8;
  color: #fc0bc8;
  text-decoration: none;
  margin-top: 40px;
}
.username {
  margin-left: 35px;
  float: left;
  font-size: 14px;
  font-family: sans-serif;
  letter-spacing: 3px;
  font-weight: 700;
  color: cornflowerblue;
  margin-top: 20px;
}
.week-from-to {
  padding-bottom: 5px;
  color: #949191;
  font-size: 18px;
}
</style>
