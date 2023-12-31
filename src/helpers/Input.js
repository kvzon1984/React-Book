import React from 'react';

export default function Input({ role, placeholder, handleChange, name, className, text }) {
    return (
        <div className="mb-3">
            <input
                role={role}
                name={name}
                className={className}
                type={text}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}