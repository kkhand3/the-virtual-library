import './Library.css'
import Window from './Window'
import Cat from './Cat'

function Library({ shelves }) {
  return (
    <div className="library-room">
      
      {/* ceiling */}
      <div className="ceiling" />

      {/* left bookshelf */}
      <div className="bookshelf bookshelf-left">
        <div className="shelf-label">my shelves</div>
        <div className="shelf-row">
          {['#8b4a6b','#3d6b8c','#c17a3a','#5a8c5a','#7a5a9c','#c45a5a','#4a8c7a','#9c7a3a'].map((color, i) => (
            <div key={i} className="book" style={{ backgroundColor: color, height: `${60 + (i % 3) * 15}px` }} />
          ))}
        </div>
        <div className="shelf-plank" />
        <div className="shelf-row">
          {['#6b4a8c','#5a8c5a','#c47a5a','#3d6b8c','#9c5a5a','#4a8c6b','#8c7a3a','#5a4a8c'].map((color, i) => (
            <div key={i} className="book" style={{ backgroundColor: color, height: `${55 + (i % 3) * 12}px` }} />
          ))}
        </div>
        <div className="shelf-plank" />
      </div>

      {/* center area */}
      <div className="center-area">
        <Window />
        <div className="desk">
          <Cat />
        </div>
      </div>

      {/* right bookshelf */}
      <div className="bookshelf bookshelf-right">
        <div className="shelf-label">explore</div>
        <div className="shelf-row">
          {['#4a8c7a','#c45a5a','#7a5a9c','#3d6b8c','#9c7a3a','#8b4a6b','#5a8c5a','#c17a3a'].map((color, i) => (
            <div key={i} className="book" style={{ backgroundColor: color, height: `${60 + (i % 3) * 15}px` }} />
          ))}
        </div>
        <div className="shelf-plank" />
        <div className="shelf-row">
          {['#c47a5a','#5a4a8c','#4a8c6b','#9c5a5a','#3d6b8c','#8c7a3a','#6b4a8c','#5a8c5a'].map((color, i) => (
            <div key={i} className="book" style={{ backgroundColor: color, height: `${55 + (i % 3) * 12}px` }} />
          ))}
        </div>
        <div className="shelf-plank" />
      </div>

      {/* floor */}
      <div className="floor" />

    </div>
  )
}

export default Library