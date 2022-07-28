import React from 'react';
import actionImage from '../images/action-image.svg'


function Footer(props) {
    return (
        <div className="footer-section">
            <div className="content h-100">
                <div className="flex justify-between align-center h-100 md-screen-none lg-footer">
                    <div className="flex-18 text-left">
                        <img src={actionImage} alt="icon" width="50" /> 
                    </div>                    
                    <div className="flex-82">
                        <div className="flex links justify-between">
                            <a href="/#">AGB</a> 
                            <a href="/#">Impressum</a> 
                            <a href="/#">Datenschutz</a> 
                            <a href="/#">Wiederrufsbelehrung</a> 
                            <a href="/#">Cookies</a>                        
                        </div>
                    </div>
                </div>  
                <div className="flex justify-between align-center h-100 sm-screen-none md-footer lg-screen-none">
                    <div className="flex-18 text-left">
                        <img src={actionImage} alt="icon" width="50" /> 
                    </div>                      
                    <div className="flex-82">
                        <div className="flex links justify-between">
                            <a href="/#">AGB</a> 
                            <a href="/#">Impressum</a> 
                            <a href="/#">Datenschutz</a> 
                            <a href="/#">Wiederrufsbelehrung</a> 
                            <a href="/#">Cookies</a>                        
                        </div>
                    </div> 
                </div>
                <div className="flex justify-center flex-column align-start h-100 sm-footer-view">
                   
                    <div className="sm-footer flex-18">
                        <div className="flex links  justify-between flex-wrap">
                            <div className="flex-82 text-left">
                                <img src={actionImage} alt="icon" width="50" /> 
                            </div> 
                            <a href="/#">AGB</a>
                            <a href="/#">Wiederruf</a> 
                            <a href="/#">Cookies</a>
                            <a href="/#">Impressum</a> 
                            <a href="/#">Datenschutz</a>                                                 
                        </div>
                    </div>                                                                
                </div>         
            </div>            
        </div>
    );
}

export default Footer;