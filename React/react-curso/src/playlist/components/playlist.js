import React from 'react';
import Media from './media.js';
import Play from '../../icons/components/play';
import Volume from '../../icons/components/volume';
import Pause from '../../icons/components/pause';


//Componente funcional
function Playlist(props) {
        return (
            <div className="Playlist">
                {
                    props.playlist.map((item) => {
                        return(
                            <Media 
                                {...item} 
                                key={item.id}
                                openModal={props.handleOpenModal}
                            />
                        )
                    })
                }
            </div>
        )
}

export default Playlist;