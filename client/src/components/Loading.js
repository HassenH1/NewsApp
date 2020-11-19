import React from "react";
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading({ loading }) {
  return (
    <div className="sweet-loading">
      <CircleLoader
        css={override}
        size={50}
        color={"#36D7B7"}
        loading={loading}
      />
    </div>
  );
}

export default Loading;
