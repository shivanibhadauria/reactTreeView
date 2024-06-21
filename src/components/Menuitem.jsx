import { useState } from "react";
import Menulist from "./Menulist";
import { FaPlus , FaMinus} from "react-icons/fa";



export default function Menuitem({ item }) {

    const [childrens, setChildrens] = useState({});


    function handleButton(currentItem){
        setChildrens({
            ...childrens,
            [currentItem] : !childrens[currentItem],
    })

    }
    console.log(childrens)


    return (<li>
        <p className="menuitem">{item.lable}</p>
        {

            item && item.children && item.children.length >0?

            <span onClick={()=>handleButton(item.lable)}>{ childrens[item.lable] ? <FaMinus/> : <FaPlus/>}</span>: null
        }

        {
            item && item.children && item.children.length > 0 && childrens[item.lable] ? (
                <Menulist list={item.children} />)

                : null
        }



    </li>



    )
}