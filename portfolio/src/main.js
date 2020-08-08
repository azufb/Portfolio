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

    constructor(props) {
        super(props);
        this.changeStyleNavTab = this.changeStyleNavTab.bind(this);
        this.changeStyleNavTabLeave = this.changeStyleNavTabLeave.bind(this);
        this.changeTabStyle = this.changeTabStyle.bind(this);
        this.changeTabStyleLeave = this.changeTabStyleLeave.bind(this);
        this.changeTabStyleDetail = this.changeTabStyleDetail.bind(this);
        this.changeTabStyleDetailLeave = this.changeTabStyleDetailLeave.bind(this);
    }

    // タブのスタイルの設定
    navTabStyle = {
        border: "none",
        backgroundColor: "#e6e6e6",
        fontFamily: "'Oswald', sans-serif",
        fontSize: "25px",
        cursor: "pointer"
    };

    tabStyle = {
        height: "24px",
        border: "none",
        backgroundColor: "#c8c9c9",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        cursor: "pointer"
    };

    tabStyleDetail = {
        backgroundColor: "#c8c9c9",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        cursor: "pointer"
    }

    changeStyleNavTab(e) {
        e.target.style.borderBottom = "3px solid #d85782";
        e.target.style.fontFamily = "'Oswald', sans-serif";
        e.target.style.fontSize = "25px";
    }

    changeStyleNavTabLeave(e) {
        e.target.style.background = "#e6e6e6";
        e.target.style.borderBottom = "none";
        e.target.style.fontFamily = "'Oswald', sans-serif";
        e.target.style.fontSize = "25px";
    } 

    changeTabStyle(e) {
        e.target.style.borderBottom = "3px solid #d85782";
        e.target.fontFamily = "sans-serif";
        e.target.fontWeight = "bold";

    }

    changeTabStyleLeave(e) {
        e.target.style.background = "#c8c9c9";
        e.target.style.borderBottom = "none";
    }

    changeTabStyleDetail(e) {
        e.target.style.borderBottom = "3px solid ##d85782";
        e.target.fontFamily = "sans-serif";
        e.target.fontWeight = "bold";
    }

    changeTabStyleDetailLeave(e) {
        e.target.style.background = "##c8c9c9";
        e.target.style.borderBottom = "none";
    }

    render() {
        return (
            <div className="main">
                    <Tabs>
                        <div className="mainTitle">
                            <h1>I am AZUSA...</h1>

                            <TabList className="mainTab">
                                <Tab style={ this.navTabStyle } onMouseLeave={ this.changeStyleNavTabLeave } onMouseEnter={ this.changeStyleNavTab }>Home</Tab>
                                <Tab style={ this.navTabStyle } onMouseLeave={ this.changeStyleNavTabLeave } onMouseEnter={ this.changeStyleNavTab }>Profile</Tab>
                                <Tab style={ this.navTabStyle } onMouseLeave={ this.changeStyleNavTabLeave } onMouseEnter={ this.changeStyleNavTab }>My Works</Tab>
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
                                    <Tab style={ this.tabStyle } onMouseLeave={ this.changeTabStyleLeave } onMouseEnter={ this.changeTabStyle }>自己紹介</Tab>
                                    <Tab style={ this.tabStyle } onMouseLeave={ this.changeTabStyleLeave } onMouseEnter={ this.changeTabStyle }>資格・スキル</Tab>
                                    <Tab style={ this.tabStyle } onMouseLeave={ this.changeTabStyleLeave } onMouseEnter={ this.changeTabStyle }>きっかけ</Tab>
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
                                    <Tab style={ this.tabStyle } onMouseLeave={ this.changeTabStyleLeave } onMouseEnter={ this.changeTabStyle }>一覧</Tab>
                                    <Tab style={ this.tabStyle } onMouseLeave={ this.changeTabStyleLeave } onMouseEnter={ this.changeTabStyle }>詳細</Tab>
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
                                            <Tab style={ this.tabStyleDetail } onMouseLeave={ this.changeTabStyleDetailLeave } onMouseEnter={ this.changeTabStyleDetail }>タスク管理</Tab>
                                            <Tab style={ this.tabStyleDetail } onMouseLeave={ this.changeTabStyleDetailLeave } onMouseEnter={ this.changeTabStyleDetail }>ほめるん</Tab>
                                            <Tab style={ this.tabStyleDetail } onMouseLeave={ this.changeTabStyleDetailLeave } onMouseEnter={ this.changeTabStyleDetail }>ToDo管理アプリ</Tab>
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