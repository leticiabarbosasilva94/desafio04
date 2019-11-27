import React, { Component } from 'react';
import Post from './Post';
import './PostList.css';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://picsum.photos/id/1/200/200',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://picsum.photos/id/1005/200/200',
            },
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris non nibh luctus, elementum magna eu, consectetur lacus. 
              Nulla facilisi. Nam tempor quam nibh. Integer vel tincidunt 
              mauris, ut scelerisque lectus. 
              Phasellus lacinia dui nulla, ac mollis massa cursus in. 
              Quisque tempus neque tincidunt malesuada ullamcorper. 
              Cras sodales eros sed lacus cursus tincidunt. 
              Morbi quis mauris tellus. Nullam eu nulla quis metus porta 
              mollis non at nunc. Fusce lorem nisl, consequat nec ultrices 
              vitae, mattis non ipsum. 
              Morbi tristique lacus sed nisl vehicula, in pellentesque tellus 
              faucibus. Nulla sem odio, rutrum id urna ut, pellentesque 
              tincidunt arcu.`,
          },
          {
            id: 2,
            author: {
              name: 'Luiza Miranda Fernandes',
              avatar: 'https://picsum.photos/id/1000/200/200',
            },
            content: 'Conteúdo do comentário',
          },
          {
            id: 3,
            author: {
              name: 'Fernandes Aloha',
              avatar: 'https://picsum.photos/id/200/200/200',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Eduardo Ronaldo Vieira',
          avatar: 'https://picsum.photos/id/10/200/200',
        },
        date: '04 Jun 2019',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris non nibh luctus, elementum magna eu, consectetur lacus. 
          Nulla facilisi. Nam tempor quam nibh. Integer vel tincidunt 
          mauris, ut scelerisque lectus. 
          Phasellus lacinia dui nulla, ac mollis massa cursus in. 
          Quisque tempus neque tincidunt malesuada ullamcorper. 
          Cras sodales eros sed lacus cursus tincidunt. 
          Morbi quis mauris tellus. Nullam eu nulla quis metus porta 
          mollis non at nunc. Fusce lorem nisl, consequat nec ultrices 
          vitae, mattis non ipsum. 
          Morbi tristique lacus sed nisl vehicula, in pellentesque tellus 
          faucibus. Nulla sem odio, rutrum id urna ut, pellentesque 
          tincidunt arcu.`,
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://picsum.photos/id/4/200/200',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Maria Oliveira Silva',
          avatar: 'https://picsum.photos/id/30/200/200',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://picsum.photos/id/6/200/200',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
    ],
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="post-list">
        {posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    );
  }
}
