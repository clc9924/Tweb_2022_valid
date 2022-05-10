import { Row } from "antd"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useRootStore } from ".."
import { IContentModel } from "../interface/extentedInterface"

import { CardCustom } from "../Layouts/Show_Data_Root_Form"

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
export const Table_edit_3 = observer(() =>{
        const { contents, contents_notes } = useRootStore()
    
        useEffect(() => {
            console.log('>>contents_notes', contents_notes)
        }, [ contents_notes ])

    return (
        <>
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
                </>
    )
})