import React from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import {Col, Row} from "antd";


export default function ChatRoom(){
    return(
        <div>
            <Row>
                <Col span={6}>
                    <Sidebar />
                </Col>
                <Col span={18}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    )
}