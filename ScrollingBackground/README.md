## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 无限视差滚动背景效果  ScrollingBackground
&nbsp;
### 操作步骤
&nbsp;
#### 步骤1，新建四个分组，celestial(静态物体分组，用于显示不动的物体，如月亮)、farbg(远景分组，用于显示远景)、nearbg(近景分组，用于显示近景)、player(角色分组，用于显示角色)
#### 步骤2，新建四个摄像机，MoonCamera(静态物体摄像机，visibility设置为1，勾选celestial)、FarCamera(远景摄像机，visibility设置为2，勾选farbg)、NearCamera(近景摄像机，visibility设置为4，勾选nearbg)、PlayerCamera(角色摄像机，visibility设置为8，勾选player)
#### 步骤3，分别添加静态物体、远景、近景、角色，并分别设置对应的Layer
#### 步骤4，在Canvas上挂载Game脚本，通过移动摄像机的方式，(根据运动的相对性)，背景是在移动的。
#### 步骤5，注意，创建的Camera的Z轴默认为0，需要设置为1000(大于0即可)。并设置投影模式为正交模式(ORTHO)

&nbsp;
### 效果预览
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/scrollingBackground.gif)