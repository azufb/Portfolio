import React, { Component } from 'react';

class Works extends Component {
    render() {
        return (
            <div>
                <h2>成果物一覧</h2>
                <table>
                    <tr>
                        <th>成果物名称</th>
                        <th>使用言語等</th>
                        <th>制作年月日</th>
                    </tr>

                    <tr>
                        <td>タスク管理</td>
                        <td>JavaScript・React.js</td>
                        <td>2020年7月30日</td>
                    </tr>

                    <tr>
                        <td>My Task List</td>
                        <td>JavaScript・React.js</td>
                        <td>2020年7月24日</td>
                    </tr>
                    
                    <tr>
                        <td>ほめるん</td>
                        <td>JavaScript・React.js</td>
                        <td>2020年7月19日</td>
                    </tr>

                    <tr>
                        <td>ToDo管理アプリ</td>
                        <td>JavaScript・Vue.js</td>
                        <td>2020年7月05日</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Works;