import React from 'react';
import './Tooltip.css'

const Tooltip = ({ title, children }) => <div className="icon" data-tooltip={title}>{children}</div>;

export default Tooltip;