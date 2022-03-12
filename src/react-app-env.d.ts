 /// <reference types="react-scripts" />
declare module '*.css';
declare module '*.scss';
declare module 'react-materialize';
declare module 'react-router';
declare module 'flux';
declare module 'react-router-dom';
declare module 'url:*' {
    export default string;
}
declare module "*.png" {
    const value: any;
    export default value;
}
declare module "*.svg" {
    const content: any;
    export default content;
}
declare module "*.mp4" {
    const content: any;
    export default content;
}
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}