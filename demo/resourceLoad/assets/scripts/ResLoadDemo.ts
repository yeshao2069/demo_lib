
/**
 * created by: dt
 * created at: 2020/12/15
 * purpose:
 * for demostrating the problem when loading SpriteFrame from resources folder.
 */
import { _decorator, Component, Node, Sprite, resources, Prefab, instantiate, 
    director, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResLoadDemo')
export class ResLoadDemo extends Component {
    static readonly PREFAB_URL = "Cube";
    static readonly SPRITE_FRAME_URL = "light/spriteFrame";

    @property(Sprite)
    sprite: Sprite | null = null;

    start() {
        // 演示加载prefab，加载成功的话，屏幕中会出现一个cube
        resources.load(ResLoadDemo.PREFAB_URL, Prefab, (err, prefab) => {
            if (err) {
                console.log('Load ' + ResLoadDemo.PREFAB_URL + ' failed.');
                return;
            }

            if (prefab) {
                director.getScene()?.addChild(instantiate(prefab!));
            }
        });

        // 演示加载spriteframe，加载成功，屏幕中会一个图片
        resources.load(ResLoadDemo.SPRITE_FRAME_URL, SpriteFrame, (err, spriteFrame) => {
                if (err) {
                    console.log('Load ' + ResLoadDemo.SPRITE_FRAME_URL + ' failed.');
                    return;
                }
    
                if (spriteFrame && this.sprite) {
                    this.sprite.spriteFrame = spriteFrame;
                }
            }
        );
    }

}
