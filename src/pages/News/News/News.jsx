import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../../Home/Category/Category";
import EditorsInsigth from "../EditorsInsigth/EditorsInsigth";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const {
    _id,
    title,
    category_id,
    image_url,
    details,
  } = news;
  return (
    <div>
      
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/Category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft>ALL news Category{" "}
            </Button>{" "}
          </Link>{" "}
        </Card.Body>
      </Card>
      <EditorsInsigth></EditorsInsigth>
    </div>
  );
};

export default News;
