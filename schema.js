const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const axios = require("axios");

const NewsType = new GraphQLObjectType({
  name: "News",
  fields: () => ({
    author: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    url: { type: GraphQLString },
    urlToImage: { type: GraphQLString },
    publishedAt: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    news: {
      type: new GraphQLList(NewsType),
      resolve: (parent, args) => {
        //top Headline in US
        return axios
          .get(
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=e3ad3410d8a347d8b68935d9ee916902"
          )
          .then((res) => res.data.articles);
      },
    },
    general: {
      type: new GraphQLList(NewsType),
      resolve: (parent, args) => {
        //general news
        return axios
          .get(
            "https://newsapi.org/v2/top-headlines?category=general&apiKey=e3ad3410d8a347d8b68935d9ee916902"
          )
          .then((res) => res.data.articles);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
