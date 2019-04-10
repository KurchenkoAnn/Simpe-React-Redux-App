import React from 'redux';
import {connect} from 'react-redux';
import Post from './Post';
import {deletePost} from '../actions';

function PostList({post,onDelete}){
    return(
        <div>
            {
                posts.map(post=>{(<Post post={post} onDelete={onDelete} key={post.id}  />);})
            }
        </div>
    );
}

const mapStateToProps=state => {
    return{
        posts:state.posts
        }
    }
const mapDispatchToProps=dispath=>{
    return{
        onDelete:id=>{
            dispath(deletePost(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);