### uni-app-diary

1、生命周期

    1) 页面生命周期 App.vue
    
    <script>
        export default {
            onLaunch: function(){

            },
            onShow: function(){

            },
            onHide: function(){
                
            }
        }
    </script>

    2) 页面生命周期

    <script>
        export default {
            data(){
                return {

                }
            },
            onLoad(){ // 监听页面加载，其参数为上一个页面的传递数据，用于页面传参

            },
            onShow(){

            },
            onReady(){

            },
            onResize(){ //监听窗口变化

            },
            methods:{

            },
            components:{ //组件

            }
        }
    </script>


