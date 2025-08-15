import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Récupération des infos GitHub une seule fois au chargement
  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-center py-5 home">
      <h1 className="display-4">Bonjour, je suis John DOE</h1>
      <h2 className="lead mb-4">Développeur web full stack</h2>
      <button
        className="btn_home"
        onClick={() => setShowModal(true)}
      >
        En savoir plus
      </button>

      {/* Modale */}
      {userData && showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{userData.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="img-fluid rounded mb-3"
                  style={{ width: "120px" }}
                />
                <p><strong>Login:</strong> {userData.login}</p>
                <p><strong>Bio:</strong> {userData.bio}</p>
                <p><strong>Repos:</strong> {userData.public_repos}</p>
                <p><strong>Followers:</strong> {userData.followers}</p>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Voir GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
