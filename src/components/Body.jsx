import React from 'react';
import BinList from '../pages/BinData'
import AddBin from '../pages/AddBin'
import { useState } from 'react';

const Menu = () => {
    const [showBinList, setShowBinList] = useState(false);
    const [showAddBin, setShowAddBin] = useState(false);

    const selectBinList = () => {
        setShowBinList(true);
        setShowAddBin(false);
    }

    const selectAddBin = () => {
        setShowBinList(false);
        setShowAddBin(true);
    }    
      
    return (
        
        <div className="mainBody">
            <div className="App-menu">
                <ul>
                    <li
                        onClick={selectBinList}
                        >Bin List</li>
                    <li
                        onClick={selectAddBin}
                        >Add Bin</li>
                </ul>
            </div>
            <div className="mainContent">
                {showBinList && ( <BinList /> )}
                {showAddBin && ( <AddBin /> )}
            </div>
        </div>
    )  

}

export default Menu;