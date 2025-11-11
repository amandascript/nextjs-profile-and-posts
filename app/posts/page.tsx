import Link from 'next/link';
import styles from '../../styles/api.module.css'

export const metadata={title:'Lista de Posts'}
type Post = {
  id:number;
  title: string;
  body: string;
}

export default async function ListaPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!response.ok){
      throw new Error('ERRO AO CARREGAR')
    }
    const posts: Post[] = await response.json();

   return(
    <>
    <h1 className={styles.title}>Lista de Posts</h1>

    <div>
    <Link className={styles.voltar} href='/' >voltar</Link>
    </div>

    <ul className={styles.posts}>
     {posts.slice(0,10).map(post => (
      <li key={post.id} 
      className={styles.post}>
        <h3>ID:{post.id}</h3>
        <strong> Title:{post.title} </strong>
        <p>Body:{post.body}</p> </li>
      ))}
    </ul>
    </>)
}