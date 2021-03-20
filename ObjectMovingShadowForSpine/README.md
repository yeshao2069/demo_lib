## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 物体移动残影效果  ObjectMovingShadowForSpine
#### 支持 Spine动画
&nbsp;
### 核心思想
&nbsp;
#### 1. 使用5个Sprite, 分别修改成不同的透明度，作为残影显示的图片
#### 2. 使用5个Camera，把摄像机的targetTexture设置为Sprite(把摄像机渲染的内容显示在图片上)
#### 3. 移动角色的时候，残影依次移动，从而构成完整的残影效果。

&nbsp;
### 效果预览
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/objectMovingShadowForSpine.gif)