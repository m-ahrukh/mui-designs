'use client'
import { useState } from "react"

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}


function Warning() {

  const [showWarning, setShowWarning] = useState(true);

  const handleToggleClick = () => {
    setShowWarning((prevShowWarning) => !prevShowWarning);
  };

  return (
    <>
      <div>
        <WarningBanner warn={showWarning} />
        <button className="bg-green-200 p-3 rounded" onClick={handleToggleClick}>
          {showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    </>
  )
}

export default Warning;