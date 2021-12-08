import React from 'react';

function HeaderComponent({Icon, Title}){
  return (
    <div style={{color:'gray', textAlign:'left', paddingInline:20, paddingBlock:10, display:'flex', gap:20}}>
      <p style={{fontSize:18}}>
       {Icon}
      </p>
      <p style={{fontSize:18}}>
        {Title}
      </p>
    </div>
  );
}

export default HeaderComponent;