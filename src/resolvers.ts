import { authors, books, languages } from "./db.js";
import type { Author, Language, Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
    Query: {
        books: (parent, args) => args.id ? books.filter(x => x.id == args.id) : books,
        authors: () => authors as Author[],
        languages: () => languages as Language[],
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