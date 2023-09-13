import './Post.css'
export default function Post({post}){
    const {id,title,body} = post;
    return(
        <div className='box'>
            <h2>User ID {id}</h2>
            <p><span className='bold'>Title : </span>{title}</p>
            <p><span className='bold'>Post Details : </span>{body}</p>
        </div>
    );
}