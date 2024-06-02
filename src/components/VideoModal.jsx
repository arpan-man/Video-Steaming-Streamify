import React from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import "./VideoModal.css";

const VideoModal = ({ isOpen, onRequestClose, video }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Modal"
      className="Video-modal"
    >
      <Button
        variant="link"
        onClick={onRequestClose}
        className="btnClass"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          padding: "0",
          fontSize: "1.5rem",
          textDecoration: "none",
        }}
      >
        &times;
      </Button>
      <div>
        <iframe
          title={video.snippet.title}
          width="770vw" //560
          height="450vh" //315
          src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;
