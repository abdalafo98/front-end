<template>
  <div class="card" >
      <h3>
          mohammad
      </h3>
      <p>2:00-2:30</p>
      <p>App type</p>
  </div>
</template>

<script>
export default {
name:"Card",
props:{
    color:String
}

}
</script >

<style scoped>
.card{
    height: 130px;
    width: 300px;
    margin-bottom: 30px;
    background-color: rgb(199, 197, 197);
    padding-left: 15px;
    border-top: solid 3px rgb(219, 84, 179);
    border-radius: 5px;
    
   
}
</style>