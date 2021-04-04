import { GetStaticPaths , GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import {RichText} from 'prismic-dom';

import styles from './post.module.scss';


import Prismic from '@prismicio/client'

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface PostPreviewProps{
    post: {
        slug: string;
        title: string;
        content: string;
        updadeAt: string;
        image: string
    }
}


export default function Post({post} : PostPreviewProps){

    return(
        <>
        <Head>
            <title>{post.title} | Arlen Resende Front-end Developer</title>
        </Head>
        <main className={styles.container}>
            <article className={styles.post}>
                <h1>{post.title}</h1>
                <time>{post.updadeAt}</time>
                <div className={`${styles.postContent} ${styles.previewContent}`} dangerouslySetInnerHTML={{__html: post.content}} ></div>
               
            </article>
        </main>
        </>
    )
}



export const getStaticPaths : GetStaticPaths = async () => {
    return{
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps : GetStaticProps = async ({ params}) => {

    
    const { slug } = params;
    const prismic = getPrismicClient();
    

    const response = await prismic.getByUID('posts', String(slug), {});
   
 
    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content : RichText.asHtml(response.data.content),
        updadeAt: format(
            new Date(response.last_publication_date),
            'dd MMM yyyy',
            {
              locale: ptBR,
            }
          ),
        image: response.data.image.url,
    };
   

    
    return {
        props: {
            post
        },
        redirect : 60 * 30
    }



}