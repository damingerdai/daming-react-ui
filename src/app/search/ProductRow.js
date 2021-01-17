import React from 'react';

export function ProductRow(props) {
    return (
        <p>
            <span>{props.name}</span>
            <span>{props.price}</span>
        </p>
    )
}