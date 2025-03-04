import React from 'react';

const MenuItem = ({ href, iconClass = "ti ti-dashboard", text, linkClass = "pc-link", iconContainerClass = "pc-micon", textClass = "pc-mtext" }) => {
    return (
        <a href={href} className={linkClass}>
            <span className={iconContainerClass}>
                <i className={iconClass}></i>
            </span>
            <span className={textClass}>{text}</span>
        </a>
    );
};

export default MenuItem;