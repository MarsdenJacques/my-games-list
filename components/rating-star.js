import { useState } from "react"

export default function RatingStar({value, onClick, displayedRating, selectedRating}){

    const [clicked, setClicked] = useState(false) //if clicked outline
    let active = Math.trunc(Math.max(Math.min((displayedRating - value + 1), 1), 0) * 100)/100 //use for css in js to fill star by %
    let highlighted = selectedRating === value

    function HandleClick()
    {
        clicked ? onClick(0) : onClick(value)
        setClicked(!clicked)
    }

    return(
    <div onClick = {() => HandleClick()}>
        {value}
        {active > 0 && <div>active {active}</div>}
        {highlighted  && <div>highlighted</div>}
    </div>
    )
}