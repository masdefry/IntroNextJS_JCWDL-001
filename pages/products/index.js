import axios from 'axios'

export default function ListProducts(props){
    console.log(props)
    return(
        <div>
            <h1>
                Page List Products
            </h1>
        </div>
    )
}

export const getServerSideProps = async() => {
    try {
        console.log('Trigger')
        let res = await axios.get('http://localhost:5001/products')
        console.log(res.data)

        return{
            props: {
                dataProducts: res.data
            }
        }
    } catch (error) {
        console.log(error)
    }
}