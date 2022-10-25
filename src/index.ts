import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import * as fs from "fs"
import { resolvers } from './resolvers.js';
const typeDefs = fs.readFileSync("./schema.graphql", { encoding: "utf-8" })


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const port = 4000;
const { url } = await startStandaloneServer(server, {
    listen: { port },
});

console.log(`Server is up at http://localhost:${port}/graphiql`);