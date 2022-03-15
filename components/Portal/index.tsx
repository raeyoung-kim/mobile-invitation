import { useEffect, useMemo } from 'react';
import type { FC, AriaAttributes } from 'react';
import { createPortal } from 'react-dom';

export interface Props extends AriaAttributes {
  style?: Partial<CSSStyleDeclaration>;
}

const Portal: FC<Props> = ({ children, style }) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (style) {
      for (const property in style) {
        const value = style[property];
        if (value) element.style[property] = value;
      }
      if (style.position === 'absolute')
        document.body.style.position = 'relative';
    }

    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
      if (document.body.style.position) document.body.removeAttribute('style');
    };
  }, [element, style]);

  return createPortal(children, element);
};

export default Portal;
