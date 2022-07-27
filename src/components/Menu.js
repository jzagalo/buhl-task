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
import harmburger from '../images/harmburger.svg'


const mainMenuData=[ 'Alle Produckte', 'Produktfinder', 'Empfehlungen', 'Textversion' ]
const iconData = [{ text: "Suchen", img: search },{ text: "Apps", img: apps },
                    { text: "KundenCenter", img: customer },{ text: "Warenkorb", img: basket }];


function Menu() {
    const mainMenu = mainMenuData.map((item, i) => <MenuItem key={i} text={item} /> )
    const iconMenu = iconData.map((iconItem, i) => <IcomMenuItem key={i} text={iconItem.text} src={iconItem.img} /> )
    
    return (
        <div>
            <div className='menu-bar md-screen-none'>  
                <div className="content flex align-center" >
                    <div className="flex-18 ">          
                        <div className="flex justify-between align-center">
                            <HeaderLogo />  
                            <div className="flex justify-between align-center" style={{ width: "84.818482%"}}>
                            {mainMenu}  
                            </div>                                                            
                        </div>
                    </div>
                    <div className="flex justify-between align-center flex-82">
                        <div className="flex justify-end align-center w-100">
                            <div className="flex justify-between align-center" style={{ width: "83.46303%"}}>
                                {iconMenu}                           
                                <ActionButton image={actionImage} text="ANMELDEN" />                           
                            </div>
                        </div>        
                    </div>
                </div>
            </div>           
            <div className="flex content justify-between align-center lg-screen-none" style={{ height: "80px", display: "flex"}} >                            
                <div className="flex justify-between align-center">
                    <img src={harmburger} alt="Hamburger Icon" width="24" />
                    <HeaderLogo />                                                                                     
                </div>                    
                <div className="flex justify-between align-center" style={{ width: "61.28571%"}}>                    
                    {iconMenu}                           
                    <ActionButton image={actionImage} text="ANMELDEN" /> 
                </div>
            </div>     
        </div>
        
    );
}

export default Menu;