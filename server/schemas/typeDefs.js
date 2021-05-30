const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Category {
    _id: ID
    name: String
}


//type Order (photo) here?
type Order {
    _id: ID
    purchaseData: String
    products: [Product]
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
    category: Category
}

type User {
    _id: ID
    firstName: String,
    lastName: String
    email: String
    orders: [Order]
}

type Checkout {
    session: ID
}

type Auth {
    token: ID
    user: User
}

type Query {
    user: User
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product

}
`;

module.exports = typeDefs;