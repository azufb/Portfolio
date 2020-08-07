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
        this.changeBackgroundMain = this.changeBackgroundMain.bind(this);
        this.changeBackgroundLeaveMain = this.changeBackgroundLeaveMain.bind(this);
        this.changeBackground2 = this.changeBackground2.bind(this);
        this.changeBackgroundLeave2 = this.changeBackgroundLeave2.bind(this);
        this.changeBackgroundDetail = this.changeBackgroundDetail.bind(this);
        this.changeBackgroundLeaveDetail = this.changeBackgroundLeaveDetail.bind(this);
    }

    mainTabStyle = {
        border: "none",
        paddingLeft: "30px",
        backgroundColor: "#e6e6e6",
        fontFamily: "'Oswald', sans-serif",
        cursor: "pointer"
    };

    tabStyle = {
        height: "24px",
        border: "0px",
        backgroundColor: "#d3d3d3",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        cursor: "pointer"
    };

    tabStyleDetail = {
        backgroundColor: "#d3d3d3",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        cursor: "pointer"
    }

    changeBackgroundMain(e) {
        e.target.style.borderBottom = "3px solid #db7093";
        e.target.style.fontFamily = "'Oswald', sans-serif";
    }

    changeBackgroundLeaveMain(e) {
        e.target.style.background = "#e6e6e6";
        e.target.style.borderBottom = "none";
        e.target.style.fontFamily = "'Oswald', sans-serif";
    } 

    changeBackground2(e) {
        e.target.style.borderBottom = "3px solid #db7093";
        e.target.fontFamily = "sans-serif";
        e.target.fontWeight = "bold";

    }

    changeBackgroundLeave2(e) {
        e.target.style.background = "#d3d3d3";
        e.target.style.borderBottom = "none";
    }

    changeBackgroundDetail(e) {
        e.target.style.borderBottom = "3px solid #db7093";
        e.target.fontFamily = "sans-serif";
        e.target.fontWeight = "bold";
    }

    changeBackgroundLeaveDetail(e) {
        e.target.style.background = "#d3d3d3";
        e.target.style.borderBottom = "none";
    }

    render() {
        return (
            <div className="main">
                <Tabs>
                    <div className="mainTitle">
                        <h1>I am AZUSA...</h1>
                        <TabList className="mainTab">
                            <Tab style={ this.mainTabStyle } onMouseLeave={ this.changeBackgroundLeaveMain } onMouseEnter={ this.changeBackgroundMain }>Home</Tab>
                            <Tab style={ this.mainTabStyle } onMouseLeave={ this.changeBackgroundLeaveMain } onMouseEnter={ this.changeBackgroundMain }>Profile</Tab>
                            <Tab style={ this.mainTabStyle } onMouseLeave={ this.changeBackgroundLeaveMain } onMouseEnter={ this.changeBackgroundMain }>My Works</Tab>
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
                                <Tab style={ this.tabStyle } onMouseLeave={ this.changeBackgroundLeave2 } onMouseEnter={ this.changeBackground2 }>自己紹介</Tab>
                                <Tab style={ this.tabStyle } onMouseLeave={ this.changeBackgroundLeave2 } onMouseEnter={ this.changeBackground2 }>資格・スキル</Tab>
                                <Tab style={ this.tabStyle } onMouseLeave={ this.changeBackgroundLeave2 } onMouseEnter={ this.changeBackground2 }>きっかけ</Tab>
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
                                <Tab style={ this.tabStyle } onMouseLeave={ this.changeBackgroundLeave2 } onMouseEnter={ this.changeBackground2 }>一覧</Tab>
                                <Tab style={ this.tabStyle } onMouseLeave={ this.changeBackgroundLeave2 } onMouseEnter={ this.changeBackground2 }>詳細</Tab>
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
                                        <Tab style={ this.tabStyleDetail } onMouseLeave={ this.changeBackgroundLeaveDetail } onMouseEnter={ this.changeBackgroundDetail }>タスク管理</Tab>
                                        <Tab style={ this.tabStyleDetail } onMouseLeave={ this.changeBackgroundLeaveDetail } onMouseEnter={ this.changeBackgroundDetail }>ほめるん</Tab>
                                        <Tab style={ this.tabStyleDetail } onMouseLeave={ this.changeBackgroundLeaveDetail } onMouseEnter={ this.changeBackgroundDetail }>ToDo管理アプリ</Tab>
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