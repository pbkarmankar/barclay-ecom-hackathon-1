import { Book } from './book';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class ShoppingCartService {
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
        const cart = this.storage.get(this.key);

        if (cart !== undefined) {
            this.cartItems = cart;
        }
    }

    key = 'cart';

    public cartItems: ShoppingCartItem[] = [];

    addToCart(book: Book): void {
        const cart = this.storage.get(this.key);

        if (cart !== undefined) {
            this.cartItems = cart;
        }

        const item = this.cartItems.find(b => b.item.bookID === book.bookID);
        if (item === undefined) {
            this.cartItems.push({item: book, quantity: 1});
        } else {
            item.quantity = item.quantity + 1;
        }
        this.storage.set(this.key, this.cartItems);
    }

    getTotalItems(): number {
        let totalItems = 0;
        for (const item of this.cartItems) {
            totalItems = totalItems + item.quantity;
        }
        return totalItems;
    }

    getItems(): ShoppingCartItem[] {
        return this.cartItems;
    }

    getTotalAmount(): number {
        return this.cartItems.reduce((acc, ci) => acc + ci.item.price * ci.quantity, 0);
    }
}

export interface ShoppingCartItem {
    item: Book;
    quantity: number;
}
