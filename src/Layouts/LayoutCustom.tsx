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
import { countriesList } from "../data_json/data";
import { FooterNow } from "./FooterFor";
import { Form_LogIN } from "../Form/Login";

const { Header, Content, Footer } = Layout;

const Informations = [
    {
        id: 1,
        title: "The city",
        description: "Chisinau"
    },
    {
        id: 2,
        title: "District ",
        description: "Telecentru"
    },
    {
        id: 3,
        title: "Address",
        description: "str.Sihastrului"
    },
    {
        id: 4,
        title: "Phone number",
        description: "069260798"
    },
    



]





const Props_Row = ({ city, attrcations,hotel, stars,   photo}: {city:string, attrcations:string,hotel:string, stars:string,   photo:string}) => {
    return(
        <tr>
        <td>{ city }</td>
        <td>{ attrcations }</td>
        <td>{ hotel }</td>
        <td>{ stars }</td>
        <td>{ photo }</td>
        </tr>
    );
}

export const LayoutCustom = observer(() =>{
    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])

    return(
        <>
            <Layout className="layout">
             
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        {new Array(4).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>

                
                <Content style={{ padding: '0 25px' }}>
                 <div className="formTypeGrid" >
                    <Form_LogIN/>
                </div>
                    <Card_box Countries={countriesList}/>
                    
                    

                    <div className="site-layout-content">
                        {   Informations.map((el, index) =>{
                            return(
                                <ContentLayout key={el.id} title={el.title} description={el.description} />
                            )
                        })
                        }

                    </div>
                    <Forms/>

                    <div className='site-layout-content'>
                    <Row gutter={ 16 }>
                        { contents.map((content: IContentModel) => {

                            return (
                                <CardCustom key={ content.id } content={ content } />
                            )
                        }) }
                    </Row>
                   </div> 



                             <table>
                                <thead>
                                    <tr>
                                    <th>CITY</th>
                                    <th>ATTRCATIONS</th>
                                    <th>HOTEL</th>
                                    <th>STARS</th>
                                    <th>PHOTO</th>
                                    </tr>
                                </thead>

                                <tbody>
                                   

                                    { contents_notes.map((content: IContentModel) => {
                                        return (
                                            <Props_Row city={ content.city } attrcations={ content.attrcations } hotel={ content.hotel } stars={ content.stars }   photo={ content.photo }/>
                                            //console.log("dssd")
                                            
                                        )
                                    })
                                    }
                                </tbody>

                            </table>   
                            <br></br>
                            <br></br> 
                </Content>
            </Layout>
        </>
    )
})