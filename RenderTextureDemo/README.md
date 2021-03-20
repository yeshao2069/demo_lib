## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 实现3D模型显示在UI中效果  RenderTextureDemo
#### RenderTexture方式实现
&nbsp;
### 方案 
#### 使用RenderTexture方式实现，需要将3D摄像机渲染的内容显示在精灵Sprite上，这就要求需要创建一个Sprite用于3D模型的内容显示。
&nbsp;
### 操作步骤
&nbsp;
#### 步骤1，将Main Camera修改为Camera3D，作为显示3D物体的摄像机，修改其Visibility为8388608(勾选UI_3D)
#### 步骤2，新建一个player节点，作为显示3D模型的节点，Layer设置为UI_3D，添加MeshRender组件(显示模型)和UIMeshRenderer组件(3D渲染管线转换到2D渲染管线)，并设置模型的Mesh和材质。
#### 步骤3，在Canvas下，新建stage节点，作为UI屏幕管理的节点，Layer设置为UI_2D。添加bg, btn, label等UI相关的2D元素，设置Layer为UI_2D。
#### 步骤4，在stage节点下，新建modelSprite，作为3D摄像机渲染内容显示的精灵，设置Layer为UI_2D。
#### 步骤5，在stage节点挂载脚本ReaderTexture。通过代码实现，将Camera3D渲染的内容显示在modelSprite上。(需要设置Camera3D的targetTexture)
#### 步骤6，将Canvas下的camera修改为Camera2D，作为显示UI的摄像机。修改visibility为33554432(勾选UI_2D)
&nbsp;
### 效果预览
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/renderTexture.gif)