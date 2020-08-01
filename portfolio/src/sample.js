import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import Aisatsu from './components/aisatsu';
import Profile from './components/profile';
import Certificate from './components/certificate';
import Skills from './components/skills';
import Trigger from './components/trigger';
import Works from './components/works';
import TaskKanri from './components/details/taskkanri';
import ReactToDoListApp from './components/details/react_todoapp';
import Homerun from './components/details/homerun';
import VueToDoListApp from './components/details/vue_todoapp';

class Sample extends Component {
    mainTabStyle = {
        // backgroundColor: "cadetblue",
        border: "none",
        paddingLeft: "30px",
    };

    render() {
        return (
            <div>
                <Tabs>
                <div className="mainTitle">
                <h1>Azusa's Portfolio</h1>
                    <TabList className="mainTab">
                        <Tab style={this.mainTabStyle}>Home</Tab>
                        <Tab style={this.mainTabStyle}>Profile</Tab>
                        <Tab style={this.mainTabStyle}>My Works</Tab>
                    </TabList>
                </div>
                    {/* Topページの挨拶文のタブ */}
                    <TabPanel className="aisatu">
                        <Aisatsu />
                    </TabPanel>

                    {/* Profileページのタブ */}
                    <TabPanel className="profile">
                        <Tabs>
                            <TabList>
                                <Tab>自己紹介</Tab>
                                <Tab>資格・スキル</Tab>
                                <Tab>きっかけ</Tab>
                            </TabList>

                            <TabPanel>
                                <Profile />
                            </TabPanel>

                            <TabPanel>
                                <Certificate />
                                <Skills />
                            </TabPanel>

                            <TabPanel>
                                <Trigger />
                            </TabPanel>
                        </Tabs>
                    </TabPanel>

                    {/* 成果物のMy Worksページのタブ */}
                    <TabPanel className="myWorks">
                        <Tabs>
                            <TabList>
                                <Tab>一覧</Tab>
                                <Tab>詳細</Tab>
                            </TabList>

                            {/* 成果物一覧ページのタブ */}
                            <TabPanel>
                                <Works />
                            </TabPanel>

                            {/* 成果物詳細ページのタブ */}
                            <TabPanel>
                                <h2>成果物詳細</h2>
                                <Tabs>
                                    <TabList>
                                        <Tab>タスク管理</Tab>
                                        <Tab>My Task List</Tab>
                                        <Tab>ほめるん</Tab>
                                        <Tab>ToDo管理アプリ</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <TaskKanri />
                                    </TabPanel>

                                    <TabPanel>
                                        <ReactToDoListApp />
                                    </TabPanel>

                                    <TabPanel>
                                        <Homerun />
                                    </TabPanel>

                                    <TabPanel>
                                        <VueToDoListApp />
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default Sample;