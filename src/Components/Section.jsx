import React from "react";
import { useHistory } from "react-router";

export default function Section({ section }) {
  const { listDivClass, route, headlineDiv, headlineClass, headline } = section;
  const history = useHistory();

  return (
    <div
      className={listDivClass}
      onClick={() => {
        history.push(`/${route}`);
      }}
    >
      <div className={headlineDiv}>
        <h1 className={headlineClass}>{headline}</h1>
      </div>
    </div>
  );
}
