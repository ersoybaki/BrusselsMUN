import "./MediaSection2.css";

export default function MediaSection2() {
  return (
    <section className="media-section-2">
      <div className="media-section-2__container">
        <div className="media-section-2__card">
          <div className="media-section-2__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <h3 className="media-section-2__title">
            Official Archive <em>Access</em>
          </h3>
          <p className="media-section-2__text">
            Access curated photo collections and materials from each edition of
            BrusselsMUN, organized by year and event to help you revisit every
            key moment.
          </p>
        </div>

        <div className="media-section-2__card">
          <div className="media-section-2__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="media-section-2__title">
            Organise by <em>Committee</em>
          </h3>
          <p className="media-section-2__text">
            Browse galleries by committee to relive debates, alliances, and
            resolutions from your specific room, or discover what other councils
            experienced.
          </p>
        </div>

        <div className="media-section-2__card">
          <div className="media-section-2__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </div>
          <h3 className="media-section-2__title">
            Shareable <em>Memories</em>
          </h3>
          <p className="media-section-2__text">
            Download and share high-quality images for portfolios, applications,
            and social media, showcasing your BrusselsMUN journey with friends
            and future collaborators.
          </p>
        </div>
      </div>
    </section>
  );
}
