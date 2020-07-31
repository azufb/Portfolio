import React, { Component } from 'react';

class TaskKanri extends Component {
    render() {
        return (
            <div>
                <h3>タスク管理</h3>
                <h4>制作のきっかけ</h4>
                <p>
                    前回、React.jsを用いてToDoアプリを作成した時に、React Hooksを使ってしまい、<br></br>
                    楽をしてしまった感覚があり、きちんとReact.jsの文法の理解をしたいと思ったから。
                </p>
                <h4>使用言語・技術等</h4>
                <p>JavaScript・React.js・Heroku</p>

                <button>
                    <a href="https://reacttodoappagain.herokuapp.com/"
                        target="_blank" rel="noopener noreferrer">
                        Go to App▶️
                    </a>
                </button>
            </div>
        )
    }
}

export default TaskKanri;