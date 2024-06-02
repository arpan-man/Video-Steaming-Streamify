import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import styles from "./Playlist.module.css";

const Playlist = () => {
  const [loading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC6I2NJRHPwi47BRaZsHEFRg&maxResults=10&key=AIzaSyAp6ibgxpzzCcvHRgNxRa5ApMWLQFs11NQ"
      );
      //UC6I2NJRHPwi47BRaZsHEFRg
      const playlistsData = response.data.items || [];

      const playlists = await Promise.all(
        playlistsData.map(async (playlistItem) => {
          const videosResponse = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistItem.id}&key=AIzaSyAp6ibgxpzzCcvHRgNxRa5ApMWLQFs11NQ`
          );

          playlistItem.videos = videosResponse.data.items || [];
          return playlistItem;
        })
      );

      setPlaylists(playlists);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching playlists:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const openModal = (video) => {
    if (!modalIsOpen) {
      setSelectedVideo(video);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  return (
    <div className={styles.playlistContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : playlists.length > 0 ? (
        playlists.map((playlist) => (
          <div key={playlist.id} className={styles.playlistContainer}>
            <h3>{playlist.snippet?.title}</h3>
            <div className={styles.videosContainer}>
              {playlist.videos.length > 0 ? (
                playlist.videos.map((video) => (
                  <VideoCard
                    key={video.snippet.resourceId.videoId}
                    video={video}
                    onClick={() => openModal(video)}
                  />
                ))
              ) : (
                <p>No videos available.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No Data available.</p>
      )}

      {selectedVideo && (
        <VideoModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          video={selectedVideo}
        />
      )}
    </div>
  );
};

export default Playlist;
