import React from 'react'

const NewsItem=(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card">
            <span className="badge rounded-pill bg-danger"> {source} </span>
            <img src={!imageUrl?"https://th-i.thgim.com/public/incoming/iqqydb/article66306410.ece/alternates/LANDSCAPE_1200/CCI_UDHindu_KSL_UA85D75MN_R1549726741_2_f2d79535-1d92-49c2-904a-7267cb104582.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small>Last updated by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
         </div>
       </div>
     </div>
    )
}

export default NewsItem
