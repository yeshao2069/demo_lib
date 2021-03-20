## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 自定义骨骼动画播放效果  CustomizePlaySkeletalAnim
&nbsp;
### 方案 
#### 使用骨骼动画的SkeletalAnimationState，设置骨骼动画的开始播放时间(使用setTime), 然后在每一帧update判断当前播放的骨骼动画的time是否达到设定值。
&nbsp;
### 操作步骤
&nbsp;
#### 步骤1，将Main Camera修改为Camera3D，作为显示3D物体的摄像机，修改其Visibility为8388608(勾选UI_3D)
#### 步骤2，新建一个player节点，作为显示3D模型的节点，Layer设置为UI_3D(这边通过在资源管理器种拖动FBX模型的方式导入player节点)。
#### 步骤3，在Canvas下，新建6个button按钮，设置Layer为UI_2D，分别用于控制显示不同的动画。
#### 步骤4，将Canvas下的camera修改为Camera2D，作为显示UI的摄像机。修改visibility为33554432(勾选UI_2D)
#### 步骤5，在Canvas上挂载Game脚本，控制骨骼动画的状态。
&nbsp;
### 效果预览
#### 走路
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/customizePlaySkeletalAnimation/customizePlaySkeletalAnim_walk.gif)
#### 跳舞
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/customizePlaySkeletalAnimation/customizePlaySkeletalAnim_dance.gif)
#### 正常播放一次
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/customizePlaySkeletalAnimation/customizePlaySkeletalAnim_play.gif)
#### 循环走路
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/customizePlaySkeletalAnimation/customizePlaySkeletalAnim_loopWalk.gif)
#### 循环跳舞
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/customizePlaySkeletalAnimation/customizePlaySkeletalAnim_loopDance.gif)
#### 循环播放
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/customizePlaySkeletalAnimation/customizePlaySkeletalAnim_loopPlay.gif)