import React from 'react';
import FullScreenIcon from '../../icons/components/full-screen';
import './full-screen.css'

const FullScren = (props) => {
    return (
        <div
         className="FullScreen"
         onClick={props.handleFullScreenClick}
        >
            <FullScreenIcon
                size={25}
                color="white"
            />
        </div>
    )
}

export default FullScren;