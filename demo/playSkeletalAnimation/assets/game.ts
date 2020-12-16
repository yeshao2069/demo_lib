import { _decorator, Component, Node, Button, SkeletalAnimation, SkeletalAnimationComponent, SkeletalAnimationState, UITransform } from 'cc';
const { ccclass, property } = _decorator;

const WALK_BEGIN_TIME = 0;
const DANCE_BEGIN_TIME = 2;
const WALK_TIME = 1.3;

@ccclass('Game')
export class Game extends Component {

    @property(SkeletalAnimation)
    skeletalAnim : SkeletalAnimation = null;

    skeletalAnimState : SkeletalAnimationState = null;
    setPlayTime : number = 0; // 设置播放的最长时间
    isLoop : boolean = false; // 是否循环
    mode : number = 0; // 0走路 1跳舞

    start () {
        this.skeletalAnimState = <SkeletalAnimationState>this.skeletalAnim.node.getComponent(SkeletalAnimationComponent).getState("donghua");
        // console.log(this.skeletalAnimState);
    }

    onClickWalk (event) {
        if (this.skeletalAnimState) {
            this.isLoop = false;
            this.doSetWalk();
        }
    }

    onClickDance (event) {
        if (this.skeletalAnimState) {
            this.isLoop = false;
            this.doSetDance();
        }
    }

    onClickLoopWalk (event) {
        if (this.skeletalAnimState) {
            this.isLoop = true;
            this.mode = 0;
            this.doSetWalk();
        }
    }

    onClickLoopDance (event) {
        if (this.skeletalAnimState) {
            this.isLoop = true;
            this.mode = 1;
            this.doSetDance();
        }
    }

    update (dt: number) {
        if (this.skeletalAnimState) {
            console.log(this.skeletalAnimState.time);
            if (this.skeletalAnimState.time > this.setPlayTime) {
                if (this.isLoop) {
                    if (this.mode === 0) this.doSetWalk();
                    if (this.mode === 1) this.doSetDance();
                    return ;
                }

                this.skeletalAnimState.stop();
            }
        }
    }

    doSetWalk () {
        this.skeletalAnimState.setTime(WALK_BEGIN_TIME);
        this.skeletalAnimState.play();
        this.setPlayTime = WALK_TIME;
    }

    doSetDance () {
        this.skeletalAnimState.setTime(DANCE_BEGIN_TIME);
        this.skeletalAnimState.play();
        this.setPlayTime = this.skeletalAnimState.length;
        this.skeletalAnimState.time = DANCE_BEGIN_TIME;
    }
}
