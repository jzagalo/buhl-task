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
import anmelden from '../images/anmelden.svg'


const mainMenuData=[ 'Alle Produckte', 'Produktfinder', 'Empfehlungen', 'Textversion' ]
const iconMenuData = [{ text: "Suchen", img: search },{ text: "Apps", img: apps },
                    { text: "KundenCenter", img: customer },{ text: "Warenkorb", img: basket }];

const mobileMenuData = [{ text: "Warenkorb", img: basket },{ text: "Anmelden", img: anmelden }];
function Menu() {
    const mainMenu = mainMenuData.map((item, i) => <MenuItem key={i} text={item} /> )
    const iconMenu = iconMenuData.map((iconItem, i) => <IcomMenuItem key={i} text={iconItem.text} src={iconItem.img} /> )
    const mobileMenu = mobileMenuData.map((iconItem, i) => <IcomMenuItem key={i} text={iconItem.text} src={iconItem.img} /> )
    
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
                    <div className="flex flex-column align-center hamburger-wrapper menu-item">
                        <img src={harmburger} alt="Hamburger Icon" width="24" />
                        <p>Menu</p>
                    </div>                    
                    <HeaderLogo />                                                                                     
                </div>                    
                <div className="flex justify-between align-center sm-screen-none" style={{ width: "61.28571%"}}>                    
                    {iconMenu}                           
                    <ActionButton image={actionImage} text="ANMELDEN" /> 
                </div>
                <div className="flex justify-between align-center md-screen-none sm-mobile-screen" style={{ width: "36.142857%"}}>                    
                    {mobileMenu}                     
                </div>
            </div>     
        </div>
        
    );
}

export default Menu;