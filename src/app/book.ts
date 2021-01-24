export interface Book {
    bookID: number;
    title: string;
    authors: string;
    isbn: number;
    price: number;
    imageUrl: string;
    average_rating: number;
    language_code: string;
    ratings_count: number;
}

export interface PaginationResponse {
    totalPages: number;
    pageNumber: number;
    previousPage: number;
    nextPage: number;
    lastPage: number;
    books: Book[];
}
