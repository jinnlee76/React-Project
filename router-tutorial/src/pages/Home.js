import React from 'react';
import { Link } from 'react-router-dom' ;

function Home(props) {
    return (
        <div>
            <h1> 홈 </h1>
            <ul>
                <li>
                    <Link to='/about' > 소개 </Link>
                </li>
                <li>
                    <Link to='/profile/velopert' > velopert프로필 </Link>
                </li>
                <li>
                    <Link to='/profile/gildong' > gildong 프로필 </Link>
                </li>
                <li>
                    <Link to='/profile/gildong2' > 미존재 프로필 </Link>
                </li>
                <li>
                    <Link to="/articles"> 게시글 목록 </Link>
                </li>

            </ul>
            
        </div>
    );
}

export default Home;<h1> 홈 </h1>