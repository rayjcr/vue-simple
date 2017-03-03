import Vue from 'vue'
//import store from '../vuex/store'
//console.log(this);
//自定义一个滚动组件
Vue.directive('scroll',{
    bind: function(el, binding){
        var scrolltemp;
        el.addEventListener('scroll',function(){
            var tarEL = document.getElementsByClassName(binding.value[0])[0];
            // console.log(el.scrollTop);
            // console.log(el.clientHeight);
            // console.log(tarEL.clientHeight);
            //console.log(this);
            if(el.scrollTop+el.clientHeight >= tarEL.clientHeight-50){
                if(!eval(el.getAttribute("data-scroll"))){
                    binding.value[1]();
                }
            }
        })
    }
    // update: function(value) {
    //     console.log(scrolltemp)
    //     //scroll = value;
    //     console.log(value.getAttribute("data-scroll"));
    // },
})
