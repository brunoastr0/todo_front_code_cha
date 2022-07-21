
import '../../styles/ErrorMessage.css';
export default function ErrorMessage(props) {
    const { message } = props;



    return (

        <>
            <div className="errorMessage">
                <p>{message}</p>
            </div>

        </>


    )
}