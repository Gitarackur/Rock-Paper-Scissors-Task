import React from 'react'
import PropTypes from "prop-types";
import './ToggleBtn.css'

const ToggleBtn = ({ selected, toggleSelected }) => {
    return (
        <div>
            bonusGame?
            <div className="toggle-container" onClick={toggleSelected}>
                <div className={`dialog-button ${selected ? "" : "disabled"}`}>
                    {selected ? "YES" : "NO"}
                </div>
            </div>
        </div>
        
    )
}


ToggleBtn.propTypes = {
    selected: PropTypes.bool.isRequired,
    toggleSelected: PropTypes.func.isRequired
};

export default ToggleBtn
