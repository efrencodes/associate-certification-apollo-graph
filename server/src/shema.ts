import gpl from "graphql-tag";

export const typeDefs = gpl`
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        lenght: Int
        modulesCount: Int
    }
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;
