import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface LinkWrapperProps extends LinkProps {
  ownerState: Record<string, unknown>;
}

const LinkWrapper = React.forwardRef<HTMLAnchorElement, LinkWrapperProps>((props, ref) => {
  const { ownerState, ...rest } = props;
  return <Link {...rest} ref={ref} />;
});

export default LinkWrapper;