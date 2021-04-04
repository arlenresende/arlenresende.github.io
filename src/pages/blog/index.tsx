import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client'
import Head from 'next/head';
import Link from 'next/link';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import {RichText} from 'prismic-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Post ={
    slug: string;
    title:  string;
    expert: string;
    updatedAt : string;
    image:  string;
}

interface PostsProps {
    posts :Post[]
}


export default function Blog({posts}: PostsProps ){


    const postFormatedDate = posts.map((post) => {
        return{
            ...post,
                updatedAt: format(
                new Date(post.updatedAt),
                'dd MMM yyyy',
                {
                  locale: ptBR,
                }
              )
        }
    })


 

    return(
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>
        <main className={styles.container}>
            <div className={styles.posts}>

                {
                    postFormatedDate.map((post) => (
                        
                        <Link href={`/blog/${post.slug}`} key={post.slug}>
                            <div className={styles.post}>
                                <img src={post.image} alt={post.title}/>
                                <a>
                                    <time>{post.updatedAt}</time>
                                    <h2>{post.title}</h2>
                                    <p>{post.expert}</p>
                                </a>
                            </div>   
                        </Link>
                    ))
                }


            </div>
         
        </main>
       </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
         Prismic.predicates.at('document.type','posts')
    ],{
        fetch: ['posts.title','posts.image','posts.content'],
        pageSize: 100,
    } 
    );

    const posts = response.results.map((post) => {
        return{
            slug: post.uid,
            title: RichText.asText(post.data.title),
            expert: post.data.content.find(content=> content.type === 'paragraph')?.text ?? '',
            updatedAt : post.last_publication_date,
            image: post.data.image.url,


        }
    })


   
    

    return {
        props: {posts}
    }
}