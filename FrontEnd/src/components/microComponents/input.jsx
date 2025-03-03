import React from 'react';

const Input = ({ type = 'text', cssClass="", placeholder = '', value, onChange }) => {
    return (
        <div className={cssClass}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
};

export default Input;