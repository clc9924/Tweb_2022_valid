import { Layout, Menu, Breadcrumb, Row ,List} from "antd";
import { ContentLayout } from './ContentLayout';
import './LayoutC.css';
import { Forms } from '../Form/Forms';
import { useRootStore } from '../index'
import { useEffect } from "react";
import { CardCustom } from "./Show_Data_Root_Form";
import Country, { IContentModel } from "../interface/extentedInterface";
import { observer } from 'mobx-react-lite'
import Card_box from "./Card_box";
import { countriesList, Informations } from "../data_json/data";
import { FooterNow } from "./FooterFor";
import { Form_LogIN } from "../Form/Login";
import { Link, Route, Routes } from "react-router-dom";

import { Form_1 } from "../menu_page/Form_1";

import { Table_edit_3 } from "../menu_page/Table_Edit_3";

const { Header, Content, Footer } = Layout;


export const LayoutCustom = () =>{
    return(
        
            <Layout className="layout">
             
                <Header>
                    <Menu theme='dark' mode='horizontal'>
                        <Menu.Item key={1}>
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                        <Menu.Item key={2}>
                            <Link to="/myform">MyForm</Link>
                        </Menu.Item>
                        <Menu.Item key={3}>
                            <Link to="/cards">Show Card</Link>
                        </Menu.Item>
                        <Menu.Item key={4}>
                            <Link to="/table_edit">Show Table</Link>
                        </Menu.Item>               
                    </Menu>
                </Header> 

                <Routes>
                    <Route path='/login' element={<Form_LogIN/>} /> 
                    <Route path='/myform' element={<Form_1/>} />
                    <Route path='/cards' element={<Card_box Countries={countriesList}/>} />
                    <Route path='/table_edit' element={<Table_edit_3/>} />   
                </Routes>   
{/*                 
                 <Content style={{ padding: '0 25px' }}> 

                </Content>  */}
            </Layout>
       
    )
}