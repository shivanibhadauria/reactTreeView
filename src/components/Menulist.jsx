import Menuitem from "./Menuitem"
import './Treeview.css'

export default function Menulist({list = []}){
    return(<ul className="menulist">

        {
            list && list.length 

           ? list.map((ele)=> {
              return <><Menuitem item={ele}/></>

            })
            : null
           
        }

    </ul>)
}