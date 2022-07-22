import React from 'react'
import search from '../images/search.svg'
import basket from '../images/basket.svg'
import customer from '../images/customer.svg'
import apps from '../images/apps.svg'
import MenuItem from './MenuItem'
import IcomMenuItem from './IcomMenuItem'
import HeaderLogo from './HeaderLogo'
import ActionButton from './ActionButton'
import actionImage from '../images/action-image.svg'


const mainMenuData=[ 'Alle Produckte', 'Produktfinder', 'Empfehlungen', 'Textversion' ]
const iconData = [{ text: "Suchen", img: search },{ text: "Apps", img: apps },
                    { text: "KundenCenter", img: customer },{ text: "Warenkorb", img: basket }];


function Menu(props) {
    const mainMenu = mainMenuData.map((item, i) => <MenuItem key={i} text={item} /> )
    const iconMenu = iconData.map((iconItem, i) => <IcomMenuItem key={i} text={iconItem.text} src={iconItem.img} /> )
    
    return (
        <div className='menu-bar'>
            <HeaderLogo />
            <div style={{ display: "flex", justifyContent:"center", alignItems:'center' }}>
                {mainMenu}
            </div>
            <div style={{ display: "flex", justifyContent:"center", alignItems:'center' }}>
                {iconMenu}
                <ActionButton image={actionImage} text="ANMELDEN" />
            </div>            
        </div>
    );
}

export default Menu;