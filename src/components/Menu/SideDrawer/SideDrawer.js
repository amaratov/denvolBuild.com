import React from 'react';
import Aux from "../../../Layout/Aux";
import BackDrop from "../../UI/Modal/BackDrop/BackDrop";
import NavigationItems from "../Navigation/NavigationItems";
import "./SideDrawer.scss";
import Socials from "../../Home/Footer/Socials/Socials";

const SideDrawer = (props) => {
    let classes = ["SideDrawer", "SideDrawerClose"];
    if(props.open){
        classes = ["SideDrawer","SideDrawerOpen"];
    }


    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={classes.join(' ')} onClick={props.closed}>
                <nav>
                    <NavigationItems/>
                </nav>
                <Socials/>
            </div>
        </Aux>
    );
};

export default SideDrawer;
