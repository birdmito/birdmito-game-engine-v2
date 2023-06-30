import { RigidBody } from "../behaviours/unneed/RigidBody";
import { number } from "../engine/validators/number";
import { Binding, binding, makeBinding, prefab } from "./Binding";
@prefab('./assets/prefabs/UI_gamingStatic.yaml')
export class UI_gamingStaticPrefabBinding extends Binding {
    constructor() {
        super();
        makeBinding(this)
    }
}