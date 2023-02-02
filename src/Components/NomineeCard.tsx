
type NomineeProps = {
    item: { id?: string, tite?: string, photoUrL?:string};
    handleCategorySelection: (e: { [key: string]: any }) => void
    selected?: { [key: string]: any }
}

// Displays Nominee details
const NomineeCard = ({ item, handleCategorySelection, selected }: NomineeProps) => {

    return (
        <div className={`nominee-card ${selected?.id === item.id && 'selected'}`}>
            <h4>{item.tite}</h4>
            <div className="image">
                <img src={item.photoUrL} alt='nominee' />
            </div>
            <button onClick={() => handleCategorySelection(item)}>Select</button>
        </div>
    )
}
export default NomineeCard;