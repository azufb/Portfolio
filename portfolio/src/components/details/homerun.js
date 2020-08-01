import React, { Component } from 'react';

class Homerun extends Component {
    render() {
        return (
            <div>
                <h3>ほめるん</h3>
                <h4>制作のきっかけ</h4>
                <p>
                    私は、大学4年生の時に、うつ病と診断を受けました。現在は、治っています。<br></br>
                    その時、カウンセリングの先生に教えて頂いたことが、「ほめること」の大切さです。<br></br>
                    うつ病の原因の1つとして、自己肯定感の低さ・自信のなさが挙げられます。<br></br>
                    これを解決する方法が、毎日、1日の終わりにその日の自分をほめること、労うことです。<br></br>
                    でも、なかなか自分ではほめることができませんでした。<br></br>
                    そこで、第3者的立場から毎日、自分をほめることができれば、どんなに自己肯定感の低下してしまった人でも<br></br>
                    自分をほめる機会を得ることができると考えました。
                </p>
                <h4>使用言語・技術等</h4>
                <p>JavaScript・React.js・React Simple Chatbot・Heroku</p>
                
                <button className="btn">
                    <a href="https://boiling-garden-35201.herokuapp.com/"
                        target="_blank" rel="noopener noreferrer">
                        Go to App <i className="fas fa-caret-square-right"></i>
                    </a>
                </button>
            </div>
        )
    }
}

export default Homerun;