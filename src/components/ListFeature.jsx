import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./../style/Feature.css"

export default function ListFeature({ caption, icon, size }) {
    return (
        <li className="feature-item">
            <div className="feature">
                <p className="feature-caption">{caption}</p>
                <FontAwesomeIcon icon={icon} size={size} className="feature-icon" />
            </div>
        </li>
    )
}