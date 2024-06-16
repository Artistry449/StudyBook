import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ListFeature({ caption, icon, size }) {
    return (
        <li>
            <div className="feature">
                <p>{caption}</p>
                <FontAwesomeIcon icon={icon} size={size} />
            </div>
        </li>
    )
}
