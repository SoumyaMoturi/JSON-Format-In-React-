import React, { useState } from 'react';

function Folder({ data }) {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <span onClick={() => setExpand(!expand)}>
        {' '}
        {expand ? <span>&#9660;</span> : <span>&#9658;</span>}&nbsp;
        <span style={{ fontSize: 25, color: 'red' }}>{data.name}</span>
      </span>
      <br />
      <div style={{ display: expand ? 'block' : 'none', paddingLeft: 35 }}>
        {data.items.map((d) => (
          <Folder key={d.name} data={d} />
        ))}
      </div>
    </div>
  );
}

export default Folder;
