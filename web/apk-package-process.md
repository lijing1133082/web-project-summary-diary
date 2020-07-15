### android-apk 打包流程

1、在HBuilder中，执行Build > 原生App-本地打包 > 生成本地打包App资源;

2、在Android Studio中，在当前项目对应的[src/main/asset]目录创建一个apps目录;

3、将第一步生成的本地打包App资源（当前项目对应的[unpackage/resources]目录下）的所有文件，拷贝到第二步创建的apps目录下;

4、在Android Studio中，执行工具栏下的 Build > [Generate Signed Bundle/APK] > 选择APK，点击NEXT按钮 > 选择[key store]所需的文件对路径，填写相应的key和passwords值，勾选记住密码[remember passwords]选项，点击NEXT按钮，选择[release]选项, 勾选[V1或V2]选项，点击完成，等待程序进行apk打包;

5、最终在[release]目录下生成的[app-release.apk]文件即为所需的apk安装包。
