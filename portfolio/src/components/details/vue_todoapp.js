import React, {Component} from 'react';

class VueToDoListApp extends Component {
    render() {
        return (
            <div>
                <div className="detail">
                    <h3>ToDo管理アプリ</h3>
                    <button className="btn">
                        <a className="goToApp" href="https://todolistwithvue.herokuapp.com/"
                            target="_blank" rel="noopener noreferrer">
                            Go to App <i className="fas fa-caret-square-right"></i>
                        </a>
                    </button>
                </div>
                <h4>制作のきっかけ</h4>
                <p>
                    Vue.jsを利用してアプリを制作することを通して、<br></br>
                    Vue.jsへの理解を深めようと考えた。
                </p>
                <h4>使用言語・技術等</h4>
                <p>JavaScript・Vue.js・Heroku</p>
            </div>
        )
    }
}

export default VueToDoListApp;