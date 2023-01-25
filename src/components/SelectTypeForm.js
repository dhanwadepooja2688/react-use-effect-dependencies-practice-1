function SelectTypeForm(props) {
  // Write code here...

  const handlesubmit =(event) =>{
    event.preventDefault()
 console.log(event.target.value)
 props.setDataType(event.target.value)

  }
 
  return (
    <form className="three-column-grid__expand-two gap-md" onChange={handlesubmit}>
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type">
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
