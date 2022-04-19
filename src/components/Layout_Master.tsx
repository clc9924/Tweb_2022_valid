import { Layout, Menu } from 'antd';
import { Store_Drive } from './Store_Drive';
import './layout.css';
import { Form_Input_Buttons } from './Form_Input_Buttons';
import { Cards } from './Cards';

const { Header, Content } = Layout;

export const Layout_Master = () => {

    return(
        <Layout className="layout">

            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(4).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`navigation ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>

            <main>
                <Content style={{ padding: '0 50px' }}>
                    
                 <Form_Input_Buttons />

                   
                    
                    <div className="site-layout-content grid-3">                   
                        {
                            Store_Drive.map((el, index) => {
                                return(

                                    <Cards key={ el.id } title={ el.title } video_url={el.video_url} nr_view={el.nr_view}  description={ el.description } phoneNumber={ el.phoneNumber } />
                                )
                            })
                        }
                    </div> 

                <div>
                   <h3 >COJUHARI CLARA din grupa CR-191</h3>
                </div>
                </Content>
            </main>

           
      </Layout>
    )
}