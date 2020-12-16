import { _decorator, Component, Node, Button, SkeletalAnimation, SkeletalAnimationComponent, SkeletalAnimationState } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {

    // walk button
    @property(Button) 
    btn1 : Button = null;

    // dance button
    @property(Button)
    btn2 : Button = null;

    @property(SkeletalAnimation)
    skeletalAnim : SkeletalAnimation = null;

    skeletalAnimState : SkeletalAnimationState = null;
    setPlayTime : number = 0; // 设置播放的最长时间

    start () {
        this.skeletalAnimState = <SkeletalAnimationState>this.skeletalAnim.node.getComponent(SkeletalAnimationComponent).getState("donghua");
        // console.log(this.skeletalAnimState);
    }

    onClickWalk (event) {
        if (this.skeletalAnimState) {
            this.skeletalAnimState.setTime(0);
            this.skeletalAnimState.play();
            this.setPlayTime = 1.3;
        }
    }

    onClickDance (event) {
        if (this.skeletalAnimState) {
            this.skeletalAnimState.setTime(2);
            this.skeletalAnimState.play();
            this.setPlayTime = this.skeletalAnimState.length;
        }
    }

    update (dt: number) {
        if (this.skeletalAnimState) {
            if (this.skeletalAnimState.time > this.setPlayTime) {
                this.skeletalAnimState.stop();
                return ;
            }
            console.log(this.skeletalAnimState.time);
        }
    }
}
