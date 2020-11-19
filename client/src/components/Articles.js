import React from "react";

function Articles({
  article: { title, author, urlToImage, publishedAt, description, url },
}) {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-7">
          <h3 className="card-header">{title}</h3>
          <div className="container">
            <div className="row">
              <div className="container">
                <blockquote className="blockquote">
                  <p>{description}</p>
                  <footer className="blockquote-footer">
                    {author}{" "}
                    <cite title="Source Title">TODO: add source here</cite>
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="row py-2">
              <div className="container">
                <a
                  className="btn btn-primary btn-sm"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more..
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <svg width="100%" height="250" xmlns="http://www.w3.org/2000/svg">
            {urlToImage !== null ? (
              <image
                href={urlToImage}
                height="100%"
                width="100%"
                preserveAspectRatio="none"
              />
            ) : (
              <>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="23%" y="50%" fill="#dee2e6" dy=".3em" fontSize="2em">
                  No Image Available
                </text>
              </>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Articles;
