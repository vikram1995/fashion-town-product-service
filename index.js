import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { dbConnect } from "./databaseUtils/dbConnection";

import resolvers from "./resolvers";
import typeDefs from "./schema";

const { PORT = 5001 } = process.env;

async function initServer() {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error)
  }
  
  const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  });

  //Start server
  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
initServer();