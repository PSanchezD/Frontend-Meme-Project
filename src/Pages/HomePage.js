import {Test} from '../JsonTest'

function Home(){
    return(
        <>
        <div className="home-c">
            {Test.map((item)=>{
                return(
                    <div className='card-c'>
                        <div className='card-img'>
                        {item.img}
                        </div>
                        <div className='card-dis'>
                        {item.Discription}
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default Home