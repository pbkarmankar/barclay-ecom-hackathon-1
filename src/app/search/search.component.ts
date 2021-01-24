import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, PaginationResponse } from '../book';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bookTitle?: string;
  books: PaginationResponse = {totalPages: 0,
    pageNumber: 0,
    previousPage: 0,
    nextPage: 0,
    lastPage: 0,
    books: []};
  constructor(private productService: ProductService,  private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  async searchBooks(bookTitle: string, pageNo: number): Promise<void>{
    this.bookTitle = bookTitle;
    await this.productService.searchBooks(this.bookTitle, pageNo).subscribe((response: PaginationResponse) => {
      this.books = response;
    });
  }

  addToCart(book: Book): void {
    this.shoppingCartService.addToCart(book);
  }

}
