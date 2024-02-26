import { useEffect, useState } from "react";
import { Modal, Button } from '@geneui/components';

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"

function Posts() {
    const [postsList, setPostsList] = useState([]);
    const [commentsList, setCommentsList] = useState([]);

    const [postsWithComments, setPostsWithComments] = useState([]);

    const [selectedRow, setSelectedRow] = useState();
    const [isModalVisiblePost, setIsModalVisiblePost] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(response => response.json())
          .then(data => {
            setCommentsList(data);            
          })
          .catch(error => console.error('Error fetching data:', error));

        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => {

            setPostsList(data)
            ;
          })
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (!postsList.length || !commentsList.length) return;

        setPostsWithComments(postsList.map((post) => {
            post.comments = commentsList.filter((comments) => comments.postId === post.id);
            return post;
        }));
    }, [postsList, commentsList]);

    const handleRowClickPost = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data =>{
            setSelectedRow(data);
            setIsModalVisiblePost(true);
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <>
            <h2>Posts page</h2>
            {
                postsWithComments.map((post, index) => {
                    return (
                        <div key={index}>
                            <span>{`Name: ${post.title}, Id: ${post.id}`}</span>
                            <Button appearance="minimal" icon="bc-icon-preview" onClick={() => handleRowClickPost(post.id)}>view user details</Button>
                        </div>
                    )
                })
            }
            <Modal
                visible={isModalVisiblePost}
                background="dark"
                onCancel={() => setIsModalVisiblePost(false)}
                onClose={() => setIsModalVisiblePost(false)}
                title="User info"
                withPortal
                zIndex={1000}>

                <div>Id: {selectedRow?.id}</div>
                <div>Title: {selectedRow?.title}</div>
                <div>comments:{selectedRow?.body} </div>
            </Modal>
        </>
    );
  };


  export default Posts;
