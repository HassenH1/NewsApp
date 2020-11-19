import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Articles from "../components/Articles";
import Loading from "../components/Loading";

const US_HEADLINES_QUERY = gql`
  query {
    news {
      author
      title
      urlToImage
      publishedAt
      description
      url
    }
  }
`;

function USHeadlines() {
  return (
    <div>
      <h2 className=" my-3">Top Headlines in the US:</h2>
      <Query query={US_HEADLINES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loading loading={loading} />;
          if (error) console.log(error);
          return (
            <>
              {data?.news?.map((article, i) => (
                <Articles key={i} article={article} />
              ))}
            </>
          );
        }}
      </Query>
    </div>
  );
}

export default USHeadlines;
