import {useState} from 'react'

const Create = () => {
    const [title,titlestate]=useState('');
    const [body,bodystate]=useState('');
    const [author,authstate]=useState('irshu');
    const [ispending,ispenstate]=useState(false);
    const handlesubmit=(e)=>{
         e.preventDefault();
         const obj={title,body,author};
         ispenstate(true);
    setTimeout(  ()=>{
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"contend-type":"application/json"},
            body:JSON.stringify(obj)
          }).then(
            ()=>{
             console.log('blog is added');
             ispenstate(false);
            
             
            }          
          )
    }     ,1000);
         
    };
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handlesubmit} >
                <label >
                    Blog title
                    </label>
                <input
                 type="text"
                  required 
                  value={title}
                  onChange={(e)=>titlestate(e.target.value)}
                  />
                      <label >
                    Blog body
                    </label>
               <textarea
                required
                value={body}
                onChange={(e)=>bodystate(e.target.value)}
               >
               </textarea>
               <label >
                    Blog author:
                    </label>
             <select 
             onChange={(e)=>authstate(e.target.value)}
             value={author}
             >
                <option value="irshu">irshu</option>
                <option value="yaseen">yaseen</option>
             </select>
             { !ispending&& <button>Add blog</button>}
             {ispending && <button>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;