import {connect} from 'redux';
import {vreatePost} from '../actions';
import NewPost from '../NewPost';

const mapDispatchToProps=dispatch=>{
    return {
        onAddPost: post=>{dsipatch(createPost(post))}
    };
}

export default connect(
    null,
    mapDispatchToProps
)(NewPost);