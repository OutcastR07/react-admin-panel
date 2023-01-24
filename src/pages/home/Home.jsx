import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './Home.css'
import { userData } from '../../dummyData'

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
        </div>
    )
}

export default Home