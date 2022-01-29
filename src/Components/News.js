import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
   
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);
    
    
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3e2244031db0427ea4d56909f8c84a7a&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
       
        props.setProgress(100);

    }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3e2244031db0427ea4d56909f8c84a7a&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        
    }

    
    useEffect(() => {
        
        document.title = `${props.category}- NewsHunt`;
        updateNews();
        //eslint-disable-next-line
    }, []);
 

        return (

            <>

                <h1 className="text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black', marginTop: '90px', marginBottom: '45px' }} >NewsHunt-Top {props.category} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner mode={props.mode} />}
                >

                    
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    {element.title && element.description && element.urlToImage && element.url && <NewsItem title={element.title ? element.title : ""}
                                        description={element.description ? element.description.slice(0, 120) : ""}
                                        imgUrl={element.urlToImage ? element.urlToImage : "https://images.livemint.com/img/2022/01/13/600x338/Infosys_shares_1642041188382_1642041188562.jpg"}
                                        newsUrl={element.url}
                                        mode={props.mode} author={element.author} date={element.publishedAt} source={element.source.name} />}
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>





        )
    }


export default News

News.defaultProps = {
    country: "in",
    pageSize: 9,
    mode: 'light',
    category: 'General'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    mode: PropTypes.string,
    category: PropTypes.string
}