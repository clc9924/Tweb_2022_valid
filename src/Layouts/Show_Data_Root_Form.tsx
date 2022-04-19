import { Button, Checkbox, Form, Input } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IContentModel } from '../interface/extentedInterface'


export const CardCustom = observer(({ content }: { content: IContentModel }) => {

    const { city,attrcations,hotel,stars,photo,changeCITY, changeATTRCATIONS, changeHOTEL, changeSTARS, changePHOTO, isSeen, changeSeen, seen, addNote, removeNote } = content


    useEffect(() => {
        if (isSeen) {
            // alert(`Is seen ${ title }`)
            console.log('>>title', city)
        }
    }, [ isSeen ])

    return (
        <Card title={ city } bordered={ false }>
          

            <Input
                value={ city }
                placeholder={ city }
                onChange={ (e) => changeCITY(e.target.value) }
            />
            <Input
                value={ attrcations }
                placeholder={ attrcations }
                onChange={ (e) => changeATTRCATIONS(e.target.value) }
            />
            <Input
                value={ hotel }
                placeholder={ hotel }
                onChange={ (e) => changeHOTEL(e.target.value) }
            />
            <Input
                value={ stars }
                placeholder={ stars }
                onChange={ (e) => changeSTARS(e.target.value) }
            />
            <Input
                value={ photo }
                placeholder={ photo }
                onChange={ (e) => changePHOTO(e.target.value) }
            />

            <Checkbox defaultChecked={ seen } checked={ seen } onChange={ (e) => changeSeen(e.target.checked) } />
            <Button onClick={ addNote }>Add</Button>
            <Button type={ 'primary' } onClick={ removeNote }>Remove</Button>

        </Card>
    )

})