import { Behaviour } from "../engine/Behaviour";
import { TextRenderer } from "../engine/TextRenderer";

export class Button extends Behaviour {
    //TODO Button
    state: 'idle' | 'hover' | 'pressed' | 'disabled';    // 按钮状态
    
    onClick() {
        this.gameObject.onMouseLeftDown  = () =>{
            this.gameObject.children[1].getBehaviour(TextRenderer).text = 'clicked';
        }
    }

    onStart(): void {
        // this.onClick();
        this.gameObject.onMouseEnter = () => {
            console.log('enter');
        }
    }

    constructor() {
        super();
        this.state = 'idle';    // 初始状态
        //this.onClick = null;    // 点击事件
    }
    
    // 鼠标事件
    // --------------------
    onMouseEnter(){
        this.state = 'hover';
    }

    onMouseLeave(){
        this.state = 'idle';
    }

    onMouseDown(){
        this.state = 'pressed';
    }

    onMouseUp(){
        this.state = 'hover';
        if(this.onClick){
            this.onClick();
        }
    }

}