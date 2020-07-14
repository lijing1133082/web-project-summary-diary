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

3、路由及页面跳转

    1) 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面：
    
    uni.navigateTo({
        url: '/pages/detail?id=123&name=user',
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
        success: (res) => {

        },
        fail: (err) => {

        },
        complete: () => {

        }
    });

    3) 关闭所有页面，打开到应用内的某个页面

    uni.reLaunch({
        url: '',
        success: (res) => {

        },
        fail: (err) => {

        },
        complete: () => {

        }
    });

    4) 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 （url不能带参数）

        pages.json

        {
            "tabBar": {
                "list":[
                    {
                        "pagePath": "pages/index/index",
                        "text": "首页"
                    },
                    {
                        "pagePath": "pages/other/other",
                        "text": "其他"
                    }
                ]
            }
        }

        other.vue  

        uni.switchTab({
            url: '/pages/index/index'
        });
    
    5) 关闭当前页面，返回上一页面或多级页面 getCurrentPage()
        
        A页面

        uni.navigateTo({
            url: 'B?id=1'
        });

        B页面

        uni.navigateTo({
            url: 'C?id=1'
        });

        C跳转到A页面

        uni.navigateBack({
            delta: 2,
            animationType: 'pop-up',
            animationDuration: 300
        });

4、数据缓存

    1) 异步设置/获取/移除指定key值

        uni.setStorage({
            key: 'USER_KEY',
            data: 'datas',
            success: ()=>{

            },
            fail: () => {

            },
            completed: ()=>{

            }
        });

        uni.getStorage({
            key: 'USER_KEY',
            success: (res) => {

            },
            fail: (err) => {

            },
            complete: () => {

            }
        });

        uni.removeStorage({
            key: 'USER_KEY',
            success: (res) => {
                
            }
        });

    2) 同步设置/获取/移除指定key值

        uni.setStorageSync('USER_KEY','datas');
        uni.getStorageSync('USER_KEY');  
        uni.removeStorageSync("USER_KEY");

    3) 异步获取storage信息

        uni.getStorageInfo({
            success: (res) => {
                console.log(res.keys);
                console.log(res.currentSize);
                console.log(res.limitSize);
            }
        });

    4) 同步获取storage信息

        const res = uni.getStorageInfoSync();
        console.log(res.keys);
        console.log(res.currentSize);
        console.log(res.limitSize);

    4) 清除/同步清除本地缓存数据

        uni.clearStorage();
        uni.clearStorageSync();