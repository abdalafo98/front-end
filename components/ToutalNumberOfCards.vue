<template>
  <div class="toutalCards">
    <p class="toutal">TOTAL</p>
    <p class="number"><span>{{ numberOfCards }}</span></p>
  </div>
</template>

<script>
export default {
  name: "ToutalNumberOfCards",
  props: {
    numberOfCards: String,
  },
};
</script>

<style>
.number {
  font-size: 30px;
  background-color: #0B5EFC;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  color: white;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  line-height: 44px;
  border: solid 3px rgb(194, 194, 194);

}
.number span{
    
    border:solid 3px rgb(255, 255, 255); ;
    border-radius: 50%;
    height: 44px;
    width: 50px;
     padding-left:7px ;
}
.toutalCards {
  display: flex;
  background-color: rgb(255, 255, 255);
  height: 130px;
  width: 300px;
  justify-content: center;
}
.toutal {
  margin-top: 50px;
  font-size: 18px;
}
</style>
