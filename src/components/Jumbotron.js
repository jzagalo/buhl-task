import React from 'react';
import wiso from '../images/wiso.svg'
import teaser from '../images/teaser-lg.png'
import ActionButton from './ActionButton'

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <div className="content h-100">
                <div className="flex h-100"> 
                    <div className="flex-18">
                        <div className="flex justify-start align-center jumbotron-container">
                            <div style={{ height: "60.75949%" }} className="flex flex-column justify-between">                                
                                <div className="flex wiso-container" style={{ height: "9.72222%"}}>           
                                    <img src={wiso} alt="icon" width="163"/>                                   
                                </div>                                
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "41.66666%", flexWrap: "wrap"}}>
                                    <h1>Die Flexible Bürosoftware fur Ihr Unternehmen</h1>                                                                 
                                </div>  
                                <div style={{ height: "16.66666%"}}>
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