export default function CountButton({value, selected, onClick})
{

    function handleClick()
    {
        onClick(selected ? 0 : value)
    }

    return(
        <div onClick = {handleClick}>
            {value}
            {selected && <div>selected</div>}
        </div>
    )
}