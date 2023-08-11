# Button

## type

```tsx
import React from 'react';
import { Button } from 'react-mylib';

export default () => {
  const styles = { display: 'flex', justifyContent: 'space-between' };
  const enterLoading = (e) => {
    console.log(e.target);
  };
  return (
    <div style={styles}>
      <Button>default</Button>
      <Button type="primary"> primary</Button>
      <Button type="dashed"> dashed</Button>
      <Button type="danger"> danger</Button>
    </div>
  );
};
```

## disabled

```jsx
import React from 'react';
import { Button } from 'react-mylib';
export default () => {
  const styles = { display: 'flex', justifyContent: 'space-between' };
  const enterLoading = (e) => {
    console.log(e.target);
  };
  return (
    <div style={styles}>
      <Button disabled>disabled</Button>
    </div>
  );
};
```

## 幽灵按钮

```jsx
import React from 'react';
import { Button } from 'react-mylib';
export default () => {
  const styles = { display: 'flex', justifyContent: 'space-between' };
  const enterLoading = (e) => {
    console.log(e.target);
  };
  return (
    <div style={styles}>
      <Button ghost={true}>幽灵按钮</Button>
      <Button type="primary" ghost={true}>
        幽灵按钮
      </Button>
    </div>
  );
};
```

<API></API>
