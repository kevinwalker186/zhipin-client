import React,{Component} from 'react'
import {
    Flex,NavBar,WingBlank,WhiteSpace,List,InputItem,Radio,Button
} from 'antd-mobile'

import Logo from "../../components/logo/logo";

const RadioItem =  Radio.RadioItem;

export default class Register extends Component{
    state = {
        value: 0,
    };
    onChange = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };

    render() {

        const {value} = this.state
        const data = [
            { value: 0, label: '老板' },
            { value: 1, label: '大神' },
        ];

        return (
            <div>
                <NavBar>BOSS直聘</NavBar>
                <Logo/>
                <List>
                    <WingBlank/>
                    <InputItem>用户名</InputItem>
                    <WingBlank/>
                    <InputItem>密码</InputItem>
                    <WingBlank/>
                    <InputItem>确认密码</InputItem>
                    {data.map(i => (
                        <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                            {i.label}
                        </RadioItem>
                    ))}
                    <WhiteSpace/>
                    <Button type='primary'>注册</Button>
                    <WhiteSpace/>
                    <Button>已有账号</Button>
                    <WhiteSpace/>
                </List>
            </div>
        )
    }
}