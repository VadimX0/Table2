import React, {Component} from "react";
import { COLUMNS } from "./columns";
import './table.css'
import axios from "axios";
import Loader from "../Loader";



const userId = 2; //Записи какого пользователя мы получаем


class Table extends Component{
  constructor(props){
    super(props)
    this.state={
        posts:[],
        ascendingDirectionSort:'true',//фильтрация по возрастанию по умолчанию
        loading: true//Загрузка данных
    }
}

handleChange = (event) => {
  this.setState({ ascendingDirectionSort: event.target.value });
};

componentDidMount(){
    axios.get(`http://localhost:8080/api/post?id=${userId}`)
    .then(response=>{
      setTimeout(()=>{
        console.log(response)
        this.setState({posts: response.data})
        this.setState({loading:false})
      },1000)//Искусственная задержка для загрузки данных
    }).catch(error=>{
        console.log(error)
        this.setState({errorMsg:'Error'})
    })
}
  render(){
    const {posts, errorMsg} = this.state
    const {ascendingDirectionSort}=this.state
    const {loading}=this.state
    const columns = COLUMNS 

    
   

    const sortData=(field)=>{//Сортировка данных по указанному полю
      let sortedData
      const copyData = posts.concat(); //сохраняем копию данных
      if(ascendingDirectionSort==="true"){//Если выбрано по возрастанию
        sortedData = copyData.sort((a,b)=>{return a[field] > b[field] ? 1:-1})
        console.log('true executed')
        
      }else{//Иначе по убыванию

        sortedData = copyData.sort((a,b)=>{return a[field] > b[field] ? -1:1})
        console.log('false executed')
        
      }
      this.setState({posts: sortedData})
    }

    

    
    return(
      <div>
        <select value = {ascendingDirectionSort} onChange={this.handleChange}>
        <option value={true}>По возрастанию</option>
        <option value={false}>По убыванию</option>
      </select>
        <p></p>
        <table className ="table">
          <thead>
            <tr>
              <th>Дата <button onClick={()=>sortData('post_date')}>Фильтр</button></th>
              <th>Название <button onClick={()=>sortData('post_name')}>Фильтр</button></th>
              <th>Количество <button onClick={()=>sortData('amount')}>Фильтр</button></th>
              <th>Расстояние <button onClick={()=>sortData('distance')}>Фильтр</button></th>
            </tr>
          </thead>
          <tbody>
          {posts? 
          posts.map((post)=>{
            return(
              <tr key = {post.id}>
                <td>{post.post_date? post.post_date.toString().substring(0,10):null}</td>
                <td>{post.post_name}</td>
                <td>{post.amount}</td>
                <td>{post.distance}</td>
              </tr>
            )
          }):null}
          {loading && <Loader />} 
          {errorMsg? <div>{errorMsg}</div> : null}
          <tr></tr>
          </tbody>
          <tfoot>
          <tr>
            {columns.map((column)=>{
              return (<th >{column.Header}</th>)
            })
          }
            </tr>
          </tfoot>
        </table>
      </div>
    )


  }
}

export default Table