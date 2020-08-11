import React, { Component } from 'react';

class MemoApp extends Component {
    render() {
        return (
            <div>
                <div className="detail">
                    <h3>メモアプリ</h3>
                    <button className="btn">
                        <a className="goToApp" href="https://polar-shelf-88279.herokuapp.com/"
                            target="_blank" rel="noopener noreferrer">
                            Go to App <i className="fas fa-caret-square-right"></i>
                        </a>
                    </button>
                </div>
                <h4>制作のきっかけ</h4>
                <p>
                    よくメモアプリを利用するが、ささっとメモしてしまうため、後で見返すと、<br></br>
                    何を意味する数字なのか、何のためにメモしたのか、わからないことがある。<br></br>
                    確かに、一般的なメモアプリであればきちんと目的等書かなければわからない。<br></br>
                    しかし、メモそれぞれを分類できるようにすれば、まだ思い出せるかもしれないと<br></br>
                    考えた。そこで、メモを入力する際に、ジャンル選択をし、その選択したジャンル<br></br>
                    と共にメモを表示することができる。
                </p>
                <h4>使用言語・技術等</h4>
                <p>JavaScript・React.js・Redux・Redux Persist・Heroku</p>
            </div>
        )
    }
}

export default MemoApp;