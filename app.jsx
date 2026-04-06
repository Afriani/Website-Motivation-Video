function Video() {
  return (
    <section id="video">
      <h2>🎥 Mijn Motivatievideo</h2>
      <div className="video-container">
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
          <iframe
            src="https://drive.google.com/file/d/1ptkjdsA7s73ukob-ijQhkPcCxcjhDs0N/preview"
            title="Motivatie video Afriani Sinaga"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <p className="video-caption">
          👋 In deze video vertel ik waarom ik graag Longfunctieanalist wil worden bij Amsterdam UMC.
        </p>
      </div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Video />);