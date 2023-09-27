


const SelectCatagory = ({select}) => {
    return (
        <select defaultValue={select}>
            <option value="all">All Categories</option>
            <option value="uncategorized">category 1</option>
            <option value="academy">category 2</option>
            <option value="agency">category 3</option>
        </select>
    );
}
 
export default SelectCatagory;