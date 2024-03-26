import { CharacterInfo } from "@/shared/characters/entities";
import { CombatElement, CombatPath } from "@/shared/entities";

export const seeleMock: CharacterInfo = {
    element: CombatElement.QUANTUM,
    id: 1,
    name: "Seele",
    path: CombatPath.THE_HUNT,
    rarity: 5,
    startingAtk: 87,
    startingDef: 49,
    startingHp: 126,
    startingSpd: 115
}