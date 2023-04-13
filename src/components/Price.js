import {useParams} from 'react-router-dom';

function Price() {
    const { lastPrice } = useParams();
    return (
         <div>
            <h1>Price</h1>
            <p> { lastPrice } </p>
         </div>
    );
};

export default Price;