import './App.css';
function Forms(){
    return(
        <div id='form'>
            <form>
                <label id='label'>USER NAME</label>
                <input type='text' id='input'></input><br></br>
                <label id='label'>PASSWORD </label>
                <input type='Number' id='input'></input>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
export default Forms;