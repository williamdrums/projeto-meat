import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    items: CartItem[] =[]

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            //se o item ja existir no array ele vai ser add mais a quantidade de mais um 
            foundItem.quantity = foundItem.quantity + 1
        } else {
            //add o novo item no array
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem) {
       this.items.splice(this.items.indexOf(item),1) //remove item da lista(item,1) 1 especifica a quantida de elementos a ser removido
    }

    total(): number {
        return this.items
        .map(item => item.value())
        .reduce((prev,value) => prev+value,0); //prev valor acumulado a cada iteração no array(concatena o valor anterior com o atual)
    }
}