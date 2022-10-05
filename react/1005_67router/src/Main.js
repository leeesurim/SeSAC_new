import {Link} from 'react-router-dom';


function Main(){

    return(
        <>
            <Link to="/">
				<h2>ReactRouter 실습</h2>
			</Link>
            <nav>
                <ul>
                    <li><Link to="/student/sesac">학생SeSAC</Link></li>
                    <li><Link to="/student/codingon">코딩온</Link></li>
                    <li><Link to="/student/new?name=sesac&key=id#condingon">searchParams</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Main;