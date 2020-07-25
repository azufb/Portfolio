import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
        <div>
            <h2>自己紹介</h2>
            <span>名前：
                <ruby>
                    <rb>岡本 梓沙</rb>
                    <rp>(</rp>
                    <rt>おかもと あずさ</rt>
                    <rp>)</rp>
                </ruby>
            </span><br></br>
            <span>生年月日：
                1998年2月10日
            </span><br></br>
            <span>SNS：
                <a href="https://twitter.com/azu_proglove">Twitter</a>
            </span>
            
        </div>
        )
    }
}

export default Profile;