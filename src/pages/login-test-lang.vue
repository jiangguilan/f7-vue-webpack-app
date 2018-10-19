<template>
  <f7-page>
    <f7-navbar title="Explore" back-link="Back"></f7-navbar>
    <f7-block-title>login-test-lang My App</f7-block-title>
    
    <f7-block>
      <h1>{{$t("login.title")}}</h1>
      <p>{{$t("login.username")}}</p>
      <p>{{$t("login.password")}}</p>
      <p>{{$t("login.login")}}</p>
      <p>{{$t("login.language")}}</p>
      <div>
        <p v-for="(item,index) in list" :key="index">
          <input type="radio" name="test" :value="item.value" :checked="item.isCheck" @change="changeInput(index)">{{item.name}}
        </p>
        <!--<button @click="test">获取选中的值</button>-->
      </div>  
    </f7-block>
    <div class="list">
      <ul>
        <li class="" v-for="(item,index) in list" :key="index">
          <label class="item-content item-radio">
            <input name="task" type="radio" :value="item.value" :checked="item.isCheck" @change="changeInput(index)">
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">{{item.name}}</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      list:[{value:1,isCheck:false,name:'English'},{value:2,isCheck:false,name:'中文'},{value:3,isCheck:false,name:'عربي'}],

    }
  },
  methods:{
      // langToggle(){
      //     if(this.$i18n.locale = 'zh_CN'){
      //       console.log(1)
      //       this.$i18n.locale = 'Arab_A';
      //     }else if(this.$i18n.locale = 'en_US'){
      //       console.log(2)
      //       this.$i18n.locale = 'zh_CN';
      //     }else if(this.$i18n.locale = 'Arab_A'){
      //       console.log(3)
      //       this.$i18n.locale = 'en_US';
      //     }
      // },
      changeInput: function (index){
        console.log(index)
        if(index == 0){
          this.$i18n.locale = 'en_US';
        }
        else if(index == 1){
          this.$i18n.locale = 'zh_CN';
        }
        else if(index == 2){
          this.$i18n.locale = 'Arab_A';
        }
        this.list.map((v,i)=>{ 
          if(i==index){
            v.isCheck = true
          }else{
            v.isCheck = false
          }
        })
      },
      // test: function (){
      //   this.list.map((v,i)=>{
      //     if(v.isCheck){
      //       console.log('被选中的值为:'+v.value)
      //     }
      //   })
      // },
  },
  mounted: function () {
    var $$=this.Dom7;
    $$("#home-searchbar").css("display","none")
    $$("#category-searchbar").css("display","none")
  }
}
</script>
