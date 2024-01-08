import React from "react";

const Year = ({ data, index, setIndex }) => {
  return (
    <article className="d-flex gap-3 m-3">
      {data?.map(({ date }, i) => (
        <h3
          onClick={() => setIndex(i)}
          role="button"
          className={
            i === index
              ? "text-danger text-center border-bottom border-danger border-5 bg-secondary-subtle w-25 m-auto"
              : "text-secondary text-center bg-secondary-subtle w-25 m-auto"
          }
          key={i}
        >
          {date}
        </h3>
      ))}
    </article>
  );
};

export default Year;
