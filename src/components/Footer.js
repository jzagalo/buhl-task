import React from 'react';
import actionImage from '../images/action-image.svg'


function Footer(props) {
    return (
        <div className="footer-section">
            <div className="content h-100">
                <div className="flex justify-between align-center h-100">
                    <div className="flex-18 text-left">
                        <img src={actionImage} alt="icon" width="50" /> 
                    </div>
                    
                    <div className="flex-82 md-screen-none">
                        <div className="flex links justify-between">
                            <a href="/#">AGB</a> 
                            <a href="/#">Impressum</a> 
                            <a href="/#">Datenschutz</a> 
                            <a href="/#">Wiederrufsbelehrung</a> 
                            <a href="/#">Cookies</a>                        
                        </div>
                    </div>
                    
                    <div className="md-footer lg-screen-none">
                        <div className="flex links justify-between">
                            <a href="/#">AGB</a> 
                            <a href="/#">Impressum</a> 
                            <a href="/#">Datenschutz</a> 
                            <a href="/#">Wiederrufsbelehrung</a> 
                            <a href="/#">Cookies</a>                        
                        </div>
                    </div>                                                  
                </div>         
            </div>            
        </div>
    );
}

export default Footer;