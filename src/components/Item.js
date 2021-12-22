import {useParams} from 'react-router-dom'

export default function Items (){

    const {name} = useParams()

    return(
        <div>
            Nombre Item: {name}
        </div>
    )
}