import './BlogItem.css'

import Card from '../Card/Card';

function BlogItem(props) {

    return (
        <Card className="blog-item">
        
                <h3 className="blog-item__title">{props.title}</h3>
                <div className="blog-item__author-description">
                    <span>{props.author}</span>
                    <span>time</span>
                </div>
                <p className="blog-item__content">{props.content}</p> 

                <button>View Post</button>
        </Card>
    )
}
export default BlogItem;