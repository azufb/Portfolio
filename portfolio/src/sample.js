import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Aisatsu from './aisatsu';
import Profile from './profile';
import Certificate from './certificate';
import Skills from './skills';
import Works from './works';

class Sample extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Profile</Tab>
                    <Tab>My Works</Tab>
                    <Tab>お問い合わせ</Tab>
                </TabList>
            
                <TabPanel>
                    <Aisatsu />
                </TabPanel>

                <TabPanel>
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
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>一覧</Tab>
                            <Tab>詳細</Tab>
                        </TabList>

                        <TabPanel>
                            <Works />
                        </TabPanel>

                        <TabPanel>
                            <h2>成果物詳細</h2>
                            <Tabs>
                                <TabList>
                                    <Tab>My Task List</Tab>
                                    <Tab>ほめるん</Tab>
                                    <Tab>ToDo管理アプリ</Tab>
                                </TabList>
                            </Tabs>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        )
    }
}

export default Sample;