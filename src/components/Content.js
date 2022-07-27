import React from 'react'
import ActionButton from './ActionButton'

function Content({ modClass, reverse }) { 
    return (
        <div className={"text-left " + modClass}>
            <div className="flex justify-between h-100 flex-column">
                <h5 className="text-left w-100 mt-0 sm-title mb-0">GANZHEITLICHE KUNDENPROFILE</h5>                    
                <h2  className="text-left w-100 lg-title mb-0">Ihre Kundschaft im Panorama</h2>
                <p className="text-left">Die Kundenansicht von MeinBüro Web bietet
                    Ihnen umfassende und einfach editierbare Profilseiten, 
                    denen Sie alle wichtigen Informationen zu einzelnen Kunden 
                    entnehmen können. Aktuelle Informationen sind hierbei immer 
                    sofort verfügbar und werden auf sinnvolle Weise ergänzt,
                    sodass Sie stets über neueste Entwicklungen Ihrer Kundschaft
                    auf dem Laufenden bleiben.
                </p>
                <div className="text-left">
                    <ActionButton large="orange" text="JETZT TESTEN" />
                </div>                     
            </div>  
        </div>   
    );
}

export default Content;