## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 双人分屏效果   DualSplitScreen
&nbsp;
### 操作步骤
&nbsp;
#### 步骤1，新建两个分组，LEFT_UI和RIGHT_UI。另外因为本次是展示的是UI的效果，所以都需要在Canvas下。
#### 步骤2，新建一个CameraLeft，用于显示左边玩家UI的摄像机，摄像机的Visibility设置为33816576(勾选LEFT_UI和UI_2D自动计算的)
#### 步骤3，新建一个CameraRight，用于显示右边玩家UI的摄像机，摄像机的Visibility设置为34078720(勾选RIGHT_UI和UI_2D自动计算的)
#### 步骤4，新建一个man节点，用于显示左边玩家，man的Layer设置为UI_2D(这个设置为UI_2D是因为这个man节点同时需要在左边UI和右边UI上显示)
#### 步骤5，新建一个woman节点，用于显示右边玩家，woman的Layer设置为UI_2D
#### 步骤6，新建一个left_tip标签，用于显示左边玩家的操作提示信息，left_tip的Layer设置为LEFT_UI(设置为LEFT_UI是因为这是左边玩家UI独有的)
#### 步骤7，新建一个right_tip标签，用于显示右边玩家的操作提示信息，right_tip的Layer设置为RIGHT_UI(设置为RIGHT_UI是因为这是右边玩家UI独有的)
#### 步骤8，设置左边的摄像机CameraLeft的rect参数为(0, 0, 0.5, 1)，意思为在(0, 0)处显示一个(0.5 * width, height)的屏幕大小的内容，作为左边玩家显示的UI内容
#### 步骤9，设置右边的摄像机CameraRight的rect参数为(0.5, 0, 0.5, 1)，意思为在(0.5 * x, 0)处显示一个(0.5 * width, height)的屏幕大小的内容，作为右边玩家显示的UI内容
#### 步骤10，这边有个坑需要提示一下，那就是新创建的Camera默认设置的z为0，所以需要设置Cmmera的z为1000(只要大于0就行，因为如果z为0，UI的显示z也为0，会导致摄像机无法显示UI的内容)
&nbsp;
### 效果预览
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/dualSplitScreen.gif)