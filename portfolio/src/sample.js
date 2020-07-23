import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Profile from './profile';
import Certificate from './certificate';

export const Sample = () => {
    return (
    <Tabs>
        <TabList>
            <Tab>Home</Tab>
            <Tab>Profile</Tab>
            <Tab>My Works</Tab>
            <Tab>お問い合わせ</Tab>
        </TabList>

        <TabPanel>
            <h2>ご挨拶</h2>
            <p>こんにちは、岡本梓沙と申します。<br></br>
            私のポートフォリオサイトにお尋ねくださり、ありがとうございます。<br></br>
            私は、エンジニアを目指して独学でプログラミングの勉強をしております。<br></br>
            いくつか成果物も作成しております。<br></br>
            こちらのサイトでは、独学の成果として作成したアプリの掲載をしております。<br></br>
            至らない部分もあるかとは思いますが、是非、見て頂けたらと思っております。
            </p>
        </TabPanel>

        <TabPanel>
            <Tabs>
                <TabList>
                    <Tab>経歴</Tab>
                    <Tab>資格・スキル</Tab>
                    <Tab>きっかけ</Tab>
                </TabList>

                <TabPanel>
                    <Profile />
                </TabPanel>

                <TabPanel>
                    <Certificate />
                </TabPanel>
            </Tabs>
        </TabPanel>

    </Tabs>
    )
}

export default Sample;