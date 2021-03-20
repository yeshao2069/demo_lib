## Cocos Creator Demos
#### write by yeshao2069 with Cocos Creator Engine.
#### Cocos Creator V3.0.0+

&nbsp;
## 实现3D模型显示在UI中效果  UIMeshRendererDemo
#### UIMeshRenderer组件方式实现
&nbsp;
### 方案 
#### 使用UIMeshRenderer组件，只需要将绑定MeshRenderer组件的3D模型节点放到Canvas下，并调整其相对于Canvas的大小
&nbsp;
### 操作步骤


&nbsp;
#### 步骤1，在Canvas下，新建一个stage节点，作为UI屏幕管理的节点，Layer设置为UI_2D
#### 步骤2，在stage节点下，新建player节点，作为显示3D模型的节点，Layer设置为UI_3D，添加MeshRender组件(显示模型)和UIMeshRenderer组件(3D渲染管线转换到2D渲染管线)，并设置模型的Mesh和材质。
#### 步骤3，添加bg, btn, label等UI相关的2D元素，设置Layer为UI_2D。
#### 步骤4，在stage节点挂载脚本UIMeshRender，这个作用是让按钮生效,可以达到显示/隐藏/旋转模型的效果。(UIMeshRenderer组件实现的实现3D模型显示在UI中效果，是需要代码的)
#### 步骤5，设置Canvas下的camera的visibility为41943040(勾选UI_3D、UI_2D)
&nbsp;
### 效果预览
![image](https://gitee.com/yeshao2069/CocosCreatorDemos/raw/v3.0.0/images/gif/uiMeshRenderer.gif)