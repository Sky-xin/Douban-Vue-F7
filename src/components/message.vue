<template>
    <div>

    </div>
</template>
<script type="text/ecmascript-6">
    var myApp = new Framework7();

    export default {
        replace: true,
        props: {
//            text: {
//                type:String,
//                default:"这是一条提示信息"
//            },
//            title: {
//                type: String,
//                default:"请注意..."
//            },
//            callBackOk: {
//                type:Function,
//                default:function(){
//                    console.log("测试....")
//                }
//            },
//            type:{
//                type:String,
//                default:"alert-text"
//            }
        },
        data() {
            return {

            };
        },
        openAlert(type,title,text,func) {

            console.log(type);
            switch (type){
                case "alert-text":
                    myApp.alert(text);
                    break;
                case "alert-text-title":
                    myApp.alert(text, this.title);
                    break;
                case "alert-text-title-callback":
                    myApp.alert(text, this.title, func);
                    break;
                case "alert-text-callback":
                    myApp.alert(text, func);
                    break;
                default:
                    console.error("type error");
                    break;
            }

        },
        methods: {

        },
        components: {

        }
    };
</script>