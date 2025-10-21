import React from 'react'
import GetStarted from './GetStarted'
import HikingGear from './HikingGear'
import MapAndTiming from './MapAndTiming'

export default function Body () {
    return (
        <div className='mt-[20px] md:mt-[200px] lg:mt-[400px]'>
            <GetStarted />
            <HikingGear />
            <MapAndTiming />
        </div>
    )
}
