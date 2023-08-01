import React from 'react';

export default function Input({ placeholder, handleChange, name, className, text }) {
    return (
        <div className="mb-3">
            <input
                name={name}
                className={className}
                type={text}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}