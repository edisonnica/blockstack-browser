// flow-typed signature: 114add35a1264a6ed8b59d446306b830
// flow-typed version: aff2bf770e/react-redux_v4.x.x/flow_>=v0.53.x

import type { Dispatch, Store } from "redux";

declare module "react-redux" {
  /*

    S = State
    A = Action
    OP = OwnProps
    SP = StateProps
    DP = DispatchProps

  */

  declare type MapStateToProps<S, OP: Object, SP: Object> = (
    state: S,
    ownProps: OP
  ) => SP;

  declare type MapDispatchToProps<A, OP: Object, DP: Object> =
    | ((dispatch: Dispatch<A>, ownProps: OP) => DP)
    | DP;

  declare type MergeProps<SP, DP: Object, OP: Object, P: Object> = (
    stateProps: SP,
    dispatchProps: DP,
    ownProps: OP
  ) => P;

  declare class ConnectedComponent<OP, P> extends React$Component<OP> {
    static WrappedComponent: Class<React$Component<P>>,
    getWrappedInstance(): React$Component<P>,
    props: OP,
    state: void
  }

  declare type ConnectedComponentClass<OP, P> = Class<
    ConnectedComponent<OP, P>
  >;

  declare type Connector<OP, P> = (
    component: React$ComponentType<P>
  ) => ConnectedComponentClass<OP, P>;

  declare class Provider<S, A> extends React$Component<{
    store: Store<S, A>,
    children?: any
  }> {}

  declare type ConnectOptions = {
    pure?: boolean,
    withRef?: boolean
  };

  declare type Null = null | void;

  declare function connect<A, OP>(
    ...rest: Array<void> // <= workaround for https://github.com/facebook/flow/issues/2360
  ): Connector<OP, $Supertype<{ dispatch: Dispatch<A> } & OP>>;

  declare function connect<A, OP>(
    mapStateToProps: Null,
    mapDispatchToProps: Null,
    mergeProps: Null,
    options: ConnectOptions
  ): Connector<OP, $Supertype<{ dispatch: Dispatch<A> } & OP>>;

  declare function connect<S, A, OP, SP>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: Null,
    mergeProps: Null,
    options?: ConnectOptions
  ): Connector<OP, $Supertype<SP & { dispatch: Dispatch<A> } & OP>>;

  declare function connect<A, OP, DP>(
    mapStateToProps: Null,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>,
    mergeProps: Null,
    options?: ConnectOptions
  ): Connector<OP, $Supertype<DP & OP>>;

  declare function connect<S, A, OP, SP, DP>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>,
    mergeProps: Null,
    options?: ConnectOptions
  ): Connector<OP, $Supertype<SP & DP & OP>>;

  declare function connect<S, A, OP, SP, DP, P>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>,
    mergeProps: MergeProps<SP, DP, OP, P>,
    options?: ConnectOptions
  ): Connector<OP, P>;
}
