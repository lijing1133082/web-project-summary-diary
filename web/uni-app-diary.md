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

2、发送请求
    uni.request({
        url: 'url请求地址',
        method: 'POST',
        data: {
            'name' : '123'
        },
        header:{
            'content-type': 'application/json'
        },
        success: (res) => {

        },
        fail: (err) => {

        }
    });

3、路由跳转

    1) 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面：
    
    uni.navigateTo({
        url: '/pages/detail?id=123&name=uniapp',
        success: (res) =>{

        },
        fail: (err) => {

        },
        complete: () => {

        }
    });

    2) 关闭当前页面，跳转到应用内的某个页面

    uni.redirectTo({
        url: '',
        succss: (res) => {

        },
        fail: (err) => {

        },
        complete: () => {

        }
    });
