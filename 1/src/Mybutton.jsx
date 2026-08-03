export default function Mybutton() {
    function handClick() {
        alert('You clicked me!')
    }
    return (
        <button onClick={handClick}>Click me!</button>
    )
}