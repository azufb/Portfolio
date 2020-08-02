import React, { Component } from 'react';

class ReactToDoListApp extends Component {
    render() {
        return (
            <div>
                <h3>My Task List</h3>
                <h4>制作のきっかけ</h4>
                <p>「CRUD」を意識した開発に挑戦しようと思ったことがきっかけです。</p>
                <h4>使用言語・技術等</h4>
                <p>JavaScript・React.js・React Hooks・Heroku</p>

                <button className="btn">
                    <a className="goToApp" href="https://pacific-crag-00342.herokuapp.com/"
                        target="_blank" rel="noopener noreferrer">
                        Go to App <i className="fas fa-caret-square-right"></i>
                    </a>
                </button>
            </div>
        )
    }
}

export default ReactToDoListApp;