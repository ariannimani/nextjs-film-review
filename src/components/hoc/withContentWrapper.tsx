import React, { ComponentType } from "react";

type withContentWrapperProps = {
  // You can define any additional props that the HOC may need here
};

const withContentWrapper = <P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P & withContentWrapperProps> => {
  const withContentWrapper: React.FC<P & withContentWrapperProps> = (props) => (
    <div className="page-single">
      <div className="container">
        <div className="row ipad-width">
          <WrappedComponent {...props} />
        </div>
      </div>
    </div>
  );

  return withContentWrapper;
};

export default withContentWrapper;
