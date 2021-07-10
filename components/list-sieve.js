import RatingStar from './rating-star.js'
import CountSelector from './count-selector.js'

export default function ListSieve({onSelectRating, onSelectCount, displayedRating, selectedRating, totalReviews})
{

    return(
        <div>
                <RatingStar value = {1} onClick = {(rating) => onSelectRating(rating)} displayedRating = {displayedRating} selectedRating = {selectedRating}/>
                <RatingStar value = {2} onClick = {(rating) => onSelectRating(rating)} displayedRating = {displayedRating} selectedRating = {selectedRating}/>
                <RatingStar value = {3} onClick = {(rating) => onSelectRating(rating)} displayedRating = {displayedRating} selectedRating = {selectedRating}/>
                <RatingStar value = {4} onClick = {(rating) => onSelectRating(rating)} displayedRating = {displayedRating} selectedRating = {selectedRating}/>
                <RatingStar value = {5} onClick = {(rating) => onSelectRating(rating)} displayedRating = {displayedRating} selectedRating = {selectedRating}/>
                <CountSelector totalReviews = {totalReviews} onSelect = {(count) => {onSelectCount(count)}}/>
        </div>
    )
}