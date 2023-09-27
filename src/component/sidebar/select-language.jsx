



const SelectLanguage = ({select}) => {
    return (
        <select defaultValue={select}>
            <option value="all">All Language</option>
            <option value="java">English</option>
            <option value="php">GK</option>
            <option value="html">Polish</option>
            <option value="python">Talati</option>
            <option value="javascript">Net</option>
        </select>
    );
}
 
export default SelectLanguage;