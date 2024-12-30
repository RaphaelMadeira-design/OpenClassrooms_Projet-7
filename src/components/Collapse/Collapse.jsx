import React, { useState, useRef, useEffect } from 'react';
import '../Css/style.css'

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3 className="collapse-title">{title}</h3>
                <div className={`collapse-chevron ${isOpen ? 'open' : ''}`}>
                    <i className="fa-solid fa-chevron-up"></i>
                </div>
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
}
  
export default Collapse