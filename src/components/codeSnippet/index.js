import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BiClipboard } from 'react-icons/bi';
import { AiOutlineCheck } from 'react-icons/ai'
import "./style.css"



const CodeSnippet = ({ text }) => {
  const [iscopy, setIscopy] = useState(true)
  const handleCopyClick = () => {
    setIscopy(false);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIscopy(true);
    }, 2000);
  };


  const renderCopyTooltip = (props) => (
    <Tooltip id="copy-tooltip" {...props}>
      {iscopy ? "Copy to clipboard" : "copied"}
    </Tooltip>
  );

  return (
    <>
      <div className='mainDiv'>
        <div style={{width: "100%", overflow: "hidden"}}>
          <div style={{width: "100%", overflow: "hidden"}}>
          <pre style={{paddingBottom: "1.5rem", marginBottom: 0, padding: "10px"}}>{text}</pre>
          </div>
        </div>
        <OverlayTrigger placement="top" overlay={renderCopyTooltip}>
          <button onClick={handleCopyClick} className='copy-icon-button'>
            {iscopy ? <BiClipboard className='copy-icon' /> : <AiOutlineCheck className='copy-icon' />}
          </button>
        </OverlayTrigger>
      </div>
    </>
  );
};

export default CodeSnippet;
