import { authors, books, languages, createBook } from "./db.js";
import type { Author, Language, Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
    Query: {
        books: (parent, args) => args.id ? books.filter(x => x.id == args.id) : books,
        authors: () => authors as Author[],
        languages: () => languages as Language[],
    },
    Mutation: {
        createBook: (parennt, args) => createBook(args.input)
    },
    Book: {
        author: (parent) => authors.filter(x => x.id == parent.author.id)[0] as Author
    },
    Author: {
        books: (parent) => books.filter(x => x.author.id == parent.id)
    },
    Language: {
        books: (parent) => books.filter(x => x.languages.filter(y => y.id == parent.id).length > 0)
    }
};