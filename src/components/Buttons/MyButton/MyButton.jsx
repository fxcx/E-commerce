import { Button } from "react-bootstrap";
function MyButton(props){

    return(
        <>
        <Button variant={props.color} onClick={props.buttonTouch}>{props.text}</Button>
        </>
        );
}


export default MyButton;