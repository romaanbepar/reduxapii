
import './App.css';
import {useGetAllPostQuery,useGetPostByIdQuery,useGetByPostLimitQuery,useDeletePostMutation} from "./Services/Post"
function App() {

  const responseInfo= useGetAllPostQuery()
    //  const responseInfo= useGetPostByIdQuery(88)
          // const responseInfo= useGetByPostLimitQuery(5)
          // const [deletePost,responseInfo]= useDeletePostMutation()




console.log(responseInfo)
  if(responseInfo.isLoading)
  return <div>loading..</div> 
    return (
// fetch all data
//     <div className="App">
//      {
//        responseInfo.data.map((post,id)=>(
//          <> 
//          <div className='container'>
//            <div className='row'><div className='col-4'>
             
// <div className="card my-4" style={{width: "18rem"}}>
//   <div className="card-body">
//     <h5 className="card-title" key={id}>{post.id}  {post.title}</h5>
//     <p className="card-text">{post.body}</p>
    
//   </div>
// </div>
// </div>
// </div>
// </div>
//            </>
           
//     )) 
//      }
//     </div>



<div className='container'>
  <div className='grid'>


  {
       responseInfo.data.map((post,id)=>(
         <> 
         
             
<div className="card my-4" >
  <div className="card-body">
    <h5 className="card-title" key={id}>{post.id}.  {post.title}</h5>
    <p className="card-text">{post.body}</p>
    
  </div>
</div>



           </>
           
    )) 
     }


  </div>
</div>


// {/*getpost by single id
// <div className='App'>
//  <h2>{responseInfo.data.id}  {responseInfo.data.title}</h2>
//  <h5>{responseInfo.data.body}</h5>

//     </div> */}




// fetch by the limit 
//  <div className='App1'>
// {
//   responseInfo.data.map((post,id)=>
//   < div key={id}>
//   <h2 >{post.id}  {post.title}</h2>
//  <h5>{post.body}</h5>
//  <hr/>
//  </div>
//   )
// }
// </div> 







 



  
    );
}

export default App;
