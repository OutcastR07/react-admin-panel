import { AttachMoney, BarChart, ChatOutlined, EmailOutlined, FeedbackOutlined, LineStyle, PersonOutline, Report, Storefront, TrendingUp, WorkOutline } from '@mui/icons-material'
import TimelineIcon from '@mui/icons-material/Timeline';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                            <li className="sidebarListItem active">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className="sidebarListItem">
                                <PersonOutline className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className="sidebarListItem">
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <EmailOutlined className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <FeedbackOutlined className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatOutlined className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Staff
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar