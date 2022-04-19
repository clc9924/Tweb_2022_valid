import { Card } from 'antd';
export const Cards = ({title, video_url, nr_view, description, phoneNumber} : {title: string, video_url: string, nr_view: string, description: string, phoneNumber: number}) => {
    return(
        <Card 
            title={ title }  
            bordered={ true } 
            hoverable={ true }
            size='small'
        >
          <iframe width="370" height="auto"
              src={video_url}>
          </iframe> <br />
          <b><i>Numarul de Vizualizari</i>:</b> { nr_view } <br />
            <b><i>Descriere</i>:</b> { description } <br />
            <b><i>Telefon:</i></b> { phoneNumber } <br />
        </Card>
    )
}