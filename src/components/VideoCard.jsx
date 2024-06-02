import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./VideoCard.module.css";

const VideoCard = ({ video, onClick }) => {
  return (
    <Card style={{ width: "18rem" }} className={styles.videoCard}>
      <Card.Img
        variant="top"
        src={video.snippet.thumbnails?.medium?.url || ""}
        alt={video.snippet.title}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{video.snippet.title}</Card.Title>
        <Card.Text>{video.snippet.description}</Card.Text>
        <div className="mt-auto text-left">
          <Button variant="primary" size="sm" onClick={() => onClick(video)}>
            Watch
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
