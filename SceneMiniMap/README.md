## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 场景小地图效果   SceneMiniMap
&nbsp;
### 操作步骤
&nbsp;
#### 步骤1，新建两个分组，BIG_UI和SMALL_UI。另外因为本次是展示的是UI的界面，所以都需要在Canvas下。
#### 步骤2，新建一个CameraBig，用于显示大地图UI的摄像机，摄像机的Visibility设置为33554433(勾选BIG_UI和UI_2D自动计算的)
#### 步骤3，新建一个CameraSmall，用于显示小地图UI的摄像机，摄像机的Visibility设置为33554434(勾选SMALL_UI和UI_2D自动计算的)
#### 步骤4，新建一个man节点，用于显示man玩家，man的Layer设置为UI_2D(这个设置为UI_2D是因为这个man节点同时需要在大地图和小地图上显示)，在man节点下，新建3个label，label1和label2用于在大地图上显示，Layer设置为BIG_UI，label3用于在小地图上显示，Layer设置为SMALL_UI
#### 步骤5，新建一个woman节点，用于显示woman玩家，woman的Layer设置为UI_2D(功能同上)，在woman节点下，新建3个label，label1和label2用于在大地图上显示，Layer设置为BIG_UI，label3用于在小地图上显示，Layer设置为SMALL_UI
#### 步骤6，新建一个big_tip标签，用于显示大地图上玩家的操作提示信息，big_tip的Layer设置为BIG_UI(设置为BIG_UI是因为这是大地图独有的)
#### 步骤7，设置大地图的摄像机CameraBig的rect参数为(0, 0, 1, 1)，意思为在(0, 0)处显示一个(width, height)的屏幕大小的内容，作为大地图显示的UI内容
#### 步骤8，设置小地图的摄像机CameraSmall的rect参数为(0.8, 0.8, 0.2, 0.2)，意思为在(0.8 * x, 0.8 * y)处显示一个(0.2 * width, 0.2 * height)的屏幕大小的内容(也就是屏幕的右上角)，作为小地图显示的UI内容
#### 步骤9，这边有个坑需要提示一下，那就是新创建的Camera默认设置的z为0，所以需要设置Cmmera的z为1000(只要大于0就行，因为如果z为0，UI的显示z也为0，会导致摄像机无法显示UI的内容)
&nbsp;
### 效果预览
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/sceneMiniMap.gif)