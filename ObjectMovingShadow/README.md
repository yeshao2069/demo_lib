## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 物体移动残影效果   ObjectMovingShadow
#### Sprite实现
&nbsp;
### 核心思想
&nbsp;
#### 1. 使用6个Sprite, 1个作为当前显示的角色，5个作为角色残影。分别修改成5个角色残影的不同的透明度。
#### 2. 使用1个Camera，显示角色。再使用一个Camera用来显示残影，把摄像机的targetTexture设置为Sprite(把摄像机渲染的内容显示在图片上)
#### 3. 移动角色的时候，残影依次移动，从而构成完整的残影效果。

&nbsp;
### 效果预览
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/objectMovingShadow.gif)