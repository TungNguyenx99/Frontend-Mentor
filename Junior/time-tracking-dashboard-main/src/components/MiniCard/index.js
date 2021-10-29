import './style.css'
import ellipsis from '../../assets/icon-ellipsis.svg'

export const MiniCard = ({InfoCard}) => {
    return (
        <div class="main" style={{backgroundColor:`${InfoCard.backgroundColor}`}}>
            <div class="header" style={{backgroundImage:`url(${InfoCard.icon})`,backgroundRepeat:'no-repeat',backgroundPosition:'right center'}}>

            </div>
            <div className="info">
                <div className="content">
                    <p>{InfoCard.active}</p>
                    <h1>{InfoCard.hour}</h1>
                    <p>{InfoCard.time}</p>
                </div>
                <img src={ellipsis} alt=""/>
            </div>
        </div>
    )
}
