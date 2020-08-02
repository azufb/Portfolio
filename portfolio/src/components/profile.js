import React, {Component} from 'react';

class Profile extends Component {
    twitterLinkStyle = {
        paddingLeft: "40px"
    }
    snsLinkStyle = {
        paddingLeft: "10px"
    }
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
                1998年02月10日
            </span><br></br>
            <span>SNS等：<br></br>
                <a className="twitterIcon" href="https://twitter.com/azu_proglove" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-3x" style={this.twitterLinkStyle}></i></a>
                <a className="facebookIcon" href="https://www.facebook.com/profile.php?id=100006217548803" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-3x" style={this.snsLinkStyle}></i></a>
                <a className="githubIcon" href="https://github.com/azufb" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x" style={this.snsLinkStyle}></i></a>
                
            </span>
            <h3>経歴</h3>
            <p>
                2020年3月、関西学院大学商学部を卒業。大学時代は、金融を専攻。<br></br>
                しかし、大学4年生の時に、Excel VBAの授業を履修し、プログラミングに興味をもつ。<br></br>
                就職活動の期間でもあったため、一気に方向転換をし、ITベンチャーへの就職を試みる。<br></br>
                一度、東京にあるITベンチャー企業さんからエンジニアとして内定を頂くも、うつ病と診断を受け、上京できず、<br></br>
                内定辞退。さらには、自閉症スペクトラムをもつことも判明。以降、アルバイトをして卒業までを過ごした。<br></br>
                卒業までの間に、基本情報技術者試験とExcel VBAスタンダードにも挑戦した。<br></br>
            </p>
            
        </div>
        )
    }
}

export default Profile;