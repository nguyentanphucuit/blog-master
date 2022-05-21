import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Album from './components';
import './styles.scss';
import { TabScrollButton } from '@mui/material';
import AlbumCategory from '../Posts/PostList/components/PostComponent';
import PostList from '../Posts/PostList/components/PostComponent';

AlbumFeature.propTypes = {};

function AlbumFeature({ user, vertical }) {
  const initAlbumList = useSelector((state) => state.album);
  const [albumList, setAlbumList] = useState(initAlbumList);

  useEffect(() => {
    async function fetchAlbumList() {
      const request = 'https://jsonplaceholder.typicode.com/albums';
      const response = await fetch(request);
      const responseJSON = await response.json(response);

      setAlbumList(responseJSON);
    }
    fetchAlbumList();
  }, []);

  const albumCategory = albumList.filter((album) =>
    vertical ? album.userId == 1 : album.userId == 2
  );

  return (
    <>
      <h2>CATEGORY </h2>
      <ul className={vertical ? 'vertical ' : 'horizontal'}>
        {albumCategory.map((album) => (
          <Album user={user} key={'album-' + album.id} {...album} />
        ))}
      </ul>
    </>
  );
}

export default AlbumFeature;
