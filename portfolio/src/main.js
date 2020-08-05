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
import Homerun from './components/details/homerun';
import VueToDoListApp from './components/details/vue_todoapp';

class Main extends Component {

    mainTabStyle = {
        border: "none",
        paddingLeft: "30px",
        backgroundColor: "#e6e6e6"
    };

    tabStyle = {
        height: "24px",
        border: "0px",
        backgroundColor: "#d3d3d3"
    };

    tabStyle2 = {
        backgroundColor: "#d3d3d3"
    }

    render() {
        return (
            <div className="main">
                <Tabs>
                    <div className="mainTitle">
                        <h1>Azusa's Portfolio</h1>
                        <TabList className="mainTab">
                            <Tab style={ this.mainTabStyle }>Home</Tab>
                            <Tab style={ this.mainTabStyle }>Profile</Tab>
                            <Tab style={ this.mainTabStyle }>My Works</Tab>
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
                                <Tab style={ this.tabStyle }>自己紹介</Tab>
                                <Tab style={ this.tabStyle }>資格・スキル</Tab>
                                <Tab style={ this.tabStyle }>きっかけ</Tab>
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
                                <Tab style={ this.tabStyle }>一覧</Tab>
                                <Tab style={ this.tabStyle }>詳細</Tab>
                            </TabList>

                            {/* 成果物一覧ページのタブ */}
                            <TabPanel>
                                <Works />
                            </TabPanel>

                            {/* 成果物詳細ページのタブ */}
                            <TabPanel>
                                <h2>成果物詳細</h2>
                                <p>制作した成果物の中からいくつかピックアップしてご紹介します！</p>
                                <Tabs>
                                    <TabList>
                                        <Tab style={ this.tabStyle2 }>タスク管理</Tab>
                                        <Tab style={ this.tabStyle2 }>ほめるん</Tab>
                                        <Tab style={ this.tabStyle2 }>ToDo管理アプリ</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <TaskKanri />
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

export default Main;