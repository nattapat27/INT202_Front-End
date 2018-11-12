<template>
<router-link to="/Delivery">
  
<div >
 <div >
     <center>
        <table >
          <tr>
              <td class="sizepic" v-for="(item,i) in items" :key="i"><button type="submit"><img :src="item.src" class="image"></button></td>
              
              </tr>
              <tr>
                   <td class="sizepic" v-for="(items2,i) in items2" :key="i"><button type="submit"><img :src="items2.src" class="image"></button></td>
              </tr>
        </table>
     </center>

     
 </div>
 </div>
 </router-link>

</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-tanjun-v2TE01RG.jpg"
        },
        {
          src:
            "https://i2.cdscdn.com/pdt2/5/1/0/1/700x700/mp08510510/rw/nike-air-max-95-chaussure-de-running-homme-blanc.jpg"
        },
        {
          src:
            "https://media.shopat24.com/pdmain/348408_010_AW_01.jpg"
        },
        {
          src:
          "https://fh.lnwfile.com/_/fh/_raw/gu/as/n1.png"
        }
      ]
,
       items2: [
        {
          src:
          "https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m126333-0010.png?impolicy=upright-majesty"
        },
        {
          src:
            "https://i2.cdscdn.com/pdt2/5/1/0/1/700x700/mp08510510/rw/nike-air-max-95-chaussure-de-running-homme-blanc.jpg"
        },
        {
          src:
            "https://media.shopat24.com/pdmain/348408_010_AW_01.jpg"
        },
        {
          src:
          "https://fh.lnwfile.com/_/fh/_raw/gu/as/n1.png"
        }
      ]
    };
  }
};
</script>
<style>
    .sizepic{
        
        padding: 20px;
        

    }
    .image{
        
        width: 200px;
        height: 200px;
        
        
        
    }
    

    
</style>
>