function Video() {
  return (
    <section id="video">
      <h2>🎥 Mijn Motivatievideo</h2>
      <div className="video-container">
        <video controls width="100%">
          <source src="MotivationalVideo.mp4" type="video/mp4" />
          Uw browser ondersteunt geen video.
        </video>
        <p className="video-caption">
          👋 In deze video vertel ik waarom ik graag Longfunctieanalist wil worden bij Amsterdam UMC.
        </p>
      </div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Video />);