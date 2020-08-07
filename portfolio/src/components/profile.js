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
                    <rb className="myName">岡本 梓沙</rb>
                    <rp>(</rp>
                    <rt>おかもと あずさ</rt>
                    <rp>)</rp>
                </ruby>
            </span><br></br>
            <span>生年月日：
                <span className="myBirthday">1998年02月10日</span>
            </span><br></br>
            <span>SNS等：<br></br>
                <a className="twitterIcon" href="https://twitter.com/azu_proglove" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-3x" style={this.twitterLinkStyle}></i></a>
                <a className="facebookIcon" href="https://www.facebook.com/profile.php?id=100006217548803" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-3x" style={this.snsLinkStyle}></i></a>
                <a className="githubIcon" href="https://github.com/azufb" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x" style={this.snsLinkStyle}></i></a>
                
            </span>
            <h3>経歴</h3>
            <p>
                2020年3月、大学を卒業。商学部に所属していた。<br></br>
                大学入学当時は、商社への就職を夢みていたため、貿易関連の授業も履修。学部に、<br></br>
                貿易に関するゼミがなく、世界経済の知識も商社では必要となることを想定し、金融を専攻することに。<br></br>
                しかし、大学4年生の時に、Excel VBAの授業を履修し、プログラミングに興味をもつ。<br></br>
                就職活動の期間でもあったため、一気に方向転換をし、ITベンチャーへの就職を試みる。<br></br>
                一度、東京にあるITベンチャー企業さんからエンジニアとして内定を頂くも、うつ病と診断を受け、上京できず、<br></br>
                内定辞退。さらには、自閉症スペクトラムをもつことも判明。以降、療養も兼ねて新しく新卒での就職を考えることなく、<br></br>
                アルバイトをして卒業までを過ごした。<br></br>
                卒業までの間には、Excel VBAスタンダードの試験にも挑戦したり、ITパスポート試験の勉強をしたりしていた。<br></br>
            </p>
            
        </div>
        )
    }
}

export default Profile;