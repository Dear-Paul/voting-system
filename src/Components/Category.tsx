import NomineeCard from "./NomineeCard"

type PageProps = {
    title: string
    items?: { [key: string]: any }
    handleCategorySelection: (e: any) => void
    selected?: { [key: string]: any }

}

// Category component that displays nominees based on categories
const Category = ({ title, items, handleCategorySelection, selected }: PageProps) => {

    return (
        <div className="category">
            <div className="category-heading">
                <h3>{title}</h3>
            </div>
            <div className="nominee-container">
                {items && items.items.map((item: { [key: string]: any }) => (
                    <NomineeCard item={item}
                        selected={selected}
                        handleCategorySelection={handleCategorySelection} />
                ))}
            </div>

        </div>
    )
}
export default Category;