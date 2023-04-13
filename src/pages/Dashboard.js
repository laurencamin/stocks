import { useState } from 'react';
import stocks from '../data';
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [stockInfo, setStockInfo] = useState(stocks);
    console.log(stockInfo)

    return (
         <div>
            Dashboard
            <ul>
                { stockInfo.map((stk) => {
                    return (
                    <li> <Link to={`/stocks/${stk.symbol}`}>
                        {stk.name} {(stk.symbol)} 
                        </Link>
                        </li>
                    )
                }) 
            }
            </ul>

         </div>
    );
};

export default Dashboard;