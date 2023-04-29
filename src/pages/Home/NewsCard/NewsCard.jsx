import moment from "moment/moment";
import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align_items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author.name}</p>
          <p>
            <small>
              {moment(author.published_date).format("YYYY MMMM D")}
              {}
            </small>
          </p>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}....{" "}
              <Link to={`/news/${_id}`}>read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating?.number || 0)}
            readOnly
          />
          {<span> {rating?.number}</span>}
        </div>
        <div>
          <FaEye> </FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
