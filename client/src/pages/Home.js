import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../components/Loading";
import Articles from "../components/Articles";

const GENERAL_HEADLINES_QUERY = gql`
  query {
    general {
      author
      title
      description
      url
      urlToImage
      publishedAt
    }
  }
`;

function Home() {
  return (
    <div>
      <h2 className=" my-3">Top Headlines WorldWide:</h2>
      <Query query={GENERAL_HEADLINES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loading loading={loading} />;
          if (error) console.log(error);
          return (
            <>
              {data?.general?.map((article, i) => (
                <Articles key={i} article={article} />
              ))}
            </>
          );
        }}
      </Query>
    </div>
  );
}

export default Home;
