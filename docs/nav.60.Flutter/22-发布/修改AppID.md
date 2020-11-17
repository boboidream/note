# 修改AppID


I had the same issue, and I changed in 5 location.
1.) **src/profile/AndroidManifest.xml**
2.) **src/debug/AndroidManifest.xml**
3.) **src/main/AdroidManifest.xml**
4.) build.gradle .
defaultConfig {
**applicationId**
5.) MainActivity.java on "**package**"