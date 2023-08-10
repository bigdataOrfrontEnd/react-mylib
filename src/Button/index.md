# Button

## type

```tsx
import React from 'react';
import { Button } from 'react-mylib';

export default () => {
  const enterLoading = (index) => {
    console.log(index);
  };
  return (
    <div>
      <Button>default</Button>
      <br />
      <Button type="primary"> primary</Button>
      <Button onClick={(e) => enterLoading(e)}> click me</Button>
    </div>
  );
};
```
