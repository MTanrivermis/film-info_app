import StarRatingComponent from "react-star-rating-component";

const Card = ({ data, index }) => {
  return (
    <article className="container mt-5">
      <h1 className="text-warning">{data?.[index].title}</h1>
      <p>{data?.[index].body}</p>
      <h6>{data?.[index].tags.join("/")}</h6>
      <div className="d-flex align-items start gap-2">
        <StarRatingComponent
          className="fs-5"
          name="{data?.[index].rate.toFixed(2)}"
          starCount={5}
          value={Math.round(data?.[index].rate) / 2}
          editing={true}
        />
        <h4 className="fs-4">{data?.[index].rate.toFixed(1)}/10</h4>
      </div>
    </article>
  );
};

export default Card;
