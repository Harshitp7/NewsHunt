import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, mode, source } = props;
    return (
        <div>
            {title && description && <div className="card my-3" style={{ width: '20rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex end', position: 'absolute', right: 0 }}>

                    <span className={`badge rounded-pill bg-${mode === 'dark' ? 'white' : 'black'} text-${mode === 'dark' ? 'black' : 'white'}`} >
                        {source}
                        {/* <span className="visually-hidden">unread messages</span> */}
                    </span>
                </div>

                <img src={imgUrl} className="card-img-top" alt="newsItem" />
                <div className="card-body rounded" style={{ backgroundColor: mode === 'dark' ? '#2b2d2f' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>

                    <h5 className="card-title">{title}...</h5>

                    <p className="card-text">{description}...</p>
                    <p className="card-text" style={{ fontSize: '13px' }}><small className="text-muted" >By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark btn-rounded-pill">Read more..</a>
                </div>
            </div>}
        </div>
    )
}

export default NewsItem