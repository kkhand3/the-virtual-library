import './Cat.css'

function Cat() {
  return (
    <div className="cat-container">
      <svg className="cat-svg" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
        
        {/* tail */}
        <path d="M62 148 Q90 140 88 118 Q86 100 72 106" 
          fill="none" stroke="#0d0d0d" strokeWidth="5" strokeLinecap="round"/>

        {/* back legs */}
        <ellipse cx="42" cy="138" rx="12" ry="7" fill="#0f0f0f"/>
        <ellipse cx="62" cy="138" rx="12" ry="7" fill="#0f0f0f"/>

        {/* body */}
        <ellipse cx="50" cy="115" rx="17" ry="30" fill="#111111"/>

        {/* neck */}
        <rect x="43" y="78" width="14" height="18" rx="7" fill="#111111"/>

        {/* head */}
        <ellipse cx="50" cy="68" rx="18" ry="17" fill="#111111"/>

        {/* ears */}
        <polygon points="36,56 30,36 44,52" fill="#111111"/>
        <polygon points="64,56 70,36 56,52" fill="#111111"/>
        <polygon points="37,54 33,40 44,51" fill="#1e0810"/>
        <polygon points="63,54 67,40 56,51" fill="#1e0810"/>

        {/* eyes - smaller, more almond shaped */}
        <ellipse cx="43" cy="67" rx="5" ry="4.5" fill="#0d6b6b"/>
        <ellipse cx="57" cy="67" rx="5" ry="4.5" fill="#0d6b6b"/>
        {/* pupils */}
        <ellipse cx="43" cy="67" rx="2.5" ry="4" fill="#040808"/>
        <ellipse cx="57" cy="67" rx="2.5" ry="4" fill="#040808"/>
        {/* single shine dot */}
        <circle cx="45" cy="65" r="1.5" fill="#ffffff"/>
        <circle cx="59" cy="65" r="1.5" fill="#ffffff"/>
        {/* upper lid */}
        <path d="M38,64 Q43,61 48,64" fill="#0d0d0d"/>
        <path d="M52,64 Q57,61 62,64" fill="#0d0d0d"/>
        
        {/* nose */}
        <polygon points="50,74 48,71 52,71" fill="#e8899a"/>
        {/* mouth */}
        <path d="M47,76 Q50,79 53,76" fill="none" stroke="#333333" strokeWidth="0.9" strokeLinecap="round"/>
        <line x1="50" y1="74" x2="50" y2="76" stroke="#555555" strokeWidth="0.7"/>

        {/* whiskers */}
        <line x1="42" y1="73" x2="18" y2="68" stroke="#aaa" strokeWidth="0.6" opacity="0.6"/>
        <line x1="41" y1="76" x2="17" y2="76" stroke="#aaa" strokeWidth="0.6" opacity="0.6"/>
        <line x1="58" y1="73" x2="82" y2="68" stroke="#aaa" strokeWidth="0.6" opacity="0.6"/>
        <line x1="59" y1="76" x2="83" y2="76" stroke="#aaa" strokeWidth="0.6" opacity="0.6"/>

        {/* front paws */}
        <ellipse cx="41" cy="148" rx="9" ry="5" fill="#111111"/>
        <ellipse cx="59" cy="148" rx="9" ry="5" fill="#111111"/>

      </svg>
      <p className="cat-name">the librarian</p>
    </div>
  )
}

export default Cat