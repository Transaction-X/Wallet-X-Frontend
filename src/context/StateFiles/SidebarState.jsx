import React, {useState} from 'react'
import SidebarContext from '../ContextFiles/SidebarContext'

const SidebarState = (props)=> {
   //make global props and global states here 
   const [collapse,isCollapse] = useState(false)
    return (
        <SidebarContext.Provider value={{collapse,isCollapse}}>
           
            {props.children}
        </SidebarContext.Provider>
    )
    }
export default SidebarState 