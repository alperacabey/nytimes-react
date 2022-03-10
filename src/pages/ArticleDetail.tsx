import { FC } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../types";

import { RouteComponentProps } from "react-router-dom";
interface ArticleDetailProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}
const ArticleDetail: FC<ArticleDetailProps> = () => {
  const article = useAppSelector((s) => s.article.selected);
  let history = useHistory();

  return (
    <div>
      <a href="#" onClick={() => history.goBack()}>
        {"< "}
        Go to results page
      </a>
      <h1>{article?.headline.main}</h1>
      <h3>{article?.pub_date}</h3>
      <h3>{article?.headline.kicker}</h3>
      <p>{article?.section_name}</p>
      <a href="#" onClick={() => window.open(article?.web_url, '_blank')}>
        {"< "}
        Read to full article
      </a>
    </div>
  );
};

export default ArticleDetail;
