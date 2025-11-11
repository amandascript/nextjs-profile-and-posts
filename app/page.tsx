import styles from '../styles/home.module.css';
import Image from 'next/image';
import Link from 'next/link'

export const metadata={
   title:'Página Principal',
};
export default function Home() {
  return (
    <>
      <h1 className={styles.titulo}>Olá, seja bem-vindo</h1>
      
      <Image 
      src="/image/imagemperfil.jpg"  alt="foto de perfil"  
      width="350" 
      height="350" 
      className={styles.image}/>

      <h3 className={styles.info}>Meu nome é Amanda</h3>
      <div>
      <Link href="/posts" className={styles.irpag}> Lista de Posts</Link>
      </div>
    </>
  );
}
