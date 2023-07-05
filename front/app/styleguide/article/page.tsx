import Header from '../../../components/header';
import ArticleComponent from '../../../components/article';

const Article = () => (
  <ArticleComponent>
    <Header type='h2' value='This is an Article' />

    <p>Since most of this website will be using some form of organised text, the article is probably the most important thing to specify. It is not one single component; it is more a compilation of rules and styling for a bunch of elements. All of this text is, of course, a filler to create a paragraph.</p>

  </ArticleComponent>
);

export default Article;

