import React from 'react'
import { useHistory } from 'react-router'

export default function Section(props) {

    const history = useHistory()

    return (
        <div className={props.listDivClass} onClick={()=>{history.push(`/${props.route}`)}}>
            <div className={props.headlineDiv}>
                <h1 className={props.headlineClass}>{props.headline}</h1>
            </div>
        </div>
    )
}

