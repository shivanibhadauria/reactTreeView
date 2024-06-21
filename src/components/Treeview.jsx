
import Menulist from "./Menulist"
import './Treeview.css'

export default function Treeview({menus=[]}){
    return <div className="treeview">

        <Menulist list={menus} />


    </div>

}