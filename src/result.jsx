
function Result({ randomNumber, term }) {
    let result;
    if (term) {
        if (randomNumber > term) {
            result = 'lower';
        
        
        } else if (randomNumber < term) {
            result = "higher";

        }
        else if (randomNumber == term) {
            result = "correct";

        }
        else {
            return "Enter the valid number"
        }
    }
    return (
        <h3>You Guessed { result}</h3>
    )
}

export default Result 