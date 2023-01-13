import './App.css'

function Input (props){
    return (
        <input className='button' type={props.type} value={props.value} onClick={props.onClick}></input>
    )
}

export default Input