import React from 'react'
import { useHistory } from 'react-router'

export default function Section({section}) {
const history = useHistory()

    return (
        <div className={section.listDivClass} onClick={()=>{history.push(`/${section.route}`)}}>
            <div className={section.headlineDiv}>
                <h1 className={section.headlineClass}>{section.headline}</h1>
            </div>
        </div>
    )
}

