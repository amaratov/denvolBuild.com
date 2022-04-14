import React,{useState} from 'react';
import Aux from './Aux';
import Toolbar from '../components/Menu/Toolbar/Toolbar';
import SideDrawer from "../components/Menu/SideDrawer/SideDrawer";

const Layout = props => {
    const [showSideDrawer,setShowSideDrawer] = useState(false);

    const toggleSideDrawer =()=>{
      setShowSideDrawer(!showSideDrawer);
    };

    return (
       <Aux>
           <Toolbar clicked={toggleSideDrawer}/>
           <SideDrawer closed={toggleSideDrawer} open={showSideDrawer}/>
           <main style={{marginTop:'80px',overflow:'hidden'}}>
               {props.children}
           </main>
       </Aux>
    );
};

export default Layout;
