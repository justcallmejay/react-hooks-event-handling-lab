// Code Keypad Component Here

function Keypad (){
    function inputPW() {
        console.log('Entering password...')
    }    
    return (
        <div>
            <input type="password" onChange={inputPW}/>
        </div>
    )
}

export default Keypad;