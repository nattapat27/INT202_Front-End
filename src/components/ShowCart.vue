<template>
    <div>
        <!-- <center><h1 class="header">Added To Cart</h1></center> -->

        <div class="imageProduct">
            <img src="https://bit.ly/2FlUDt7" style="width: 250px" height="250px">
        </div>

        <div><p class="titleProduct">Ralph Breaks the Internet
            <br> Mini ''Tsum Tsum'' Collection</p><br>
            <p class="subtitle">$5.95
              <br>Quanlity :
                      
                      <b-dropdown id="ddown-sm-left" text="1" size="sm" class="m-2">
                          <b-dropdown-item href="#">1</b-dropdown-item>
                          <b-dropdown-item href="#">2</b-dropdown-item>
                          <b-dropdown-item href="#">3</b-dropdown-item>
                          <b-dropdown-item href="#">4</b-dropdown-item>
                          <b-dropdown-item href="#">5</b-dropdown-item>
                          <b-dropdown-item href="#">6</b-dropdown-item>
                          <b-dropdown-item href="#">7</b-dropdown-item>
                          <b-dropdown-item href="#">8</b-dropdown-item>
                          <b-dropdown-item href="#">9</b-dropdown-item>
                          <b-dropdown-item href="#">10</b-dropdown-item>
                         
                      </b-dropdown>
            </p>

<br>
  
            
          <div class="Button">
            <v-btn class="buttonBuyNow" color="#5670BA" large >Buy Now</v-btn>   
            <v-btn class="buttonAddToShoppingCart" color="#5670BA" large>Add to Shopping Cart</v-btn>
          <br><br><br><br>
         
          
          </div>
          
        </div>
          
    </div>
              
    
</template>


<script>

</script>

<style scoped>
.imageProduct {
  margin-left: 12%;
}
.header {
  margin-top: 2.5%;
}
.titleProduct {
  color: #5670BA;
  font-size: 16px;
  font-weight: bold;
  float: right;
  margin-top: -15%; 
  margin-right: 50%; 
}

.subtitle {
  color: #979BA9;
  font-size: 12px;
  float: right;
  margin-right: 54.5%;
  margin-top: -11%;
} 
/* .buttonContinueShopping {
  
} */

.Button{
  float: right;
  margin-right: 38%;
  margin-top: -6%;
}
.buttonBuyNow{
  color: #ffffff;

  /* margin-right: 38%;
  margin-top: -6%; */
}

.buttonAddToShoppingCart{
  color: #ffffff;

 
}


</style>
