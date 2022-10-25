import { Author, Book, BookInput, Genre, Language } from "./generated/graphql.js";

export const authors: Omit<Author, "books">[] = [
    {
        name: "Harper Lee",
        age: 30,
        id: "1"
    }, {
        name: "Miguel de Cervantes",
        age: 40,
        id: "2"
    }
]

export const languages: Omit<Language, "books">[] = [
    {
        id: "1",
        name: "Spanish"
    },
    {
        id: "2",
        name: "English"
    }
]

export let books: Book[] = [
    {
        id: "1",
        title: "To kill a mockingbird",
        genre: Genre.Drama,
        author: authors[0] as Author,
        languages: [languages[1] as Language, languages[0] as Language]
    },
    {
        id: "2",
        title: "Go set a watchman",
        genre: Genre.Drama,
        author: authors[0] as Author,
        languages: [languages[1] as Language]
    }, {
        id: "3",
        title: "Don quijote",
        genre: Genre.Adventure,
        author: authors[1] as Author,
        languages: [languages[0] as Language]
    }
]

export function createBook(input: BookInput) {
    const newBook: Book = {
        ...input,
        id: (books.length + 1).toString(),
        author: authors.filter(x => x.id == input.author)[0] as Author,
        languages: input.languages.map(id => languages.filter(x => x.id == id)[0] as Language)
    }
    books.push(newBook);
    return newBook;
}