import { useState, useEffect } from 'react';
import ApiModel from '../api';
import { useIssuesDispatch } from '../context/IssueContext';

const useInfinityScroll = () => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const dispatch = useIssuesDispatch();
  const [isFetching, setFetching] = useState(false);

  async function getApi(page) {
    const fetchData = await ApiModel.getList(dispatch, page);
    console.info(fetchData);
    setList(list.concat(fetchData));
    setPage(page + 1);
    setFetching(false);
  }

  useEffect(() => {
    getApi(page);
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setFetching(true);
      }
    };
    setFetching(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching) getApi(page);
    else setFetching(false);
  }, [isFetching]);

  return { list, isFetching };
};

export default useInfinityScroll;
