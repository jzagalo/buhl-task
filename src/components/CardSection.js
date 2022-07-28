import React from 'react';
import books from '../images/books.svg'
import marketing from '../images/marketing.svg'
import upgrade from '../images/upgrade.svg'
import Card from './Card'

let cardData = [{ icon: books, title: "Buchhaltung leicht gemacht", text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."},
{ icon: upgrade, title: "Upgrade für Ihr Business", text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."},
{ icon: marketing, title: "So geht Marketing", text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."} 
]



function CardSection(props) {
    const cards = cardData.map((cd, i) => <Card title={cd.title} text={cd.text} icon={cd.icon} key={i} /> )
    return (
        <div className="cards-sections">
            <div className="content">
                <h3 className="text-left card-topic-header">Das Beste für Sie zusammengestellt</h3>
                <div className="flex justify-between cards-sm">
                    {cards}
                </div>           
            </div>
        </div>
    );
}

export default CardSection;