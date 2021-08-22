import React from 'react'
import sectionList from './SectionList'
import Section from './Section'
import { v4 as uuidv4 } from 'uuid';


export default function Sections() {

    function createSection(section) {
        return (
            <Section
                key={uuidv4()}
                section={section}
            />
        )
    }


    return (
        <div className="sections">
            {sectionList.map(createSection)}
        </div>
    )
}
