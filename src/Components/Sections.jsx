import React from 'react'
import sectionList from './SectionList'
import Section from './Section'

export default function Sections() {

    function createSection(sectionProps) {
        return (
            <Section
                key={sectionProps.id}
                listDivClass={sectionProps.listDivClass}
                headlineDiv={sectionProps.headlineDiv}
                headlineClass={sectionProps.headlineClass}
                headline={sectionProps.headline}
                imgDiv={sectionProps.imgDiv}
                imgClass={sectionProps.imgClass}
                imgURL={sectionProps.imgURL}
                route={sectionProps.route}
            />
        )
    }


    return (
        <div className="sections">
            {sectionList.map(createSection)}
        </div>
    )
}
