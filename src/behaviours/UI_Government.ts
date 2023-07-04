import { getGameObjectById } from "../engine";
import { Behaviour } from "../engine/Behaviour";
import { TextRenderer } from "../engine/TextRenderer";
import { Nation } from "./Nation";

export class UI_Government extends Behaviour {
    //管理政府界面
    onStart(): void {
    }

    onUpdate(): void {
        //更新玩家帝国金钱显示
        getGameObjectById("PlayerGoldText").getBehaviour(TextRenderer).text = '金币：' + Nation.nationList[1].dora.toString();
        //更新玩家帝国等级显示
        getGameObjectById("PlayerLevelText").getBehaviour(TextRenderer).text = '等级：' + Nation.nationList[1].level.toString();
        //更新玩家帝国科技点增长显示
        getGameObjectById("PlayerTechText").getBehaviour(TextRenderer).text = '科技点：+' + Nation.nationList[1].techPerTurn.toString();
    }
}