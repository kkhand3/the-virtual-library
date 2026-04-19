import './Window.css'

function Window() {
  return (
    <div className="window-frame">
      <div className="window-sky">
        <div className="window-pane top-left" />
        <div className="window-pane top-right" />
        <div className="window-pane bottom-left" />
        <div className="window-pane bottom-right" />
        <div className="petal-container">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="window-petal" style={{
              left: `${10 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + (i % 3)}s`
            }} />
          ))}
        </div>
        <div className="window-branch" />
        <div className="window-ground" />
      </div>
    </div>
  )
}

export default Window