import React from 'react';

export default function Button({ children, onClick, className , icon}) {
    return (
        <div className="pt-3">
            <button
                onClick= {onClick}
                className={className}
            >
            {children}</button>
        </div>
    )
}