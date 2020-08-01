import React, {Component} from 'react';

class VueToDoListApp extends Component {
    render() {
        return (
            <div>
                <h3>ToDo管理アプリ</h3>
                <h4>制作のきっかけ</h4>
                <h4>使用言語・技術等</h4>
                <p>JavaScript・Vue.js・Heroku</p>

                <button className="btn">
                    <a href="https://todolistwithvue.herokuapp.com/"
                        target="_blank" rel="noopener noreferrer">
                        Go to App <i className="fas fa-caret-square-right"></i>
                    </a>
                </button>
            </div>
        )
    }
}

export default VueToDoListApp;