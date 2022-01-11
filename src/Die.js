import React from 'react';

export default function Die({ dieFace }) {
    return (
            <div >
                <i  style={{ color: 'purple', fontSize: '8em'}} className={dieFace}></i>
            </div>
    )
}
