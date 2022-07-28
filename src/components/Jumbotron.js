import React from 'react';
import wiso from '../images/wiso.svg'
import teaser from '../images/teaser-lg.png'
import ActionButton from './ActionButton'

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <div className="content h-100">
                <div className="flex h-100 wrapper"> 
                    <div className="flex-18">
                        <div className="flex justify-start align-center jumbotron-container">
                            <div className="flex flex-column justify-between text-statement">                                
                                <div className="flex wiso-container">           
                                    <img src={wiso} alt="icon" />                                   
                                </div>                                 
                                <h1>Die Flexible Bürosoftware fur Ihr Unternehmen</h1>                          
                                <div className="action-button-container">
                                    <ActionButton large="orange" text="JETZT TESTEN" />
                                </div>                                                          
                            </div>                                            
                        </div>
                    </div>  
                    <div className="flex-82">
                        <div className="flex justify-center teaser align-center">
                            <img src={teaser} alt="icon" />
                        </div> 
                    </div>               
                </div>          
            </div>            
        </div>
    );
}

export default Jumbotron;