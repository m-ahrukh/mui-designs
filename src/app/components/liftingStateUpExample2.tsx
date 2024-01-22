import { useState } from "react";
import { Child } from "./child";

export function LiftingStateUpEample() {
    const [user, setUser] = useState([
        'str1',
        'str2',
        'str3',
        'str4',
        'str5',
        'str6',
        'str7',
        'str8',
        'str9',
        'str10'
    ])

    const deleteItem = (deletedId) => {
        console.log(deletedId)
        const finalUser = user.filter((value, id)=> {
            return id!= deletedId
        })

        setUser(finalUser)
    }
    return (
        <div>
            {
                user.map((value, index) => {
                    return(
                        <>
                          <Child data={value} id={index} removeItem = {deleteItem}/>  
                        </>
                    )
                })
            }
        </div>
    )
}