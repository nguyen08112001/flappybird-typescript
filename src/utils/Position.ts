import { Vec2 } from "./vector";
const cvs = document.getElementById('gamezone') as HTMLCanvasElement;
const ctx = cvs.getContext('2d') as CanvasRenderingContext2D; 

class Position{
    static getPositionTopLeft(pos: { x: number; y: number; }, w: number, h: number) {
        return new Vec2(pos.x - w/2, pos.y - h);
    }
    static getPositionCenter(pos: { x: number; y: number; },w: any,h: number) {
        return new Vec2(pos.x, pos.y - h/2);
    }
    static toCanvasPosition( x: number, y: number) {
        return new Vec2(cvs.width/2+x, cvs.height/2 - y);
    }
    static toNormalPosition( x: number, y: number){
        return new Vec2(x - cvs.width/2, cvs.height/2-y);
    }
    static distance(v1: { x: number; y: number; },v2: { x: number; y: number; }){
        return Math.sqrt((v1.x-v2.x)**2 + (v1.y - v2.y)**2);
    }
}

export default Position;