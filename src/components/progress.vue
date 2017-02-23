<template>
    <div>
        <p><span class="progressbar-infinite" v-show="flag"></span></p>
        <!--<p>Multi-color infinite progress bar</p>-->
        <!--<p><span class="progressbar-infinite color-multi"></span></p>-->
        <!--<p>Overlay with infinite progress bar on top of the app</p>-->
        <!--<p class="demo-progressbar-infinite-overlay"><a href="#" class="button button-raised">Start Loading</a></p>-->
        <!--<p>Overlay with infinite multi-color progress bar on top of the app</p>-->
        <!--<p class="demo-progressbar-infinite-multi-overlay"><a href="#" class="button button-raised">Start Loading</a></p>-->

    </div>
</template>
<script type="text/ecmascript-6">
    var myApp = new Framework7();

    export default {
        replace: true,
        props: {
            flag:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return {

            };
        },

        methods: {

        },
        components: {

        }
    };
</script>