## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 镜头围绕人物旋转一周效果 SelfRotateAround
#### 旋转物体方式实现
&nbsp;
### 操作步骤
&nbsp;
#### 步骤1，使用Cocos Creator 3.0 新建一个Hello World工程。(获取士兵，小岛，草地，石头等Demo资源)
#### 步骤2，修改Main Camera为Camera3D, 作为显示3D物体的摄像机，并修改Visibility为8388608(勾选UI_3D)
#### 步骤3，修改 islands、soldier、grassGroup的Layer为UI_3D，作为3D物体只被显示在Camera3D的摄像机上。
#### 步骤4，新建world3D节点，把islands、soldier、grassGroup放在world3D节点下。
#### 步骤5，添加一个Canvas，新增一个Camera，修改为Camera2D作为显示UI的摄像机。并修改Visibility为33554432(勾选UI_2D)。添加一个Label，显示当前的Demo标签内容("Self Rotate")
#### 步骤6，在world3D上挂载一个脚本rotate，在每一帧update的时候旋转world3D节点。
&nbsp;
### 效果预览
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/selfRotateAround.gif)