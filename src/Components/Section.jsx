import React from 'react'
import { useHistory } from 'react-router'

export default function Section(props) {

    const { listDivClass, route, headlineDiv, headlineClass, headline } = props

    const history = useHistory()

    return (
        <div className={listDivClass} onClick={()=>{history.push(`/${route}`)}}>
            <div className={headlineDiv}>
                <h1 className={headlineClass}>{headline}</h1>
            </div>
        </div>
    )
}

