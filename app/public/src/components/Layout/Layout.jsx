import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const layout_mapping = (layout) => {
  let
    col = layout.col,
    layout_style;

  if (Array.isArray(col) && col.length === 4) {
    layout_style = `col-lg-${col[0]} col-md-${col[1]} col-sm-${col[2]} col-xs-${col[3]}`;
  }
  else {
    layout_style = `col-lg-${col} col-md-${col} col-sm-${col} col-xs-${col}`;
  }
  return layout_style;
};


const Layout = (props) => {
  if (!props.layout) {
    return (
      <div>
        {props.children}
      </div>
    )
  }
  let layout_class = layout_mapping(props.layout);
  return (
    <div className={layout_class}>
      {props.children}
    </div>
  )
};

export const LayoutRow = (props) => {
  if (!props.layout) {
    return (
      <div className="row">
        {props.children}
      </div>
    )
  }
  let layout_class = layout_mapping(props.layout);
  return (
    <div className={layout_class}>
      <div className="row" styleName="row">
        {props.children}
      </div>
    </div>
  )
};

export const LayoutCon = (props) => {
  if (!props.layout || props.layout.fluid === false) {
    return (
      <div className="container">
        {props.children}
      </div>
    )
  }
  return (
    <div className="container-fluid">
      {props.children}
    </div>
  )
};

export default CSSModules(Layout, styles);
