import React from 'react';
import Flat from './flat';

// TODO: the props contains flats, selectedFlat and selectFlat
const FlatList = (props) => {
  // TODO: maps over flats and creates Flat
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          // selected is a bolean
          selected={flat.name === props.selectedFlat.name}
          // index is the rank index in the array from data
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
