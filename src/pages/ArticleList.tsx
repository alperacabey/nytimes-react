import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../types";
import {
  setQuery,
  search,
  Article,
  selectArticle,
  prevPage,
  nextPage,
} from "../store/articleSlice";
import TextField from "../components/common/textField";
import { ListItem, List, Pagination } from "../components/common/styled";

const ArticleList: FC = () => {
  const dispatch = useAppDispatch();
  let history = useHistory();
  const q = useAppSelector((s) => s.article.q);
  const page = useAppSelector((s) => s.article.page);
  const articles = useAppSelector((s) => s.article.docs);

  useEffect(() => {
    const params = { q, page };
    dispatch(search(params));
  }, [q, page, dispatch]);

  const handleOnClcik = (item: Article) => {
    dispatch(selectArticle(item));
    history.push("/article");
  };

  return (
    <List data-test="item-list-component">
      <TextField
        value={q}
        label={"Type search query term in here:"}
        onChange={(val: string) => dispatch(setQuery(val))}
        debounce={500}
      />
      <h3 className="bold p-0">Results:</h3>
      {(articles || []).map((item: Article, index: number) => (
        <ListItem
          key={"article-item-" + index}
          onClick={() => handleOnClcik(item)}
        >
          {item.headline.main}
        </ListItem>
      ))}
      <Pagination>
        <a
          href="#"
          onClick={() => {
            dispatch(prevPage());
          }}
        >
          {"< "}
          Prev page
        </a>
        <a href="#" onClick={() => dispatch(nextPage())}>
          Next page
          {" >"}
        </a>
      </Pagination>
    </List>
  );
};

export default ArticleList;
