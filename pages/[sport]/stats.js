import React from "react";

export default function Stats({ heading = null, body = null }) {
    return (
        <div>
            <h1>{ heading || 'This really is just a basic sport' }</h1>
            <p> { body || 'Again. This is nothing special.' }</p>

            <a href={'/'}>Go back</a>

            <style jsx global>{`
                html,
                body {
                  padding: 0;
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
        
                * {
                  box-sizing: border-box;
                }
          `}</style>
        </div>

    )
}
