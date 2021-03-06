import MyComponent from "../MyComponent.js";
import Position from "../../utils/Position.js";
import { Vec2 } from '../../utils/vector';
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 
function isColor(check: any, color: any) {
    for(let i = 0; i < 4; i++) {
        if (check[i] != color[i]) return false
    }
    return true;
}
class BoxCollider extends MyComponent {
    constructor(myGameObject: any) {
        super(myGameObject);
    }
    getSize() {
        let sprite = this.gameObject.getComponent('Sprite');
        let w = sprite.image.width;
        let h = sprite.image.height;
        return new Vec2(w,h);
    }
    isTouch(col:any) {
        let thisRect = this.getRect();
        let targetRect = col.getRect();
        
        if ((Math.abs(thisRect.center.x-targetRect.center.x) <= thisRect.width/2 + targetRect.width/2) && 
        (Math.abs(thisRect.center.y-targetRect.center.y) <= thisRect.height/2 + targetRect.height/2)) {
            
            let overlap = this.findOverlap(thisRect, targetRect);
            let thisSprite = this.gameObject.getComponent('Sprite');
            let targetSprite = col.gameObject.getComponent('Sprite');
            for (let i = 0; i <= overlap.range_x; i++) {
                for (let j = 0 ; j <= overlap.range_y; j++) {
                    let pixel1 = thisSprite.getPixel(i+overlap.index1.x, j+overlap.index1.y)
                    let pixel2 = targetSprite.getPixel(i+overlap.index2.x, j+overlap.index2.y);
                    if (isColor(pixel1,[255,255,255,255]) || isColor(pixel1,[0,0,0,0]) ||
                        isColor(pixel2,[255,255,255,255]) || isColor(pixel2,[0,0,0,0]) ) 
                    {
                        continue;
                    }

                    return true;
                }
            }
        }
        return false;
    }
    getRect(){
        let size = this.getSize()
        let center = this.gameObject.getComponent('Sprite').getCenter();
        size.x -= 5
        size.y -= 5
        return {
            topleft: new Vec2(center.x-size.x/2, center.y-size.y/2),
            center: center,
            width: size.x,
            height: size.y,
        }
    }
    findOverlap(r1: { topleft: any; center?: any; width: any; height: any; }, r2: { topleft: { x: number; y: number; }; width: any; height: any; }){
        let w = new Vec2(Math.max(r1.topleft.x, r2.topleft.x), Math.min(r1.topleft.x + r1.width, r2.topleft.x + r2.width))

        let h = new Vec2(Math.max(r1.topleft.y, r2.topleft.y), Math.min(r1.topleft.y + r1.height, r2.topleft.y + r2.height))

        return {
            index1: {
                x: w.x-r1.topleft.x,
                y: h.x-r1.topleft.y, 
            },
            index2:{
                x: w.x-r2.topleft.x,
                y: h.x-r2.topleft.y
            },
            range_x: w.y-w.x,
            range_y: h.y-h.x
        }
    }
    // render for debug
    debugRender(){
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        let rect = this.getRect();
        ctx.rect(rect.topleft.x, rect.topleft.y, rect.width, rect.height);
        ctx.stroke();
    }
}
export default BoxCollider