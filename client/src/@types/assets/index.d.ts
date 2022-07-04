declare module "\*.svg" {
  import React = require("react");
  const content: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
  export default content;
}

declare module "\*.jpg" {
  const content: string;
  export default content;
}

declare module "\*.png" {
  const content: string;
  export default content;
}

declare module "\*.json" {
  const content: string;
  export default content;
}

export interface INFT {
  
}