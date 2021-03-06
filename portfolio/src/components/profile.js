import React, {Component} from 'react';

class Profile extends Component {
    twitterLinkStyle = {
        paddingLeft: "10px"
    }
    snsLinkStyle = {
        paddingLeft: "10px"
    }
    render() {
        return (
        <div>
            <h2>自己紹介</h2>
            <div className="profileDetail">
                <div>
                    <span>名前: 
                        <ruby>
                            <rb className="myName">岡本 梓沙</rb>
                            <rp>(</rp>
                            <rt className="furigana">おかもと あずさ</rt>
                            <rp>)</rp>
                        </ruby>
                    </span><br></br>
                    <span>SNS等:<br></br>
                        <a className="twitterIcon" href="https://twitter.com/azu_proglove" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-3x" style={this.twitterLinkStyle}></i></a>
                        <a className="facebookIcon" href="https://www.facebook.com/profile.php?id=100006217548803" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-3x" style={this.snsLinkStyle}></i></a>
                        <a className="githubIcon" href="https://github.com/azufb" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x" style={this.snsLinkStyle}></i></a>
                        <p>
                            お問い合わせは、<br></br>
                            TwitterやFacebook<br></br>
                            でお受け致します。
                        </p>
                    </span>
                </div>
                <div className="keireki">
                    <p>
                        2020年3月、大学を卒業。商学部に所属していた。<br></br>
                        大学入学当時は、商社への就職を夢みていたため、貿易関連の授業も履修していたものの、<br></br>
                        貿易に関するゼミがなく、世界経済の知識も商社では必要となることを想定し、金融を専攻することに。<br></br>
                        しかし、大学4年生の時に、Excel VBAの授業を履修し、プログラミングに興味をもつ。<br></br>
                        就職活動の期間でもあったため、一気に方向転換をし、ITベンチャーへの就職を試みる。<br></br>
                        一度、東京にあるITベンチャー企業さんからエンジニアとして内定を頂くも、体調を崩し、上京しない方が良い<br></br>
                        という医師の判断を受け、内定を辞退。以降、療養も兼ねて新しく新卒での就職を考えずに、アルバイトをして<br></br>
                        卒業までを過ごした。その期間には、Excel VBAスタンダードの試験にも挑戦したり、ITパスポート試験の勉強を始めた。<br></br>
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default Profile;