import { useState } from "react";
import CountButton from "./count-button";

export default function CountSelector({onSelect, totalReviews})
{
    
    const [activeSelector, setActiveSelector] = useState(0)
    let countOptions = [0,10,50,100]

    function HandleSelection(newCount)
    {
        onSelect(newCount)
    }

    return (
        <div>
            {
                countOptions.map((count, index) => {
                    return (count <= totalReviews && <CountButton key = {index} value = {count} selected = {activeSelector === count}
                    onClick = {(newCount) => {HandleSelection(newCount); setActiveSelector(newCount)}}/>)
                })
            }
        </div>
    )
}