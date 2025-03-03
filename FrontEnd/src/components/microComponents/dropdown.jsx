import React, { Component } from "react";

class Dropdown extends Component {
    render() {
        const { label, options, value, onChange, cssClass } = this.props;

        return (
            <div className={cssClass}>
                <select className="form-select" value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Dropdown;
