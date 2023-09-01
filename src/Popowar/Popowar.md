```tsx
import React from 'react';
import { MyPopover } from 'react-mylib';
export default () => {
  return (
    <div>
      <MyPopover content={<div>top-start</div>} placement="top-start">
        <div>333</div>
      </MyPopover>
    </div>
  );
};
```

<API src="./index.tsx"></API>
