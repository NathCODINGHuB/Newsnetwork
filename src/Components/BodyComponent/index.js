import NewsComponent from '../NewsComponent'
import * as Styles from './style.js' 
import {AltGApikey} from '../../Constants/Apikey.js'
import { Blocks } from 'react-loader-spinner'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import uuid from 'react-uuid'




//const GetDataUrl = `https://newsdata.io/api/1/news?apikey=${Apikey}&q=business`
/*
https://newsapi.org/v2/everything?q=tesla&from=2024-04-11&sortBy=publishedAt&apiKey=0f8c036d0a3e4adeb941d324b560d8aa
 */
const BodyComponent=({BodyData})=>{
    const [DataState,SetDataState] = useState(true)
    const [ResponseData,SetResponseData] = useState([])
    const {searchValue,Catageroy}= BodyData
    console.log('Hai to day is ')
    console.log(new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
    const Endpoint = searchValue===''?`https://newsapi.org/v2/top-headlines?country=in&category=${Catageroy}&apiKey=${AltGApikey}`:
    `https://newsapi.org/v2/everything?q=${searchValue}&from=${new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}&sortBy=publishedAt&apiKey=${AltGApikey}`
    useEffect(()=>{
               axios.get(Endpoint)
               .then((Response)=>{
                SetResponseData(Response.data.articles)
                SetDataState(false)
            }).catch((e)=>{
                console.log(e)
            })
        },[Catageroy,searchValue,Endpoint])
   // console.log(ResponseData)
    //console.log(searchValue==='')
  //  console.log(Catageroy)

    /*
    urlToImage
    title
    content

    */
    if (DataState){
        return(
            <Styles.BodyComponentMainContainer>
                 <Styles.BCInnerConatainer>
                 <Styles.LoaderContainer>
                <Blocks
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  visible={true}
                />

                </Styles.LoaderContainer>

                 </Styles.BCInnerConatainer>

                 </Styles.BodyComponentMainContainer>

        )
    }


    return (
        
        <Styles.BodyComponentMainContainer>
            <Styles.BCInnerConatainer>

                {ResponseData.map(each=>(
                    <NewsComponent key ={uuid()} data={{description:each.content,title:each.title,image:each.urlToImage,source:each.url}}
                   />
                ))}
            </Styles.BCInnerConatainer>
        </Styles.BodyComponentMainContainer>
    )
}


export default BodyComponent

/*
import { Blocks } from 'react-loader-spinner'
<Styles.LoaderContainer>
                <Blocks
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  visible={true}
                />

                </Styles.LoaderContainer>
*/