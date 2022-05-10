import { Informations } from "../data_json/data"
import { Forms } from "../Form/Forms"
import { ContentLayout } from "../Layouts/ContentLayout"

export const Form_1 = () => {
    return (
        <>
        <div className="site-layout-content">
            {   Informations.map((el, index) =>{
                return(
                    <ContentLayout key={el.id} title={el.title} description={el.description} />
                )
            })
            }
       </div>
       <Forms/>
       </>
    )
}