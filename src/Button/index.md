# Button

## type

```tsx
import React from 'react';
import { Button } from 'react-mylib';

export default () => {
  const enterLoading = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <Button>default</Button>
      <br />
      <Button type="primary"> primary</Button>
      <Button onClick={enterLoading}> click me</Button>
    </div>
  );
};
```
